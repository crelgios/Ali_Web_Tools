import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import CompressImageTool from "../../../components/CompressImageTool";

export const metadata = createMetadata("it", "image-compressor");
export default function Page(){ return <SiteShell lang="it"><CompressImageTool lang="it" /></SiteShell>; }
