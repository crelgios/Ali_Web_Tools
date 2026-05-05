import SiteShell from "../../../components/SiteShell";
import { getTrustHreflang } from "../../../lib/trustTranslations";

export const metadata = {
  title: "นโยบายความเป็นส่วนตัว | Ali W Vide",
  description: "นโยบายความเป็นส่วนตัว",
  alternates: {
    canonical: "/th/privacy-policy",
    languages: getTrustHreflang("privacy-policy")
  }
};

export default function Page() {
  return (
    <SiteShell lang="th">
      <main className="container">
        <section className="hero">
          <h1>นโยบายความเป็นส่วนตัว</h1>
          <p>นโยบายความเป็นส่วนตัว</p>
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
