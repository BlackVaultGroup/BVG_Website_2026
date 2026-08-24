import { PassThrough } from "node:stream"
import { renderToPipeableStream } from "react-dom/server"
import { StaticRouter } from "react-router-dom"
import { HelmetProvider, type HelmetServerState } from "react-helmet-async"
import { AppRoutes } from "@/App"
import { ScheduleCallProvider } from "@/components/schedule-call-provider"

type HelmetContext = { helmet?: HelmetServerState | null }

export async function render(url: string) {
  const helmetContext: HelmetContext = {}
  const html = await new Promise<string>((resolve, reject) => {
    let settled = false
    const stream = new PassThrough()
    let body = ""
    stream.setEncoding("utf8")
    stream.on("data", (chunk: string) => { body += chunk })
    stream.on("end", () => resolve(body))
    stream.on("error", reject)
    const { pipe, abort } = renderToPipeableStream(
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <ScheduleCallProvider>
            <AppRoutes />
          </ScheduleCallProvider>
        </StaticRouter>
      </HelmetProvider>,
      {
        onAllReady() { settled = true; pipe(stream) },
        onShellError(error) { reject(error) },
        onError(error) { if (!settled) reject(error) },
      },
    )
    setTimeout(() => { if (!settled) { abort(); reject(new Error(`SSR timed out for ${url}`)) } }, 15000)
  })
  const helmet = helmetContext.helmet
  const head = helmet ? [helmet.title, helmet.meta, helmet.link, helmet.script].map((item) => item.toString()).join("\n") : ""
  return { html, head }
}
