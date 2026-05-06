import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import { getTrustHreflang } from "../../../lib/trustTranslations";

export const metadata = createPageMetadata("pl", "privacy-policy");

export default function Page() {
  return (
    <SiteShell lang="pl">
      <main className="container">
        <section className="hero">
          <h1>Polityka prywatności</h1>
          <p>Polityka prywatności</p>
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
