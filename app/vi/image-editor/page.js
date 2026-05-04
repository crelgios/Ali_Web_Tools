import SiteShell from "../../../components/SiteShell";
import ImageEditorTool from "../../../components/ImageEditorTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "Trình chỉnh sửa ảnh - Free Online Tool",
  description: "Cắt, đổi kích thước, xoay, lật và chuyển đổi ảnh trực tuyến. Your files stay private in your browser.",
  alternates: {
    canonical: "/vi/image-editor",
    languages: getHreflang("image-editor")
  }
};

export default function Page() {
  return (
    <SiteShell lang="vi">
      <ImageEditorTool lang="vi" />
    </SiteShell>
  );
}
