import SiteShell from "../../../components/SiteShell";
import ImageEditorTool from "../../../components/ImageEditorTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "Bildeditor - Free Online Tool",
  description: "Bilder online zuschneiden, skalieren, drehen, spiegeln und konvertieren. Your files stay private in your browser.",
  alternates: {
    canonical: "/de/image-editor",
    languages: getHreflang("image-editor")
  }
};

export default function Page() {
  return (
    <SiteShell lang="de">
      <ImageEditorTool lang="de" />
    </SiteShell>
  );
}
