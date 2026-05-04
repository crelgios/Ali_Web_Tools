import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "ادغام PDF",
  description: "ادغام PDF",
  alternates: {
    canonical: "/fa/merge-pdf",
    languages: getHreflang("merge-pdf")
  }
};

export default function Page() {
  return (
    <SiteShell lang="fa">
      <MergePdfTool language="fa" />
    </SiteShell>
  );
}
