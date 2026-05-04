import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "Gộp PDF",
  description: "Gộp PDF",
  alternates: {
    canonical: "/vi/merge-pdf",
    languages: getHreflang("merge-pdf")
  }
};

export default function Page() {
  return (
    <SiteShell lang="vi">
      <MergePdfTool language="vi" />
    </SiteShell>
  );
}
