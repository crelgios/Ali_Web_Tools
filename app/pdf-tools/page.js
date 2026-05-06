import { createMetadata } from "../../lib/seoConfig";
import { PdfToolsPage } from "../../components/ToolCategoryPages";
export const metadata = createMetadata("en", "pdf-tools");
export default function Page(){ return <PdfToolsPage lang="en" />; }
