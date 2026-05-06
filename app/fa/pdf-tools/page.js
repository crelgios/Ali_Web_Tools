import { createPageMetadata } from "../../../lib/seo";
import { PdfToolsPage } from "../../../components/ToolCategoryPages";

export const metadata = createPageMetadata("fa", "pdf-tools");
export default function Page(){ return <PdfToolsPage lang="fa" />; }
