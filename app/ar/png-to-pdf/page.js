import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "PNG إلى PDF",
  description: "حوّل صور PNG إلى PDF عبر الإنترنت.",
  alternates: {
    canonical: "/ar/png-to-pdf",
    languages: getHreflang("png-to-pdf")
  }
};

export default function Page() {
  return (
    <SiteShell lang="ar">
      <ImageToPdfTool type="PNG" title="PNG إلى PDF" language="ar" />
    </SiteShell>
  );
}
