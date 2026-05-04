export default function sitemap() {
  const baseUrl = "https://your-domain.com";

  const routes = [
    "",
    "/en",
    "/hi",
    "/es",
    "/en/jpg-to-pdf",
    "/en/png-to-pdf",
    "/en/merge-pdf",
    "/hi/jpg-to-pdf",
    "/hi/png-to-pdf",
    "/hi/merge-pdf",
    "/es/jpg-to-pdf",
    "/es/png-to-pdf",
    "/es/merge-pdf",
    "/privacy-policy",
    "/terms",
    "/contact",
    "/blog/how-to-convert-jpg-to-pdf"
  ];

  return routes.map((route) => ({
    url: baseUrl + route,
    lastModified: new Date()
  }));
}
