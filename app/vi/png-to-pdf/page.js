import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "PNG sang PDF",
  description: "PNG sang PDF online.",
  alternates: {
    canonical: "/vi/png-to-pdf",
    languages: getHreflang("png-to-pdf")
  }
};

export default function Page() {
  return (
    <SiteShell lang="vi">
      <ImageToPdfTool type="PNG" title="PNG sang PDF" language="vi" />
    </SiteShell>
  );
}
