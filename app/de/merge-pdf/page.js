import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";

export const metadata = createPageMetadata("de", "merge-pdf");

export default function Page() {
  return (
    <SiteShell lang="de">
      <MergePdfTool language="de" />
    </SiteShell>
  );
}
