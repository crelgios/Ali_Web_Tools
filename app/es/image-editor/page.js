import SiteShell from "../../../components/SiteShell";
import ImageEditorTool from "../../../components/ImageEditorTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "Editor de imágenes - Free Online Tool",
  description: "Recorta, redimensiona, gira, voltea y convierte imágenes online. Your files stay private in your browser.",
  alternates: {
    canonical: "/es/image-editor",
    languages: getHreflang("image-editor")
  }
};

export default function Page() {
  return (
    <SiteShell lang="es">
      <ImageEditorTool lang="es" />
    </SiteShell>
  );
}
