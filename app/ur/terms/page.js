import SiteShell from "../../../components/SiteShell";
import { getTrustHreflang } from "../../../lib/trustTranslations";

export const metadata = {
  title: "سروس کی شرائط | Ali W Vide",
  description: "سروس کی شرائط",
  alternates: {
    canonical: "/ur/terms",
    languages: getTrustHreflang("terms")
  }
};

export default function Page() {
  return (
    <SiteShell lang="ur">
      <main className="container">
        <section className="hero">
          <h1>سروس کی شرائط</h1>
          <p>سروس کی شرائط</p>
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
