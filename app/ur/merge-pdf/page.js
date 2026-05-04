import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "PDF ملائیں",
  description: "PDF ملائیں",
  alternates: {
    canonical: "/ur/merge-pdf",
    languages: getHreflang("merge-pdf")
  }
};

export default function Page() {
  return (
    <SiteShell lang="ur">
      <MergePdfTool language="ur" />
    </SiteShell>
  );
}
