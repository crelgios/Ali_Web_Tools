import SiteShell from "../../../components/SiteShell";
import { getTrustHreflang } from "../../../lib/trustTranslations";

export const metadata = {
  title: "Kebijakan Privasi | Ali W Vide",
  description: "Kebijakan Privasi",
  alternates: {
    canonical: "/id/privacy-policy",
    languages: getTrustHreflang("privacy-policy")
  }
};

export default function Page() {
  return (
    <SiteShell lang="id">
      <main className="container">
        <section className="hero">
          <h1>Kebijakan Privasi</h1>
          <p>Kebijakan Privasi</p>
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
