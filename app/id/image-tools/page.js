import { createPageMetadata } from "../../../lib/seo";
import { ImageToolsPage } from "../../../components/ToolCategoryPages";

export const metadata = createPageMetadata("id", "image-tools");
export default function Page(){ return <ImageToolsPage lang="id" />; }
