const CAL_SCRIPT_ID = "cal-com-embed-script"
const CAL_SCRIPT_SRC = "https://app.cal.com/embed/embed.js"

let loaderPromise: Promise<CalApi> | null = null

function installCalQueue(): CalApi {
  if (window.Cal) return window.Cal

  const queueCall = (api: CalApi, args: unknown[]) => {
    api.q = api.q ?? []
    api.q.push(args)
  }

  const cal = ((...args: unknown[]) => {
    if (args[0] === "init") {
      const namespace = args[1]
      const namespacedApi = ((...namespacedArgs: unknown[]) => {
        queueCall(namespacedApi, namespacedArgs)
      }) as CalApi

      namespacedApi.q = []
      if (typeof namespace === "string") {
        cal.ns = cal.ns ?? {}
        cal.ns[namespace] = namespacedApi
        queueCall(namespacedApi, args)
        return
      }
    }

    queueCall(cal, args)
  }) as CalApi

  cal.q = []
  cal.ns = {}
  window.Cal = cal
  return cal
}

export function loadCalEmbed(): Promise<CalApi> {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return Promise.reject(new Error("Cal.com embed can only load in a browser."))
  }

  if (loaderPromise) return loaderPromise

  const cal = installCalQueue()
  const existingScript = document.getElementById(CAL_SCRIPT_ID) as HTMLScriptElement | null

  loaderPromise = new Promise((resolve, reject) => {
    if (existingScript?.dataset.loaded === "true") {
      resolve(window.Cal ?? cal)
      return
    }

    const script = existingScript ?? document.createElement("script")
    script.id = CAL_SCRIPT_ID
    script.src = CAL_SCRIPT_SRC
    script.async = true

    const handleLoad = () => {
      script.dataset.loaded = "true"
      resolve(window.Cal ?? cal)
    }
    const handleError = () => {
      loaderPromise = null
      script.remove()
      reject(new Error("Cal.com could not be loaded."))
    }

    script.addEventListener("load", handleLoad, { once: true })
    script.addEventListener("error", handleError, { once: true })

    if (!existingScript) document.head.appendChild(script)
  })

  return loaderPromise
}

export function getNamespacedCalApi(cal: CalApi, namespace: string): CalApi {
  cal("init", namespace, { origin: "https://cal.com" })
  const api = cal.ns?.[namespace]
  if (!api) throw new Error("Cal.com namespace did not initialize.")
  return api
}
