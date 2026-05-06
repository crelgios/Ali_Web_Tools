import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import CompressImageTool from "../../../components/CompressImageTool";

export const metadata = createMetadata("es", "image-compressor");
export default function Page(){ return <SiteShell lang="es"><CompressImageTool lang="es" /></SiteShell>; }
