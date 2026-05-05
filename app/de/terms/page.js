import SiteShell from "../../../components/SiteShell";
import { getTrustHreflang } from "../../../lib/trustTranslations";

export const metadata = {
  title: "Nutzungsbedingungen | Ali W Vide",
  description: "Nutzungsbedingungen",
  alternates: {
    canonical: "/de/terms",
    languages: getTrustHreflang("terms")
  }
};

export default function Page() {
  return (
    <SiteShell lang="de">
      <main className="container">
        <section className="hero">
          <h1>Nutzungsbedingungen</h1>
          <p>Nutzungsbedingungen</p>
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
