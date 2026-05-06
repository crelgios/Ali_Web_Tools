import { createMetadata } from "../../../lib/seoConfig";
import { ImageToolsPage } from "../../../components/ToolCategoryPages";

export const metadata = createMetadata("ar", "image-tools");
export default function Page(){ return <ImageToolsPage lang="ar" />; }
