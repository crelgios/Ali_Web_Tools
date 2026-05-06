import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";

export const metadata = createMetadata("nl", "privacy-policy");

export default function Page() {
  return (
    <SiteShell lang="nl">
      <main className="container">
        <section className="hero">
          <h1>Privacybeleid</h1>
          <p>Privacybeleid</p>
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
