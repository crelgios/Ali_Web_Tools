import SiteShell from "../../../components/SiteShell";
import ImageEditorTool from "../../../components/ImageEditorTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "Editor de imagem - Free Online Tool",
  description: "Corte, redimensione, gire, espelhe e converta imagens online. Your files stay private in your browser.",
  alternates: {
    canonical: "/pt/image-editor",
    languages: getHreflang("image-editor")
  }
};

export default function Page() {
  return (
    <SiteShell lang="pt">
      <ImageEditorTool lang="pt" />
    </SiteShell>
  );
}
