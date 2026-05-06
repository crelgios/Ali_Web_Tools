import { SITE_URL, buildUrl } from "../lib/seoConfig";

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: buildUrl("/sitemap.xml"),
    host: SITE_URL,
  };
}
