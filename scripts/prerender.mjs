import { readFile, mkdir, writeFile, copyFile } from "node:fs/promises"
import { dirname, resolve } from "node:path"
import { fileURLToPath, pathToFileURL } from "node:url"
import { ROUTES, REDIRECTS } from "./site-routes.mjs"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const template = await readFile(resolve(root, "dist/index.html"), "utf8")
const { render } = await import(pathToFileURL(resolve(root, "dist-ssr/entry-server.js")).href)
async function outputPage(route, file) {
  const { html, head } = await render(route)
  // react-helmet-async v3 emits its tags in the React stream under React 19.
  // Move document-only tags into <head> so hydration starts on the same body tree.
  const documentTagPattern = /<title[^>]*>[\s\S]*?<\/title>|<meta[^>]*>|<link[^>]*>|<script[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/g
  const streamedHead = (html.match(documentTagPattern) || []).join("\n")
  const bodyHtml = html.replace(documentTagPattern, "")
  const page = template.replace("<!--app-head-->", [head, streamedHead].filter(Boolean).join("\n")).replace("<!--app-html-->", bodyHtml)
  const target = resolve(root, file)
  await mkdir(dirname(target), { recursive: true })
  await writeFile(target, page)
}
for (const { path } of ROUTES) await outputPage(path, path === "/" ? "dist/index.html" : `dist${path}/index.html`)
await outputPage("/404", "dist/404.html")
await mkdir(resolve(root, "dist/404"), { recursive: true })
await copyFile(resolve(root, "dist/404.html"), resolve(root, "dist/404/index.html"))
const redirects = [...REDIRECTS.map(([from, to]) => `${from} ${to} 301`), "/* /404.html 404"].join("\n") + "\n"
await writeFile(resolve(root, "dist/_redirects"), redirects)
console.log(`Prerendered ${ROUTES.length} public routes plus a true 404.`)
