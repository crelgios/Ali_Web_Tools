import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";

export const metadata = createPageMetadata("it", "merge-pdf");

export default function Page() {
  return (
    <SiteShell lang="it">
      <MergePdfTool language="it" />
    </SiteShell>
  );
}
