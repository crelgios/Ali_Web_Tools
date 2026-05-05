import SiteShell from "../../../components/SiteShell";
import { getTrustHreflang } from "../../../lib/trustTranslations";

export const metadata = {
  title: "شرایط خدمات | Ali W Vide",
  description: "شرایط خدمات",
  alternates: {
    canonical: "/fa/terms",
    languages: getTrustHreflang("terms")
  }
};

export default function Page() {
  return (
    <SiteShell lang="fa">
      <main className="container">
        <section className="hero">
          <h1>شرایط خدمات</h1>
          <p>شرایط خدمات</p>
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
