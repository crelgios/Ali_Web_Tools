import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "PNG 转 PDF",
  description: "在线将 PNG 图片转换为 PDF 文件。",
  alternates: {
    canonical: "/zh-CN/png-to-pdf",
    languages: getHreflang("png-to-pdf")
  }
};

export default function Page() {
  return (
    <SiteShell lang="zh-CN">
      <ImageToPdfTool type="PNG" title="PNG 转 PDF" language="zh-CN" />
    </SiteShell>
  );
}
