import SiteShell from "../../../components/SiteShell";
import ImageEditorTool from "../../../components/ImageEditorTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "Editor Imej - Free Online Tool",
  description: "Pangkas, ubah saiz, putar, balik dan tukar imej dalam talian. Your files stay private in your browser.",
  alternates: {
    canonical: "/ms/image-editor",
    languages: getHreflang("image-editor")
  }
};

export default function Page() {
  return (
    <SiteShell lang="ms">
      <ImageEditorTool lang="ms" />
    </SiteShell>
  );
}
