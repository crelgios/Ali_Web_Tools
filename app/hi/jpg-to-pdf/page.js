import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "JPG से PDF",
  description: "JPG इमेज को तुरंत PDF फाइल में बदलें।",
  alternates: {
    canonical: "/hi/jpg-to-pdf",
    languages: getHreflang("jpg-to-pdf")
  }
};

export default function Page() {
  return (
    <SiteShell lang="hi">
      <ImageToPdfTool type="JPEG" title="JPG से PDF" language="hi" />
    </SiteShell>
  );
}
