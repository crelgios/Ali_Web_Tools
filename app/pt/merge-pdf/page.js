import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";

export const metadata = createMetadata("pt", "merge-pdf");

export default function Page() {
  return (
    <SiteShell lang="pt">
      <MergePdfTool language="pt" />
    </SiteShell>
  );
}
