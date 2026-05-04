import SiteShell from "../../../components/SiteShell";
import ImageEditorTool from "../../../components/ImageEditorTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "画像エディター - Free Online Tool",
  description: "画像をオンラインで切り抜き、サイズ変更、回転、反転、変換します。 Your files stay private in your browser.",
  alternates: {
    canonical: "/ja/image-editor",
    languages: getHreflang("image-editor")
  }
};

export default function Page() {
  return (
    <SiteShell lang="ja">
      <ImageEditorTool lang="ja" />
    </SiteShell>
  );
}
