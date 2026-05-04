import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "รวม PDF",
  description: "รวม PDF",
  alternates: {
    canonical: "/th/merge-pdf",
    languages: getHreflang("merge-pdf")
  }
};

export default function Page() {
  return (
    <SiteShell lang="th">
      <MergePdfTool language="th" />
    </SiteShell>
  );
}
