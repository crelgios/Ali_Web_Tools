import SiteShell from "../../../components/SiteShell";
import ImageEditorTool from "../../../components/ImageEditorTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "เครื่องมือแก้ไขรูปภาพ - Free Online Tool",
  description: "ครอบตัด ปรับขนาด หมุน พลิก และแปลงรูปภาพออนไลน์ Your files stay private in your browser.",
  alternates: {
    canonical: "/th/image-editor",
    languages: getHreflang("image-editor")
  }
};

export default function Page() {
  return (
    <SiteShell lang="th">
      <ImageEditorTool lang="th" />
    </SiteShell>
  );
}
