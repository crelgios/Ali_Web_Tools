import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";

export const metadata = createPageMetadata("id", "merge-pdf");

export default function Page() {
  return (
    <SiteShell lang="id">
      <MergePdfTool language="id" />
    </SiteShell>
  );
}
