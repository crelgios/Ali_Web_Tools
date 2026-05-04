import SiteShell from "../../../components/SiteShell";
import ImageEditorTool from "../../../components/ImageEditorTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "محرر الصور - Free Online Tool",
  description: "قص الصور وتغيير حجمها وتدويرها وقلبها وتحويلها عبر الإنترنت. Your files stay private in your browser.",
  alternates: {
    canonical: "/ar/image-editor",
    languages: getHreflang("image-editor")
  }
};

export default function Page() {
  return (
    <SiteShell lang="ar">
      <ImageEditorTool lang="ar" />
    </SiteShell>
  );
}
