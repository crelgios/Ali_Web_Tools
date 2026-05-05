import { PdfToolsPage } from "../../../components/ToolCategoryPages";
import { getHreflang } from "../../../lib/translations";

export const metadata = { title: "Ali W Vide", description: "Free online Ali W Vide to convert JPG, PNG and merge PDF files.", alternates: { canonical: "/vi/pdf-tools", languages: getHreflang("pdf-tools") } };
export default function Page(){ return <PdfToolsPage lang="vi" />; }
