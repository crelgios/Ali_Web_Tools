import { createPageMetadata } from "../../../lib/seo";
import { PdfToolsPage } from "../../../components/ToolCategoryPages";

export const metadata = createPageMetadata("ru", "pdf-tools");
export default function Page(){ return <PdfToolsPage lang="ru" />; }
