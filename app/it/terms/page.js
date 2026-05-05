import SiteShell from "../../../components/SiteShell";
import { getTrustHreflang } from "../../../lib/trustTranslations";

export const metadata = {
  title: "Termini di Servizio | Ali W Vide",
  description: "Termini di Servizio",
  alternates: {
    canonical: "/it/terms",
    languages: getTrustHreflang("terms")
  }
};

export default function Page() {
  return (
    <SiteShell lang="it">
      <main className="container">
        <section className="hero">
          <h1>Termini di Servizio</h1>
          <p>Termini di Servizio</p>
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
