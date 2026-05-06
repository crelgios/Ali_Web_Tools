import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";

export const metadata = createPageMetadata("ar", "merge-pdf");

export default function Page() {
  return (
    <SiteShell lang="ar">
      <MergePdfTool language="ar" />
    </SiteShell>
  );
}
