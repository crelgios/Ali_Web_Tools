import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";

export const metadata = createPageMetadata("ur", "merge-pdf");

export default function Page() {
  return (
    <SiteShell lang="ur">
      <MergePdfTool language="ur" />
    </SiteShell>
  );
}
