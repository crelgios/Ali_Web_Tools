import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";

export const metadata = createMetadata("fa", "merge-pdf");

export default function Page() {
  return (
    <SiteShell lang="fa">
      <MergePdfTool language="fa" />
    </SiteShell>
  );
}
