import SiteShell from "../../../components/SiteShell";
import { getTrustHreflang } from "../../../lib/trustTranslations";

export const metadata = {
  title: "Privacy Policy | PDF Tools",
  description: "Your privacy matters to us. Files are processed in your browser whenever possible and we do not store your files.",
  alternates: {
    canonical: "/en/privacy-policy",
    languages: getTrustHreflang("privacy-policy")
  }
};

export default function Page() {
  return (
    <SiteShell lang="en">
      <main className="container">
        <section className="hero">
          <h1>Privacy Policy</h1>
          <p>Your privacy matters to us. Files are processed in your browser whenever possible and we do not store your files.</p>
        </section>
        <article className="card blog-post">
          <p>We built PDF Tools to be simple, useful and privacy-friendly.</p>
<p>For browser-based tools, your files are processed directly on your device whenever possible.</p>
<p>We do not permanently store your uploaded files.</p>
<p>We may use basic analytics or advertising tools in the future to improve and support the website.</p>
        </article>
      </main>
    </SiteShell>
  );
}
