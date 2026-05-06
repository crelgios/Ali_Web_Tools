import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import CompressImageTool from "../../../components/CompressImageTool";

export const metadata = createMetadata("ru", "image-compressor");
export default function Page(){ return <SiteShell lang="ru"><CompressImageTool lang="ru" /></SiteShell>; }
