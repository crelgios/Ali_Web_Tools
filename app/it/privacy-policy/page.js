import SiteShell from "../../../components/SiteShell";
import { getTrustHreflang } from "../../../lib/trustTranslations";

export const metadata = {
  title: "Informativa sulla Privacy | Ali W Vide",
  description: "Informativa sulla Privacy",
  alternates: {
    canonical: "/it/privacy-policy",
    languages: getTrustHreflang("privacy-policy")
  }
};

export default function Page() {
  return (
    <SiteShell lang="it">
      <main className="container">
        <section className="hero">
          <h1>Informativa sulla Privacy</h1>
          <p>Informativa sulla Privacy</p>
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
