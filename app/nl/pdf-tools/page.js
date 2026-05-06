import { createMetadata } from "../../../lib/seoConfig";
import { PdfToolsPage } from "../../../components/ToolCategoryPages";

export const metadata = createMetadata("nl", "pdf-tools");
export default function Page(){ return <PdfToolsPage lang="nl" />; }
