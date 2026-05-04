import SiteShell from "../../../components/SiteShell";
import { getTrustHreflang } from "../../../lib/trustTranslations";

export const metadata = {
  title: "利用規約 | PDF Tools",
  description: "利用規約",
  alternates: {
    canonical: "/ja/terms",
    languages: getTrustHreflang("terms")
  }
};

export default function Page() {
  return (
    <SiteShell lang="ja">
      <main className="container">
        <section className="hero">
          <h1>利用規約</h1>
          <p>利用規約</p>
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
