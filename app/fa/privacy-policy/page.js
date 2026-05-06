import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";

export const metadata = createMetadata("fa", "privacy-policy");

export default function Page() {
  return (
    <SiteShell lang="fa">
      <main className="container">
        <section className="hero">
          <h1>سیاست حفظ حریم خصوصی</h1>
          <p>سیاست حفظ حریم خصوصی</p>
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
