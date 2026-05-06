import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";

export const metadata = createMetadata("zh-CN", "terms");

export default function Page() {
  return (
    <SiteShell lang="zh-CN">
      <main className="container">
        <section className="hero">
          <h1>服务条款</h1>
          <p>服务条款</p>
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
