import SiteShell from "../../../components/SiteShell";
import ImageEditorTool from "../../../components/ImageEditorTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "Éditeur d’image - Free Online Tool",
  description: "Rognez, redimensionnez, faites pivoter et convertissez des images en ligne. Your files stay private in your browser.",
  alternates: {
    canonical: "/fr/image-editor",
    languages: getHreflang("image-editor")
  }
};

export default function Page() {
  return (
    <SiteShell lang="fr">
      <ImageEditorTool lang="fr" />
    </SiteShell>
  );
}
