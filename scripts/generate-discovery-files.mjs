import { mkdir, writeFile } from "node:fs/promises"
import { resolve } from "node:path"
import { ROUTES, SITE_ORIGIN } from "./site-routes.mjs"

const output = resolve(process.argv[2] || "public")
await mkdir(output, { recursive: true })
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${ROUTES.map(({ path, modified }) => `  <url>\n    <loc>${SITE_ORIGIN}${path}</loc>\n    <lastmod>${modified}</lastmod>\n  </url>`).join("\n")}\n</urlset>\n`
const robots = `User-agent: *\nAllow: /\n\nUser-agent: OAI-SearchBot\nAllow: /\n\nUser-agent: GPTBot\nAllow: /\n\nUser-agent: Google-Extended\nAllow: /\n\nUser-agent: PerplexityBot\nAllow: /\n\n# Private credentials are never deployed under a public URL.\n# robots.txt is not a security control; the build fails if secret patterns enter dist.\nSitemap: ${SITE_ORIGIN}/sitemap.xml\n`
const links = ROUTES.map(({ path }) => `- [${path === "/" ? "Home" : path.split("/").filter(Boolean).join(" — ")}](${SITE_ORIGIN}${path})`).join("\n")
const llms = `# BlackVault Group LLC\n\nPractical AI consulting and automation for small and mid-sized businesses. Based in Hampton Roads, Virginia, and serving qualified businesses across the United States.\n\n## Public pages\n${links}\n\n## Editorial approach\nArticles explain buying decisions, implementation responsibilities, security, ownership, testing, and operating tradeoffs without guaranteed outcomes.\n`
await Promise.all([writeFile(resolve(output, "sitemap.xml"), xml), writeFile(resolve(output, "robots.txt"), robots), writeFile(resolve(output, "llms.txt"), llms)])
console.log(`Generated sitemap.xml, robots.txt, and llms.txt in ${output}`)
