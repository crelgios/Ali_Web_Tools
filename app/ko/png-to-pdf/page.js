import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "PNG를 PDF로",
  description: "PNG를 PDF로 online.",
  alternates: {
    canonical: "/ko/png-to-pdf",
    languages: getHreflang("png-to-pdf")
  }
};

export default function Page() {
  return (
    <SiteShell lang="ko">
      <ImageToPdfTool type="PNG" title="PNG를 PDF로" language="ko" />
    </SiteShell>
  );
}
