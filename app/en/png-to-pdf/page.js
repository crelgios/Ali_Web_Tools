import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "PNG to PDF",
  description: "Convert PNG images into PDF files online.",
  alternates: {
    canonical: "/en/png-to-pdf",
    languages: getHreflang("png-to-pdf")
  }
};

export default function Page() {
  return (
    <SiteShell lang="en">
      <ImageToPdfTool type="PNG" title="PNG to PDF" language="en" />
    </SiteShell>
  );
}
