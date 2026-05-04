import SiteShell from "../../../components/SiteShell";
import ImageEditorTool from "../../../components/ImageEditorTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "Editor immagini - Free Online Tool",
  description: "Ritaglia, ridimensiona, ruota, capovolgi e converti immagini online. Your files stay private in your browser.",
  alternates: {
    canonical: "/it/image-editor",
    languages: getHreflang("image-editor")
  }
};

export default function Page() {
  return (
    <SiteShell lang="it">
      <ImageEditorTool lang="it" />
    </SiteShell>
  );
}
