import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";

export const metadata = createMetadata("ar", "privacy-policy");

export default function Page() {
  return (
    <SiteShell lang="ar">
      <main className="container">
        <section className="hero">
          <h1>سياسة الخصوصية</h1>
          <p>خصوصيتك مهمة لنا. تتم معالجة الملفات في متصفحك كلما أمكن ولا نقوم بتخزين ملفاتك.</p>
        </section>
        <article className="card blog-post">
          <p>صممنا أدوات PDF لتكون بسيطة ومفيدة وتحترم الخصوصية.</p>
<p>في الأدوات المعتمدة على المتصفح، تتم معالجة ملفاتك على جهازك كلما أمكن.</p>
<p>لا نقوم بتخزين الملفات المرفوعة بشكل دائم.</p>
<p>قد نستخدم أدوات تحليل أو إعلانات أساسية مستقبلاً لتحسين الموقع ودعمه.</p>
        </article>
      </main>
    </SiteShell>
  );
}
