import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";

export const metadata = createPageMetadata("fr", "merge-pdf");

export default function Page() {
  return (
    <SiteShell lang="fr">
      <MergePdfTool language="fr" />
    </SiteShell>
  );
}
