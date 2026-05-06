import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import CompressImageTool from "../../../components/CompressImageTool";

export const metadata = createMetadata("ar", "image-compressor");
export default function Page(){ return <SiteShell lang="ar"><CompressImageTool lang="ar" /></SiteShell>; }
