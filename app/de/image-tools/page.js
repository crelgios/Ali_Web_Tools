import { createMetadata } from "../../../lib/seoConfig";
import { ImageToolsPage } from "../../../components/ToolCategoryPages";

export const metadata = createMetadata("de", "image-tools");
export default function Page(){ return <ImageToolsPage lang="de" />; }
