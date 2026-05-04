import SiteShell from "../../../components/SiteShell";
import ImageEditorTool from "../../../components/ImageEditorTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "Resim Düzenleyici - Free Online Tool",
  description: "Görüntüleri çevrimiçi kırpın, yeniden boyutlandırın, döndürün ve dönüştürün. Your files stay private in your browser.",
  alternates: {
    canonical: "/tr/image-editor",
    languages: getHreflang("image-editor")
  }
};

export default function Page() {
  return (
    <SiteShell lang="tr">
      <ImageEditorTool lang="tr" />
    </SiteShell>
  );
}
