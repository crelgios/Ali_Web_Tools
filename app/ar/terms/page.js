import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";

export const metadata = createMetadata("ar", "terms");

export default function Page() {
  return (
    <SiteShell lang="ar">
      <main className="container">
        <section className="hero">
          <h1>شروط الخدمة</h1>
          <p>باستخدام أدوات PDF، فإنك توافق على استخدام الموقع بشكل مسؤول.</p>
        </section>
        <article className="card blog-post">
          <p>توفر أدوات PDF أدوات مجانية عبر الإنترنت لتحويل الملفات ودمجها.</p>
<p>أنت مسؤول عن الملفات التي تختار معالجتها.</p>
<p>لا نضمن أن كل ملف سيتم تحويله بشكل مثالي.</p>
<p>لا تستخدم هذا الموقع لأي نشاط غير قانوني أو ضار أو مسيء.</p>
        </article>
      </main>
    </SiteShell>
  );
}
