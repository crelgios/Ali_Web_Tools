import { createPageMetadata } from "../../../lib/seo";
import { PdfToolsPage } from "../../../components/ToolCategoryPages";

export const metadata = createPageMetadata("ms", "pdf-tools");
export default function Page(){ return <PdfToolsPage lang="ms" />; }
