import SiteShell from "../../../components/SiteShell";
import { getTrustHreflang } from "../../../lib/trustTranslations";

export const metadata = {
  title: "プライバシーポリシー | Ali W Vide",
  description: "プライバシーポリシー",
  alternates: {
    canonical: "/ja/privacy-policy",
    languages: getTrustHreflang("privacy-policy")
  }
};

export default function Page() {
  return (
    <SiteShell lang="ja">
      <main className="container">
        <section className="hero">
          <h1>プライバシーポリシー</h1>
          <p>プライバシーポリシー</p>
        </section>
        <article className="card blog-post">
          <p>Files are processed in your browser whenever possible.</p>
<p>We do not permanently store your uploaded files.</p>
<p>This page explains how we protect your privacy while using Ali W Vide.</p>
        </article>
      </main>
    </SiteShell>
  );
}
