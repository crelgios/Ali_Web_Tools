import SiteShell from "../../../components/SiteShell";
import { getTrustHreflang } from "../../../lib/trustTranslations";

export const metadata = {
  title: "गोपनीयता नीति | PDF Tools",
  description: "आपकी गोपनीयता हमारे लिए महत्वपूर्ण है। फाइलें संभव होने पर आपके ब्राउज़र में प्रोसेस होती हैं और हम आपकी फाइलें सेव नहीं करते।",
  alternates: {
    canonical: "/hi/privacy-policy",
    languages: getTrustHreflang("privacy-policy")
  }
};

export default function Page() {
  return (
    <SiteShell lang="hi">
      <main className="container">
        <section className="hero">
          <h1>गोपनीयता नीति</h1>
          <p>आपकी गोपनीयता हमारे लिए महत्वपूर्ण है। फाइलें संभव होने पर आपके ब्राउज़र में प्रोसेस होती हैं और हम आपकी फाइलें सेव नहीं करते।</p>
        </section>
        <article className="card blog-post">
          <p>PDF Tools को सरल, उपयोगी और गोपनीयता-अनुकूल बनाया गया है।</p>
<p>ब्राउज़र आधारित टूल्स में आपकी फाइलें संभव होने पर आपके डिवाइस पर ही प्रोसेस होती हैं।</p>
<p>हम आपकी अपलोड की गई फाइलों को स्थायी रूप से सेव नहीं करते।</p>
<p>भविष्य में वेबसाइट सुधारने और चलाने के लिए बेसिक एनालिटिक्स या विज्ञापन टूल्स का उपयोग हो सकता है।</p>
        </article>
      </main>
    </SiteShell>
  );
}
