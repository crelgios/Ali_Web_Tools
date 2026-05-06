import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import { getTrustHreflang } from "../../../lib/trustTranslations";

export const metadata = createPageMetadata("pl", "terms");

export default function Page() {
  return (
    <SiteShell lang="pl">
      <main className="container">
        <section className="hero">
          <h1>Warunki korzystania</h1>
          <p>Warunki korzystania</p>
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
