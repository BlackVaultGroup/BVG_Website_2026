import { readFile } from "node:fs/promises"
import { resolve } from "node:path"
import { ROUTES, SITE_ORIGIN } from "./site-routes.mjs"
const failures = []
const sitemap = await readFile(resolve("dist/sitemap.xml"), "utf8")
for (const { path } of ROUTES) {
  const file = resolve(path === "/" ? "dist/index.html" : `dist${path}/index.html`)
  let html = ""
  try { html = await readFile(file, "utf8") } catch { failures.push(`${path}: missing prerendered HTML`); continue }
  if (!html.includes("<h1")) failures.push(`${path}: missing H1`)
  if (!html.includes(`rel="canonical" href="${SITE_ORIGIN}${path}"`)) failures.push(`${path}: incorrect canonical`)
  if (!html.includes("application/ld+json")) failures.push(`${path}: missing JSON-LD`)
  if (!sitemap.includes(`<loc>${SITE_ORIGIN}${path}</loc>`)) failures.push(`${path}: missing from sitemap`)
}
const sitemapCount = (sitemap.match(/<loc>/g) || []).length
if (sitemapCount !== ROUTES.length) failures.push(`sitemap has ${sitemapCount} URLs; expected ${ROUTES.length}`)
const notFound = await readFile(resolve("dist/404.html"), "utf8")
if (!notFound.includes("noindex")) failures.push("404: missing noindex")
if (failures.length) { console.error(failures.join("\n")); process.exit(1) }
console.log(`Route, canonical, JSON-LD, and sitemap checks passed for ${ROUTES.length} public pages.`)
