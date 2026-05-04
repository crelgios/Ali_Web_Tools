import SiteShell from "../../../components/SiteShell";
import { getTrustHreflang } from "../../../lib/trustTranslations";

export const metadata = {
  title: "よくある質問 | PDF Tools",
  description: "よくある質問",
  alternates: {
    canonical: "/ja/faq",
    languages: getTrustHreflang("faq")
  }
};

export default function Page() {
  return (
    <SiteShell lang="ja">
      <main className="container">
        <section className="hero">
          <h1>よくある質問</h1>
          <p>よくある質問</p>
        </section>
        <section className="faq-list">
          <div className="card faq-card"><h2>Are files stored?</h2><p>No, files are processed in your browser whenever possible.</p></div>
<div className="card faq-card"><h2>Is it free?</h2><p>Yes, basic PDF tools are free.</p></div>
<div className="card faq-card"><h2>Does it work on mobile?</h2><p>Yes, it works on mobile and desktop browsers.</p></div>
        </section>
      </main>
    </SiteShell>
  );
}
