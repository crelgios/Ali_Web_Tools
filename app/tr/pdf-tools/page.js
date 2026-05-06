import { createPageMetadata } from "../../../lib/seo";
import { PdfToolsPage } from "../../../components/ToolCategoryPages";

export const metadata = createPageMetadata("tr", "pdf-tools");
export default function Page(){ return <PdfToolsPage lang="tr" />; }
