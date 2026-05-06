import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";

export const metadata = createMetadata("nl", "merge-pdf");

export default function Page() {
  return (
    <SiteShell lang="nl">
      <MergePdfTool language="nl" />
    </SiteShell>
  );
}
