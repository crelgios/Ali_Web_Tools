import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";

export const metadata = createMetadata("pl", "merge-pdf");

export default function Page() {
  return (
    <SiteShell lang="pl">
      <MergePdfTool language="pl" />
    </SiteShell>
  );
}
