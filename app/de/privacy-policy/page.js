import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";

export const metadata = createMetadata("de", "privacy-policy");

export default function Page() {
  return (
    <SiteShell lang="de">
      <main className="container">
        <section className="hero">
          <h1>Datenschutzrichtlinie</h1>
          <p>Datenschutzrichtlinie</p>
        </section>
        <article className="card blog-post">
          <p>Files are processed in your browser whenever possible.</p>
<p>We do not permanently store your uploaded files.</p>
<p>This page explains how we protect your privacy while using PDF Tools.</p>
        </article>
      </main>
    </SiteShell>
  );
}
