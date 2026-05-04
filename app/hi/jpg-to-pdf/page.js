import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";

export const metadata = {
  title: "JPG से PDF बनाएं मुफ्त ऑनलाइन",
  description: "JPG इमेज को PDF में ऑनलाइन मुफ्त बदलें।",
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
    <SiteShell lang="hi">
      <ImageToPdfTool type="JPEG" title="JPG से PDF बनाएं" language="hi" />
    </SiteShell>
  );
}
