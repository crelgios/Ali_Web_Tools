import { createPageMetadata } from "../../../lib/seo";
import { PdfToolsPage } from "../../../components/ToolCategoryPages";

export const metadata = createPageMetadata("nl", "pdf-tools");
export default function Page(){ return <PdfToolsPage lang="nl" />; }
