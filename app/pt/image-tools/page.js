import { ImageToolsPage } from "../../../components/ToolCategoryPages";
import { getHreflang } from "../../../lib/translations";

export const metadata = { title: "Image Tools", description: "Free online image tools to resize, compress, add text and convert images.", alternates: { canonical: "/pt/image-tools", languages: getHreflang("image-tools") } };
export default function Page(){ return <ImageToolsPage lang="pt" />; }
