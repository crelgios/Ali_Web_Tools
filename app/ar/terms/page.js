import SiteShell from "../../../components/SiteShell";
import { getTrustHreflang } from "../../../lib/trustTranslations";

export const metadata = {
  title: "شروط الخدمة | PDF Tools",
  description: "باستخدام أدوات PDF، فإنك توافق على استخدام الموقع بشكل مسؤول.",
  alternates: {
    canonical: "/ar/terms",
    languages: getTrustHreflang("terms")
  }
};

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
