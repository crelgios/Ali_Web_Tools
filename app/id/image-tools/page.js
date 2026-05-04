import { ImageToolsPage } from "../../../components/ToolCategoryPages";
import { getHreflang } from "../../../lib/translations";

export const metadata = { title: "Image Tools", description: "Free online image tools to crop, resize, compress and convert images.", alternates: { canonical: "/id/image-tools", languages: getHreflang("image-tools") } };
export default function Page(){ return <ImageToolsPage lang="id" />; }
