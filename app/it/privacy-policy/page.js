import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";

export const metadata = createMetadata("it", "privacy-policy");

export default function Page() {
  return (
    <SiteShell lang="it">
      <main className="container">
        <section className="hero">
          <h1>Informativa sulla Privacy</h1>
          <p>Informativa sulla Privacy</p>
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
