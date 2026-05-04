import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "دمج PDF",
  description: "اجمع عدة ملفات PDF في ملف واحد.",
  alternates: {
    canonical: "/ar/merge-pdf",
    languages: getHreflang("merge-pdf")
  }
};

export default function Page() {
  return (
    <SiteShell lang="ar">
      <MergePdfTool language="ar" />
    </SiteShell>
  );
}
