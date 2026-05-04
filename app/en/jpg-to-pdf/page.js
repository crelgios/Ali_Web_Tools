import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "JPG to PDF",
  description: "Convert JPG images into PDF files instantly.",
  alternates: {
    canonical: "/en/jpg-to-pdf",
    languages: getHreflang("jpg-to-pdf")
  }
};

export default function Page() {
  return (
    <SiteShell lang="en">
      <ImageToPdfTool type="JPEG" title="JPG to PDF" language="en" />
    </SiteShell>
  );
}
