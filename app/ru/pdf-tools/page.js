import { PdfToolsPage } from "../../../components/ToolCategoryPages";
import { getHreflang } from "../../../lib/translations";

export const metadata = { title: "PDF Tools", description: "Free online PDF tools to convert JPG, PNG and merge PDF files.", alternates: { canonical: "/ru/pdf-tools", languages: getHreflang("pdf-tools") } };
export default function Page(){ return <PdfToolsPage lang="ru" />; }
