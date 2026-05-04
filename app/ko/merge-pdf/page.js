import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "PDF 병합",
  description: "PDF 병합",
  alternates: {
    canonical: "/ko/merge-pdf",
    languages: getHreflang("merge-pdf")
  }
};

export default function Page() {
  return (
    <SiteShell lang="ko">
      <MergePdfTool language="ko" />
    </SiteShell>
  );
}
