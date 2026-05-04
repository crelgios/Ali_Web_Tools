import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "JPG sang PDF",
  description: "JPG sang PDF online.",
  alternates: {
    canonical: "/vi/jpg-to-pdf",
    languages: getHreflang("jpg-to-pdf")
  }
};

export default function Page() {
  return (
    <SiteShell lang="vi">
      <ImageToPdfTool type="JPEG" title="JPG sang PDF" language="vi" />
    </SiteShell>
  );
}
