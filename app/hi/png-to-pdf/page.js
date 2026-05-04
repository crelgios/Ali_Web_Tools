import ImageToPdfTool from "../../../components/ImageToPdfTool";

export const metadata = {
  title: "PNG से PDF बनाएं मुफ्त ऑनलाइन",
  description: "PNG इमेज को PDF में ऑनलाइन मुफ्त बदलें। सुरक्षित और तेज।",
  alternates: {
    languages: {
      en: "/en/png-to-pdf",
      hi: "/hi/png-to-pdf",
      es: "/es/png-to-pdf"
    }
  }
};

export default function Page() {
  return <ImageToPdfTool type="PNG" title="PNG से PDF बनाएं" language="hi" />;
}
