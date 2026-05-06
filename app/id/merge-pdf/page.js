import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";

export const metadata = createMetadata("id", "merge-pdf");

export default function Page() {
  return (
    <SiteShell lang="id">
      <MergePdfTool language="id" />
    </SiteShell>
  );
}
