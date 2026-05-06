import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";

export const metadata = createPageMetadata("zh-CN", "jpg-to-pdf");

export default function Page() {
  return (
    <SiteShell lang="zh-CN">
      <ImageToPdfTool type="JPEG" title="JPG 转 PDF" language="zh-CN" />
    </SiteShell>
  );
}
