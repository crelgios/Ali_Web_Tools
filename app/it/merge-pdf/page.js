import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "Unisci PDF",
  description: "Unisci PDF",
  alternates: {
    canonical: "/it/merge-pdf",
    languages: getHreflang("merge-pdf")
  }
};

export default function Page() {
  return (
    <SiteShell lang="it">
      <MergePdfTool language="it" />
    </SiteShell>
  );
}
