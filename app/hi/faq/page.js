import SiteShell from "../../../components/SiteShell";
import { getTrustHreflang } from "../../../lib/trustTranslations";

export const metadata = {
  title: "अक्सर पूछे जाने वाले सवाल | PDF Tools",
  description: "PDF Tools के बारे में सामान्य सवालों के जवाब।",
  alternates: {
    canonical: "/hi/faq",
    languages: getTrustHreflang("faq")
  }
};

export default function Page() {
  return (
    <SiteShell lang="hi">
      <main className="container">
        <section className="hero">
          <h1>अक्सर पूछे जाने वाले सवाल</h1>
          <p>PDF Tools के बारे में सामान्य सवालों के जवाब।</p>
        </section>
        <section className="faq-list">
          <div className="card faq-card"><h2>क्या मेरी फाइलें सेव होती हैं?</h2><p>नहीं। फाइलें संभव होने पर आपके ब्राउज़र में प्रोसेस होती हैं और हम उन्हें सेव नहीं करते।</p></div>
<div className="card faq-card"><h2>क्या यह टूल मुफ्त है?</h2><p>हाँ, बेसिक PDF टूल्स मुफ्त हैं।</p></div>
<div className="card faq-card"><h2>क्या यह मोबाइल पर काम करता है?</h2><p>हाँ, यह वेबसाइट मोबाइल, टैबलेट और कंप्यूटर ब्राउज़र पर काम करती है।</p></div>
<div className="card faq-card"><h2>क्या अकाउंट बनाना जरूरी है?</h2><p>नहीं, साइनअप जरूरी नहीं है।</p></div>
        </section>
      </main>
    </SiteShell>
  );
}
