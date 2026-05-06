import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import CompressImageTool from "../../../components/CompressImageTool";

export const metadata = createMetadata("th", "image-compressor");
export default function Page(){ return <SiteShell lang="th"><CompressImageTool lang="th" /></SiteShell>; }
