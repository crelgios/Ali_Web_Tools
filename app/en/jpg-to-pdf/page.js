import ImageToPdfTool from "../../../components/ImageToPdfTool";

export const metadata = {
  title: "JPG to PDF Free Online | Secure Image Converter",
  description: "Convert JPG images to PDF online for free. Fast, secure, mobile-friendly and no signup required.",
  alternates: {
    languages: {
      en: "/en/jpg-to-pdf",
      hi: "/hi/jpg-to-pdf"
    }
  }
};

export default function Page() {
  return <ImageToPdfTool type="JPEG" title="JPG to PDF" language="en" />;
}
