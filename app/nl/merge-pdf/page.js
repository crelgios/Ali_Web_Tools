import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "PDF samenvoegen",
  description: "PDF samenvoegen",
  alternates: {
    canonical: "/nl/merge-pdf",
    languages: getHreflang("merge-pdf")
  }
};

export default function Page() {
  return (
    <SiteShell lang="nl">
      <MergePdfTool language="nl" />
    </SiteShell>
  );
}
