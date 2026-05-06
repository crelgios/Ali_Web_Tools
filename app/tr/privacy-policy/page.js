import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import { getTrustHreflang } from "../../../lib/trustTranslations";

export const metadata = createPageMetadata("tr", "privacy-policy");

export default function Page() {
  return (
    <SiteShell lang="tr">
      <main className="container">
        <section className="hero">
          <h1>Gizlilik Politikası</h1>
          <p>Gizlilik Politikası</p>
        </section>
        <article className="card blog-post">
          <p>Files are processed in your browser whenever possible.</p>
<p>We do not permanently store your uploaded files.</p>
<p>This page explains how we protect your privacy while using PDF Tools.</p>
        </article>
      </main>
    </SiteShell>
  );
}
