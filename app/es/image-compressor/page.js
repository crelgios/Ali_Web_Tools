import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import CompressImageTool from "../../../components/CompressImageTool";

export const metadata = createPageMetadata("es", "image-compressor");
export default function Page(){ return <SiteShell lang="es"><CompressImageTool lang="es" /></SiteShell>; }
