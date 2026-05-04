import SiteShell from "../../../components/SiteShell";
import ImageEditorTool from "../../../components/ImageEditorTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "Image Editor - Free Online Tool",
  description: "Crop, resize, rotate, flip and convert images online. Your files stay private in your browser.",
  alternates: {
    canonical: "/en/image-editor",
    languages: getHreflang("image-editor")
  }
};

export default function Page() {
  return (
    <SiteShell lang="en">
      <ImageEditorTool lang="en" />
    </SiteShell>
  );
}
