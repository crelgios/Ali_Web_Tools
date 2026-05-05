import SiteShell from "../../../components/SiteShell";
import { getTrustHreflang } from "../../../lib/trustTranslations";

export const metadata = {
  title: "Politique de confidentialité | Ali W Vide",
  description: "Politique de confidentialité",
  alternates: {
    canonical: "/fr/privacy-policy",
    languages: getTrustHreflang("privacy-policy")
  }
};

export default function Page() {
  return (
    <SiteShell lang="fr">
      <main className="container">
        <section className="hero">
          <h1>Politique de confidentialité</h1>
          <p>Politique de confidentialité</p>
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
