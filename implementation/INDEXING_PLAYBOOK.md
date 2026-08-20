# Indexing and Crawlability Playbook

## What ships in this implementation

- Every canonical public route is prerendered to its own HTML file.
- `sitemap.xml` is generated from the same route registry used for release checks.
- `robots.txt` points crawlers to the sitemap and allows normal search and AI-search retrieval.
- Redirect-only URLs return 301 responses through Netlify rules.
- Unknown URLs use `404.html` and return a 404 rather than the homepage shell.
- The 404 page is `noindex` and is excluded from the sitemap.
- A production-build scan fails when common private-key patterns appear in `dist/`.

## Important API-key rule

`robots.txt` cannot secure a secret. It only gives crawler instructions and a bad actor may ignore it. Private keys must never be copied into `public/`, committed to the repository, or exposed through `VITE_*` browser variables. Store private credentials in server-side deployment environment variables and rotate any credential that was ever public.

## After deployment

1. Test the homepage, every sitemap URL, every redirect source, and a made-up URL with an HTTP status checker.
2. Confirm each public route has its own title, canonical, H1, visible copy, and structured data in the raw HTML response.
3. Add the HTTPS domain property in Google Search Console and Bing Webmaster Tools.
4. Submit `https://blackvaultgroupllc.com/sitemap.xml` to both tools.
5. Request indexing for the homepage, Articles hub, and the three article URLs after the deployed checks pass.
6. Inspect coverage weekly during the first month. Do not request indexing repeatedly when a technical issue remains.

## If a page is not indexed

- **Blocked by robots:** verify the deployed `robots.txt`, remove the unintended disallow rule, redeploy, and retest.
- **Excluded by `noindex`:** inspect raw HTML and HTTP headers, remove the unintended directive, redeploy, then request validation.
- **Duplicate or alternate canonical:** make the canonical self-referencing and ensure internal links and sitemap use the same HTTPS URL.
- **Crawled or discovered, not indexed:** strengthen original content, internal links, source support, and page usefulness; confirm the page is not a near-duplicate.
- **Soft 404:** confirm the URL contains substantial route-specific content and that unknown URLs return a true 404.
- **Server or redirect error:** remove loops and chains, then verify one-hop 301 redirects and stable 200 responses on destinations.
- **JavaScript rendering issue:** verify the meaningful copy and metadata exist in the initial HTML. This build prerenders them; a deployment adapter must preserve those files.

Indexing and AI citations are not guaranteed. Search engines decide what to crawl, index, rank, and cite.
