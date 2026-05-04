import SiteShell from "../../../components/SiteShell";
import { getHreflang } from "../../../lib/translations";
import ResizeImageTool from "../../../components/ResizeImageTool";

export const metadata = { title: "Resize Image Online", description: "Resize images by exact width and height in your browser.", alternates: { canonical: "/pt/resize-image", languages: getHreflang("resize-image") } };
export default function Page(){ return <SiteShell lang="pt"><ResizeImageTool lang="pt" /></SiteShell>; }
