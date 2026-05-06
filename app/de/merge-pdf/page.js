import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";

export const metadata = createMetadata("de", "merge-pdf");

export default function Page() {
  return (
    <SiteShell lang="de">
      <MergePdfTool language="de" />
    </SiteShell>
  );
}
