import SiteShell from "../../../components/SiteShell";
import { getTrustHreflang } from "../../../lib/trustTranslations";

export const metadata = {
  title: "服务条款 | Ali W Vide",
  description: "服务条款",
  alternates: {
    canonical: "/zh-CN/terms",
    languages: getTrustHreflang("terms")
  }
};

export default function Page() {
  return (
    <SiteShell lang="zh-CN">
      <main className="container">
        <section className="hero">
          <h1>服务条款</h1>
          <p>服务条款</p>
        </section>
        <article className="card blog-post">
          <p>Use Ali W Vide responsibly.</p>
<p>You are responsible for the files you process.</p>
<p>Do not use this website for illegal or harmful activity.</p>
        </article>
      </main>
    </SiteShell>
  );
}
