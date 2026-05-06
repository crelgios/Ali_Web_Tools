import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import JpgToPngTool from "../../../components/JpgToPngTool";

export const metadata = createPageMetadata("id", "jpg-to-png");
export default function Page(){ return <SiteShell lang="id"><JpgToPngTool lang="id" /></SiteShell>; }
