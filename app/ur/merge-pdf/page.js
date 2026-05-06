import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";

export const metadata = createMetadata("ur", "merge-pdf");

export default function Page() {
  return (
    <SiteShell lang="ur">
      <MergePdfTool language="ur" />
    </SiteShell>
  );
}
