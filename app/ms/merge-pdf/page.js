import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";

export const metadata = createPageMetadata("ms", "merge-pdf");

export default function Page() {
  return (
    <SiteShell lang="ms">
      <MergePdfTool language="ms" />
    </SiteShell>
  );
}
