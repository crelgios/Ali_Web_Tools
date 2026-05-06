import { createMetadata } from "../../../lib/seoConfig";
import { ImageToolsPage } from "../../../components/ToolCategoryPages";

export const metadata = createMetadata("nl", "image-tools");
export default function Page(){ return <ImageToolsPage lang="nl" />; }
