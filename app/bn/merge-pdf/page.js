import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";

export const metadata = createPageMetadata("bn", "merge-pdf");

export default function Page() {
  return (
    <SiteShell lang="bn">
      <MergePdfTool language="bn" />
    </SiteShell>
  );
}
