import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "PDF মার্জ",
  description: "PDF মার্জ",
  alternates: {
    canonical: "/bn/merge-pdf",
    languages: getHreflang("merge-pdf")
  }
};

export default function Page() {
  return (
    <SiteShell lang="bn">
      <MergePdfTool language="bn" />
    </SiteShell>
  );
}
