import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";

export const metadata = createMetadata("tr", "merge-pdf");

export default function Page() {
  return (
    <SiteShell lang="tr">
      <MergePdfTool language="tr" />
    </SiteShell>
  );
}
