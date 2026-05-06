import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";

export const metadata = createPageMetadata("hi", "merge-pdf");

export default function Page() {
  return (
    <SiteShell lang="hi">
      <MergePdfTool language="hi" />
    </SiteShell>
  );
}
