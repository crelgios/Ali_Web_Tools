import SiteShell from "../../../components/SiteShell";
import { getTrustHreflang } from "../../../lib/trustTranslations";

export const metadata = {
  title: "Conditions d’utilisation | Ali W Vide",
  description: "Conditions d’utilisation",
  alternates: {
    canonical: "/fr/terms",
    languages: getTrustHreflang("terms")
  }
};

export default function Page() {
  return (
    <SiteShell lang="fr">
      <main className="container">
        <section className="hero">
          <h1>Conditions d’utilisation</h1>
          <p>Conditions d’utilisation</p>
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
