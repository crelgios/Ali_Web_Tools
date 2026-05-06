import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import JpgToPngTool from "../../../components/JpgToPngTool";

export const metadata = createMetadata("nl", "jpg-to-png");
export default function Page(){ return <SiteShell lang="nl"><JpgToPngTool lang="nl" /></SiteShell>; }
