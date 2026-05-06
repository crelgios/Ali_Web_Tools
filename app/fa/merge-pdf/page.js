import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";

export const metadata = createPageMetadata("fa", "merge-pdf");

export default function Page() {
  return (
    <SiteShell lang="fa">
      <MergePdfTool language="fa" />
    </SiteShell>
  );
}
