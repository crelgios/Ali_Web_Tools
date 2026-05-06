import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import CompressImageTool from "../../../components/CompressImageTool";

export const metadata = createMetadata("pl", "image-compressor");
export default function Page(){ return <SiteShell lang="pl"><CompressImageTool lang="pl" /></SiteShell>; }
