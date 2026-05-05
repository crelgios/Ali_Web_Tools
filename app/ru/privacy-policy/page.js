import SiteShell from "../../../components/SiteShell";
import { getTrustHreflang } from "../../../lib/trustTranslations";

export const metadata = {
  title: "Политика конфиденциальности | Ali W Vide",
  description: "Политика конфиденциальности",
  alternates: {
    canonical: "/ru/privacy-policy",
    languages: getTrustHreflang("privacy-policy")
  }
};

export default function Page() {
  return (
    <SiteShell lang="ru">
      <main className="container">
        <section className="hero">
          <h1>Политика конфиденциальности</h1>
          <p>Политика конфиденциальности</p>
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
