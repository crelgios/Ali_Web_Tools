import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import JpgToPngTool from "../../../components/JpgToPngTool";

export const metadata = createPageMetadata("it", "jpg-to-png");
export default function Page(){ return <SiteShell lang="it"><JpgToPngTool lang="it" /></SiteShell>; }
