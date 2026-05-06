import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";

export const metadata = createMetadata("ko", "terms");

export default function Page() {
  return (
    <SiteShell lang="ko">
      <main className="container">
        <section className="hero">
          <h1>서비스 약관</h1>
          <p>서비스 약관</p>
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
