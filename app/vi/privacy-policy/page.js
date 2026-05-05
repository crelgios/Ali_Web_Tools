import SiteShell from "../../../components/SiteShell";
import { getTrustHreflang } from "../../../lib/trustTranslations";

export const metadata = {
  title: "Chính sách quyền riêng tư | Ali W Vide",
  description: "Chính sách quyền riêng tư",
  alternates: {
    canonical: "/vi/privacy-policy",
    languages: getTrustHreflang("privacy-policy")
  }
};

export default function Page() {
  return (
    <SiteShell lang="vi">
      <main className="container">
        <section className="hero">
          <h1>Chính sách quyền riêng tư</h1>
          <p>Chính sách quyền riêng tư</p>
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
