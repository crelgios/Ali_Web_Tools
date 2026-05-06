import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";

export const metadata = createPageMetadata("zh-CN", "png-to-pdf");

export default function Page() {
  return (
    <SiteShell lang="zh-CN">
      <ImageToPdfTool type="PNG" title="PNG 转 PDF" language="zh-CN" />
    </SiteShell>
  );
}
