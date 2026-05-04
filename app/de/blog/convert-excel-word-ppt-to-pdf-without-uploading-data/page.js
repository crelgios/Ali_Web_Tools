import BlogPost from "../../../../components/BlogPost";

export const metadata = {
  title: "Convert Excel, Word, PPT to PDF Without Uploading Data",
  description: "Learn how to convert Excel sheets, Word documents and PowerPoint presentations to PDF without uploading your private data to any website.",
  alternates: {
    canonical: "/de/blog/convert-excel-word-ppt-to-pdf-without-uploading-data",
    languages: {
      "en": "/en/blog/convert-excel-word-ppt-to-pdf-without-uploading-data",
      "hi": "/hi/blog/convert-excel-word-ppt-to-pdf-without-uploading-data",
      "ar": "/ar/blog/convert-excel-word-ppt-to-pdf-without-uploading-data",
      "zh-CN": "/zh-CN/blog/convert-excel-word-ppt-to-pdf-without-uploading-data",
      "x-default": "/en/blog/convert-excel-word-ppt-to-pdf-without-uploading-data"
    }
  },
  openGraph: {
    title: "Convert Excel, Word, PPT to PDF Without Uploading Data",
    description: "Safe PDF conversion guide using Save As, Export and Microsoft Print to PDF.",
    images: ["/images/print-to-pdf-guide.png"]
  }
};

export default function Page() {
  return <BlogPost lang="de" slug="convert-excel-word-ppt-to-pdf-without-uploading-data" />;
}
