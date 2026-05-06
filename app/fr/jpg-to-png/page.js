import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import JpgToPngTool from "../../../components/JpgToPngTool";

export const metadata = createMetadata("fr", "jpg-to-png");
export default function Page(){ return <SiteShell lang="fr"><JpgToPngTool lang="fr" /></SiteShell>; }
