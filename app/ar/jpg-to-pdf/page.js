import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "JPG إلى PDF",
  description: "حوّل صور JPG إلى ملفات PDF فوراً.",
  alternates: {
    canonical: "/ar/jpg-to-pdf",
    languages: getHreflang("jpg-to-pdf")
  }
};

export default function Page() {
  return (
    <SiteShell lang="ar">
      <ImageToPdfTool type="JPEG" title="JPG إلى PDF" language="ar" />
    </SiteShell>
  );
}
