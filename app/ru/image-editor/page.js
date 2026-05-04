import SiteShell from "../../../components/SiteShell";
import ImageEditorTool from "../../../components/ImageEditorTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "Редактор изображений - Free Online Tool",
  description: "Обрезайте, изменяйте размер, поворачивайте и конвертируйте изображения онлайн. Your files stay private in your browser.",
  alternates: {
    canonical: "/ru/image-editor",
    languages: getHreflang("image-editor")
  }
};

export default function Page() {
  return (
    <SiteShell lang="ru">
      <ImageEditorTool lang="ru" />
    </SiteShell>
  );
}
