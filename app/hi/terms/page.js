import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import { getTrustHreflang } from "../../../lib/trustTranslations";

export const metadata = createPageMetadata("hi", "terms");

export default function Page() {
  return (
    <SiteShell lang="hi">
      <main className="container">
        <section className="hero">
          <h1>सेवा की शर्तें</h1>
          <p>PDF Tools का उपयोग करके आप वेबसाइट को जिम्मेदारी से उपयोग करने के लिए सहमत होते हैं।</p>
        </section>
        <article className="card blog-post">
          <p>PDF Tools फाइल बदलने और PDF मिलाने के लिए मुफ्त ऑनलाइन टूल्स देता है।</p>
<p>आप जिन फाइलों को प्रोसेस करते हैं, उनकी जिम्मेदारी आपकी है।</p>
<p>हम यह गारंटी नहीं देते कि हर फाइल बिल्कुल सही तरीके से कन्वर्ट होगी।</p>
<p>इस वेबसाइट का गलत, गैरकानूनी या नुकसानदायक उपयोग न करें।</p>
        </article>
      </main>
    </SiteShell>
  );
}
