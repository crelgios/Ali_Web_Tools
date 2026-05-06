import { createMetadata } from "../../../lib/seoConfig";
import { PdfToolsPage } from "../../../components/ToolCategoryPages";

export const metadata = createMetadata("zh-CN", "pdf-tools");
export default function Page(){ return <PdfToolsPage lang="zh-CN" />; }
