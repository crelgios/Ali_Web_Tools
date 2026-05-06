import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";

export const metadata = createPageMetadata("th", "merge-pdf");

export default function Page() {
  return (
    <SiteShell lang="th">
      <MergePdfTool language="th" />
    </SiteShell>
  );
}
