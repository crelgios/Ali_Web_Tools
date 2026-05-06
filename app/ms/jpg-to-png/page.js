import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import JpgToPngTool from "../../../components/JpgToPngTool";

export const metadata = createMetadata("ms", "jpg-to-png");
export default function Page(){ return <SiteShell lang="ms"><JpgToPngTool lang="ms" /></SiteShell>; }
