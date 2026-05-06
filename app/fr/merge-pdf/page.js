import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";

export const metadata = createMetadata("fr", "merge-pdf");

export default function Page() {
  return (
    <SiteShell lang="fr">
      <MergePdfTool language="fr" />
    </SiteShell>
  );
}
