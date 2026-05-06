import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";

export const metadata = createPageMetadata("pl", "merge-pdf");

export default function Page() {
  return (
    <SiteShell lang="pl">
      <MergePdfTool language="pl" />
    </SiteShell>
  );
}
