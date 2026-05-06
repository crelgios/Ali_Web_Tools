import { createPageMetadata } from "../../../lib/seo";
import { PdfToolsPage } from "../../../components/ToolCategoryPages";

export const metadata = createPageMetadata("es", "pdf-tools");
export default function Page(){ return <PdfToolsPage lang="es" />; }
