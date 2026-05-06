import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";

export const metadata = createMetadata("th", "merge-pdf");

export default function Page() {
  return (
    <SiteShell lang="th">
      <MergePdfTool language="th" />
    </SiteShell>
  );
}
