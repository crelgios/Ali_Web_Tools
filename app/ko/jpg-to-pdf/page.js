import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "JPG를 PDF로",
  description: "JPG를 PDF로 online.",
  alternates: {
    canonical: "/ko/jpg-to-pdf",
    languages: getHreflang("jpg-to-pdf")
  }
};

export default function Page() {
  return (
    <SiteShell lang="ko">
      <ImageToPdfTool type="JPEG" title="JPG를 PDF로" language="ko" />
    </SiteShell>
  );
}
