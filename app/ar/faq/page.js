import SiteShell from "../../../components/SiteShell";
import { getTrustHreflang } from "../../../lib/trustTranslations";

export const metadata = {
  title: "الأسئلة الشائعة | PDF Tools",
  description: "إجابات عن الأسئلة الشائعة حول أدوات PDF.",
  alternates: {
    canonical: "/ar/faq",
    languages: getTrustHreflang("faq")
  }
};

export default function Page() {
  return (
    <SiteShell lang="ar">
      <main className="container">
        <section className="hero">
          <h1>الأسئلة الشائعة</h1>
          <p>إجابات عن الأسئلة الشائعة حول أدوات PDF.</p>
        </section>
        <section className="faq-list">
          <div className="card faq-card"><h2>هل يتم تخزين ملفاتي؟</h2><p>لا. تتم معالجة الملفات في متصفحك كلما أمكن ولا نقوم بتخزينها.</p></div>
<div className="card faq-card"><h2>هل الأداة مجانية؟</h2><p>نعم، أدوات PDF الأساسية مجانية.</p></div>
<div className="card faq-card"><h2>هل تعمل على الهاتف؟</h2><p>نعم، تعمل على الهاتف والتابlet وسطح المكتب.</p></div>
<div className="card faq-card"><h2>هل أحتاج إلى حساب؟</h2><p>لا، التسجيل غير مطلوب.</p></div>
        </section>
      </main>
    </SiteShell>
  );
}
