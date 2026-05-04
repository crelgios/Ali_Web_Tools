import SiteShell from "../../../components/SiteShell";
import ImageEditorTool from "../../../components/ImageEditorTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "이미지 편집기 - Free Online Tool",
  description: "온라인에서 이미지를 자르고, 크기 변경, 회전, 뒤집기 및 변환하세요. Your files stay private in your browser.",
  alternates: {
    canonical: "/ko/image-editor",
    languages: getHreflang("image-editor")
  }
};

export default function Page() {
  return (
    <SiteShell lang="ko">
      <ImageEditorTool lang="ko" />
    </SiteShell>
  );
}
