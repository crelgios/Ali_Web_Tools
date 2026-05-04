import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";

export const metadata = {
  title: "JPG to PDF Free Online",
  description: "Convert JPG images to PDF online for free.",
  alternates: {
    languages: {
      en: "/en/jpg-to-pdf",
      hi: "/hi/jpg-to-pdf",
      es: "/es/jpg-to-pdf"
    }
  }
};

export default function Page() {
  return (
    <SiteShell lang="en">
      <ImageToPdfTool type="JPEG" title="JPG to PDF" language="en" />
    </SiteShell>
  );
}
