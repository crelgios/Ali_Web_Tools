import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import { getTrustText, getTrustHreflang } from "../../../lib/trustTranslations";

const trust = getTrustText("en");

export const metadata = createMetadata("en", "privacy-policy");

export default function Page() {
  return (
    <SiteShell lang="en">
      <main className="container">
        <section className="hero">
          <h1>{trust.privacyTitle}</h1>
          <p>{trust.privacyDesc}</p>
        </section>
        <article className="card blog-post">
          {trust.privacyBody.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </article>
      </main>
    </SiteShell>
  );
}
