import SiteShell from "../../../components/SiteShell";
import ImageEditorTool from "../../../components/ImageEditorTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "Afbeeldingseditor - Free Online Tool",
  description: "Snijd bij, wijzig grootte, draai, spiegel en converteer afbeeldingen online. Your files stay private in your browser.",
  alternates: {
    canonical: "/nl/image-editor",
    languages: getHreflang("image-editor")
  }
};

export default function Page() {
  return (
    <SiteShell lang="nl">
      <ImageEditorTool lang="nl" />
    </SiteShell>
  );
}
