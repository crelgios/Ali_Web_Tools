import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";

export const metadata = createMetadata("zh-CN", "merge-pdf");

export default function Page() {
  return (
    <SiteShell lang="zh-CN">
      <MergePdfTool language="zh-CN" />
    </SiteShell>
  );
}
