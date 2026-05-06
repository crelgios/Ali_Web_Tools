import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import JpgToPngTool from "../../../components/JpgToPngTool";

export const metadata = createMetadata("ur", "jpg-to-png");
export default function Page(){ return <SiteShell lang="ur"><JpgToPngTool lang="ur" /></SiteShell>; }
