import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";

export const metadata = {
  title: "PNG to PDF Free Online",
  description: "Convert PNG images to PDF online for free.",
  alternates: {
    languages: {
      en: "/en/png-to-pdf",
      hi: "/hi/png-to-pdf",
      es: "/es/png-to-pdf"
    }
  }
};

export default function Page() {
  return (
    <SiteShell lang="en">
      <ImageToPdfTool type="PNG" title="PNG to PDF" language="en" />
    </SiteShell>
  );
}
