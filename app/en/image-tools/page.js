import { createMetadata } from "../../../lib/seoConfig";
import { ImageToolsPage } from "../../../components/ToolCategoryPages";

export const metadata = createMetadata("en", "image-tools");
export default function Page(){ return <ImageToolsPage lang="en" />; }
