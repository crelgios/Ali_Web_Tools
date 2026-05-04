import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "PDF zusammenführen",
  description: "PDF zusammenführen",
  alternates: {
    canonical: "/de/merge-pdf",
    languages: getHreflang("merge-pdf")
  }
};

export default function Page() {
  return (
    <SiteShell lang="de">
      <MergePdfTool language="de" />
    </SiteShell>
  );
}
