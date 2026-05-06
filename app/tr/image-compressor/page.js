import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import CompressImageTool from "../../../components/CompressImageTool";

export const metadata = createMetadata("tr", "image-compressor");
export default function Page(){ return <SiteShell lang="tr"><CompressImageTool lang="tr" /></SiteShell>; }
