import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";

export const metadata = createMetadata("ja", "merge-pdf");

export default function Page() {
  return (
    <SiteShell lang="ja">
      <MergePdfTool language="ja" />
    </SiteShell>
  );
}
