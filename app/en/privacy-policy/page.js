import SiteShell from "../../../components/SiteShell";
import { getTrustText, getTrustHreflang } from "../../../lib/trustTranslations";

const trust = getTrustText("en");

export const metadata = {
  title: `${trust.privacyTitle} | PDF Tools`,
  description: trust.privacyDesc,
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
