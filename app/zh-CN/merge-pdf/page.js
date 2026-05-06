import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";

export const metadata = createPageMetadata("zh-CN", "merge-pdf");

export default function Page() {
  return (
    <SiteShell lang="zh-CN">
      <MergePdfTool language="zh-CN" />
    </SiteShell>
  );
}
