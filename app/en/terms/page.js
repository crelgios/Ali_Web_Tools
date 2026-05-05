import SiteShell from "../../../components/SiteShell";
import { getTrustHreflang } from "../../../lib/trustTranslations";

export const metadata = {
  title: "Terms of Service | PDF Tools",
  description: "By using PDF Tools, you agree to use the website responsibly.",
  alternates: {
    canonical: "/en/terms",
    languages: getTrustHreflang("terms")
  }
};

export default function Page() {
  return (
    <SiteShell lang="en">
      <main className="container">
        <section className="hero">
          <h1>Terms of Service</h1>
          <p>By using PDF Tools, you agree to use the website responsibly.</p>
        </section>
        <article className="card blog-post">
          <p>PDF Tools provides free online tools for converting and merging files.</p>
<p>You are responsible for the files you choose to process.</p>
<p>We do not guarantee that every file will convert perfectly.</p>
<p>Do not use this website for illegal, harmful or abusive activity.</p>
        </article>
      </main>
    </SiteShell>
  );
}
