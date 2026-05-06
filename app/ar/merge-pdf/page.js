import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";

export const metadata = createMetadata("ar", "merge-pdf");

export default function Page() {
  return (
    <SiteShell lang="ar">
      <MergePdfTool language="ar" />
    </SiteShell>
  );
}
