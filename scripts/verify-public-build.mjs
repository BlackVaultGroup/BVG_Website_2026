import { readdir, readFile, stat } from "node:fs/promises"
import { extname, join } from "node:path"
const root = "dist"
const patterns = [
  /sb_secret_[A-Za-z0-9_-]+/i,
  /SUPABASE_SERVICE_ROLE_KEY/i,
  /(?:VITE|NEXT_PUBLIC)_[A-Z0-9_]*(?:SECRET|PRIVATE|SERVICE_ROLE|ADMIN)[A-Z0-9_]*[\s"':=]+[^\s"']{12,}/i,
  /sk-proj-[A-Za-z0-9_-]{20,}/i,
  /(?:sk_live|rk_live)_[A-Za-z0-9]{16,}/,
  /gh[pousr]_[A-Za-z0-9]{20,}/,
  /AKIA[0-9A-Z]{16}/,
]
async function files(dir) { return (await Promise.all((await readdir(dir)).map(async (name) => { const path = join(dir, name); return (await stat(path)).isDirectory() ? files(path) : [path] }))).flat() }
const textExtensions = new Set([".html", ".js", ".css", ".json", ".xml", ".txt", ".map"])
const violations = []
for (const file of await files(root)) { if (!textExtensions.has(extname(file))) continue; const contents = await readFile(file, "utf8"); if (patterns.some((pattern) => pattern.test(contents))) violations.push(file) }
if (violations.length) { console.error(`Secret-like values found in public build files: ${violations.join(", ")}`); process.exit(1) }
console.log("Public build secret scan passed.")
