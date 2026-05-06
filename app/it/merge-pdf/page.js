import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";

export const metadata = createMetadata("it", "merge-pdf");

export default function Page() {
  return (
    <SiteShell lang="it">
      <MergePdfTool language="it" />
    </SiteShell>
  );
}
