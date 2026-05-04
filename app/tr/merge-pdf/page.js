import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "PDF Birleştir",
  description: "PDF Birleştir",
  alternates: {
    canonical: "/tr/merge-pdf",
    languages: getHreflang("merge-pdf")
  }
};

export default function Page() {
  return (
    <SiteShell lang="tr">
      <MergePdfTool language="tr" />
    </SiteShell>
  );
}
