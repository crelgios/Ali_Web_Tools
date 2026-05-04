import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "JPG 转 PDF",
  description: "立即将 JPG 图片转换为 PDF 文件。",
  alternates: {
    canonical: "/zh-CN/jpg-to-pdf",
    languages: getHreflang("jpg-to-pdf")
  }
};

export default function Page() {
  return (
    <SiteShell lang="zh-CN">
      <ImageToPdfTool type="JPEG" title="JPG 转 PDF" language="zh-CN" />
    </SiteShell>
  );
}
