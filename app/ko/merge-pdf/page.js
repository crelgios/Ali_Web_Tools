import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";

export const metadata = createPageMetadata("ko", "merge-pdf");

export default function Page() {
  return (
    <SiteShell lang="ko">
      <MergePdfTool language="ko" />
    </SiteShell>
  );
}
