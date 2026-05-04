import SiteShell from "../../../components/SiteShell";
import ImageEditorTool from "../../../components/ImageEditorTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "Editor Gambar - Free Online Tool",
  description: "Pangkas, ubah ukuran, putar, balik, dan konversi gambar online. Your files stay private in your browser.",
  alternates: {
    canonical: "/id/image-editor",
    languages: getHreflang("image-editor")
  }
};

export default function Page() {
  return (
    <SiteShell lang="id">
      <ImageEditorTool lang="id" />
    </SiteShell>
  );
}
