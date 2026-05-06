import { createPageMetadata } from "../../../lib/seo";
import { ImageToolsPage } from "../../../components/ToolCategoryPages";

export const metadata = createPageMetadata("ko", "image-tools");
export default function Page(){ return <ImageToolsPage lang="ko" />; }
