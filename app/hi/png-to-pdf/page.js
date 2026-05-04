import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";

export const metadata = {
  title: "PNG से PDF बनाएं मुफ्त ऑनलाइन",
  description: "PNG इमेज को PDF में ऑनलाइन मुफ्त बदलें।",
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
    <SiteShell lang="hi">
      <ImageToPdfTool type="PNG" title="PNG से PDF बनाएं" language="hi" />
    </SiteShell>
  );
}
