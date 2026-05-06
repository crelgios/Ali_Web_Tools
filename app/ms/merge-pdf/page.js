import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";

export const metadata = createMetadata("ms", "merge-pdf");

export default function Page() {
  return (
    <SiteShell lang="ms">
      <MergePdfTool language="ms" />
    </SiteShell>
  );
}
