import SiteShell from "../../../components/SiteShell";
import { getTrustHreflang } from "../../../lib/trustTranslations";

export const metadata = {
  title: "Hizmet Şartları | PDF Tools",
  description: "Hizmet Şartları",
  alternates: {
    canonical: "/tr/terms",
    languages: getTrustHreflang("terms")
  }
};

export default function Page() {
  return (
    <SiteShell lang="tr">
      <main className="container">
        <section className="hero">
          <h1>Hizmet Şartları</h1>
          <p>Hizmet Şartları</p>
        </section>
        <article className="card blog-post">
          <p>Use PDF Tools responsibly.</p>
<p>You are responsible for the files you process.</p>
<p>Do not use this website for illegal or harmful activity.</p>
        </article>
      </main>
    </SiteShell>
  );
}
