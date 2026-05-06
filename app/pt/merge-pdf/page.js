import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";

export const metadata = createPageMetadata("pt", "merge-pdf");

export default function Page() {
  return (
    <SiteShell lang="pt">
      <MergePdfTool language="pt" />
    </SiteShell>
  );
}
