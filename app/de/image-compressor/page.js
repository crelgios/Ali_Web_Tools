import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import CompressImageTool from "../../../components/CompressImageTool";

export const metadata = createMetadata("de", "image-compressor");
export default function Page(){ return <SiteShell lang="de"><CompressImageTool lang="de" /></SiteShell>; }
