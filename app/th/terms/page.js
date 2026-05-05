import SiteShell from "../../../components/SiteShell";
import { getTrustHreflang } from "../../../lib/trustTranslations";

export const metadata = {
  title: "ข้อกำหนดการใช้งาน | Ali W Vide",
  description: "ข้อกำหนดการใช้งาน",
  alternates: {
    canonical: "/th/terms",
    languages: getTrustHreflang("terms")
  }
};

export default function Page() {
  return (
    <SiteShell lang="th">
      <main className="container">
        <section className="hero">
          <h1>ข้อกำหนดการใช้งาน</h1>
          <p>ข้อกำหนดการใช้งาน</p>
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
