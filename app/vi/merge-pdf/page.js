import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";

export const metadata = createPageMetadata("vi", "merge-pdf");

export default function Page() {
  return (
    <SiteShell lang="vi">
      <MergePdfTool language="vi" />
    </SiteShell>
  );
}
