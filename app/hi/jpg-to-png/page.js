import SiteShell from "../../../components/SiteShell";
import { getHreflang } from "../../../lib/translations";
import JpgToPngTool from "../../../components/JpgToPngTool";

export const metadata = { title: "JPG to PNG Converter", description: "Convert JPG images to PNG in your browser.", alternates: { canonical: "/hi/jpg-to-png", languages: getHreflang("jpg-to-png") } };
export default function Page(){ return <SiteShell lang="hi"><JpgToPngTool lang="hi" /></SiteShell>; }
