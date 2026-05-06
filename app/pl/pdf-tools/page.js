import { createMetadata } from "../../../lib/seoConfig";
import { PdfToolsPage } from "../../../components/ToolCategoryPages";

export const metadata = createMetadata("pl", "pdf-tools");
export default function Page(){ return <PdfToolsPage lang="pl" />; }
