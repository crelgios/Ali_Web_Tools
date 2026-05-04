import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "PDFを結合",
  description: "PDFを結合",
  alternates: {
    canonical: "/ja/merge-pdf",
    languages: getHreflang("merge-pdf")
  }
};

export default function Page() {
  return (
    <SiteShell lang="ja">
      <MergePdfTool language="ja" />
    </SiteShell>
  );
}
