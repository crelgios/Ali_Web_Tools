import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import CompressImageTool from "../../../components/CompressImageTool";

export const metadata = createMetadata("ms", "image-compressor");
export default function Page(){ return <SiteShell lang="ms"><CompressImageTool lang="ms" /></SiteShell>; }
