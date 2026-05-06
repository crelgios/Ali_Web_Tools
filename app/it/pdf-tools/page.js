import { createPageMetadata } from "../../../lib/seo";
import { PdfToolsPage } from "../../../components/ToolCategoryPages";

export const metadata = createPageMetadata("it", "pdf-tools");
export default function Page(){ return <PdfToolsPage lang="it" />; }
