import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";

export const metadata = createMetadata("ko", "merge-pdf");

export default function Page() {
  return (
    <SiteShell lang="ko">
      <MergePdfTool language="ko" />
    </SiteShell>
  );
}
