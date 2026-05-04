import SiteShell from "../../../components/SiteShell";
import ImageEditorTool from "../../../components/ImageEditorTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "图片编辑器 - Free Online Tool",
  description: "在线裁剪、调整大小、旋转、翻转和转换图片。 Your files stay private in your browser.",
  alternates: {
    canonical: "/zh-CN/image-editor",
    languages: getHreflang("image-editor")
  }
};

export default function Page() {
  return (
    <SiteShell lang="zh-CN">
      <ImageEditorTool lang="zh-CN" />
    </SiteShell>
  );
}
