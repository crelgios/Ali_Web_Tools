import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";

export const metadata = createMetadata("vi", "merge-pdf");

export default function Page() {
  return (
    <SiteShell lang="vi">
      <MergePdfTool language="vi" />
    </SiteShell>
  );
}
