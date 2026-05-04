import SiteShell from "../../../components/SiteShell";
import ImageEditorTool from "../../../components/ImageEditorTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "ویرایشگر تصویر - Free Online Tool",
  description: "تصاویر را آنلاین برش دهید، تغییر اندازه دهید، بچرخانید و تبدیل کنید. Your files stay private in your browser.",
  alternates: {
    canonical: "/fa/image-editor",
    languages: getHreflang("image-editor")
  }
};

export default function Page() {
  return (
    <SiteShell lang="fa">
      <ImageEditorTool lang="fa" />
    </SiteShell>
  );
}
