import { createMetadata } from "../../../lib/seoConfig";
import { PdfToolsPage } from "../../../components/ToolCategoryPages";

export const metadata = createMetadata("ko", "pdf-tools");
export default function Page(){ return <PdfToolsPage lang="ko" />; }
