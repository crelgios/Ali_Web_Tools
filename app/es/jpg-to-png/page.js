import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import JpgToPngTool from "../../../components/JpgToPngTool";

export const metadata = createMetadata("es", "jpg-to-png");
export default function Page(){ return <SiteShell lang="es"><JpgToPngTool lang="es" /></SiteShell>; }
