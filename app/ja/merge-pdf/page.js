import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";

export const metadata = createPageMetadata("ja", "merge-pdf");

export default function Page() {
  return (
    <SiteShell lang="ja">
      <MergePdfTool language="ja" />
    </SiteShell>
  );
}
