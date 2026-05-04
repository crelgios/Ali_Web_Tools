import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "Gabung PDF",
  description: "Gabung PDF",
  alternates: {
    canonical: "/id/merge-pdf",
    languages: getHreflang("merge-pdf")
  }
};

export default function Page() {
  return (
    <SiteShell lang="id">
      <MergePdfTool language="id" />
    </SiteShell>
  );
}
