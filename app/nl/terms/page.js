import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import { getTrustHreflang } from "../../../lib/trustTranslations";

export const metadata = createPageMetadata("nl", "terms");

export default function Page() {
  return (
    <SiteShell lang="nl">
      <main className="container">
        <section className="hero">
          <h1>Servicevoorwaarden</h1>
          <p>Servicevoorwaarden</p>
        </section>
        <article className="card blog-post">
          <p>Use PDF Tools responsibly.</p>
<p>You are responsible for the files you process.</p>
<p>Do not use this website for illegal or harmful activity.</p>
        </article>
      </main>
    </SiteShell>
  );
}
