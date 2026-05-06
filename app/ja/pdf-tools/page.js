import { createPageMetadata } from "../../../lib/seo";
import { PdfToolsPage } from "../../../components/ToolCategoryPages";

export const metadata = createPageMetadata("ja", "pdf-tools");
export default function Page(){ return <PdfToolsPage lang="ja" />; }
