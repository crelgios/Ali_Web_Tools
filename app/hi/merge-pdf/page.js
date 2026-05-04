import MergePdfTool from "../../../components/MergePdfTool";

export const metadata = {
  title: "PDF मिलाएं मुफ्त ऑनलाइन",
  description: "कई PDF फाइलों को एक PDF में ऑनलाइन मुफ्त मिलाएं।",
  alternates: {
    languages: {
      en: "/en/merge-pdf",
      hi: "/hi/merge-pdf",
      es: "/es/merge-pdf"
    }
  }
};

export default function Page() {
  return <MergePdfTool language="hi" />;
}
