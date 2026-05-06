import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";

export const metadata = createMetadata("ur", "privacy-policy");

export default function Page() {
  return (
    <SiteShell lang="ur">
      <main className="container">
        <section className="hero">
          <h1>رازداری کی پالیسی</h1>
          <p>رازداری کی پالیسی</p>
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
