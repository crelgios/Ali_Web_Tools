import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "Fusionner PDF",
  description: "Fusionner PDF",
  alternates: {
    canonical: "/fr/merge-pdf",
    languages: getHreflang("merge-pdf")
  }
};

export default function Page() {
  return (
    <SiteShell lang="fr">
      <MergePdfTool language="fr" />
    </SiteShell>
  );
}
