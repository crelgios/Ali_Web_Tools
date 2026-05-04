import ImageToPdfTool from "../../../components/ImageToPdfTool";

export const metadata = {
  title: "JPG से PDF बनाएं मुफ्त ऑनलाइन",
  description: "JPG इमेज को PDF में ऑनलाइन मुफ्त बदलें। तेज, सुरक्षित और आसान टूल।",
  alternates: {
    languages: {
      en: "/en/jpg-to-pdf",
      hi: "/hi/jpg-to-pdf",
      es: "/es/jpg-to-pdf"
    }
  }
};

export default function Page() {
  return <ImageToPdfTool type="JPEG" title="JPG से PDF बनाएं" language="hi" />;
}
