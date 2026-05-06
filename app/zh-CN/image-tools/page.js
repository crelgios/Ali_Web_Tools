import { createMetadata } from "../../../lib/seoConfig";
import { ImageToolsPage } from "../../../components/ToolCategoryPages";

export const metadata = createMetadata("zh-CN", "image-tools");
export default function Page(){ return <ImageToolsPage lang="zh-CN" />; }
