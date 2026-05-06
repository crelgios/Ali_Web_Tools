import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";

export const metadata = createMetadata("bn", "merge-pdf");

export default function Page() {
  return (
    <SiteShell lang="bn">
      <MergePdfTool language="bn" />
    </SiteShell>
  );
}
