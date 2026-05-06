import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import { getTrustHreflang } from "../../../lib/trustTranslations";

export const metadata = createPageMetadata("ko", "privacy-policy");

export default function Page() {
  return (
    <SiteShell lang="ko">
      <main className="container">
        <section className="hero">
          <h1>개인정보 처리방침</h1>
          <p>개인정보 처리방침</p>
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
