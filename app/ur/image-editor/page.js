import SiteShell from "../../../components/SiteShell";
import ImageEditorTool from "../../../components/ImageEditorTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "امیج ایڈیٹر - Free Online Tool",
  description: "تصاویر کو آن لائن کراپ، ری سائز، روٹیٹ، فلپ اور کنورٹ کریں۔ Your files stay private in your browser.",
  alternates: {
    canonical: "/ur/image-editor",
    languages: getHreflang("image-editor")
  }
};

export default function Page() {
  return (
    <SiteShell lang="ur">
      <ImageEditorTool lang="ur" />
    </SiteShell>
  );
}
