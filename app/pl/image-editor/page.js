import SiteShell from "../../../components/SiteShell";
import ImageEditorTool from "../../../components/ImageEditorTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "Edytor obrazów - Free Online Tool",
  description: "Przycinaj, zmieniaj rozmiar, obracaj i konwertuj obrazy online. Your files stay private in your browser.",
  alternates: {
    canonical: "/pl/image-editor",
    languages: getHreflang("image-editor")
  }
};

export default function Page() {
  return (
    <SiteShell lang="pl">
      <ImageEditorTool lang="pl" />
    </SiteShell>
  );
}
