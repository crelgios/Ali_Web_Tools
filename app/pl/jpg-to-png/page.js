import SiteShell from "../../../components/SiteShell";
import ImageEditorTool from "../../../components/ImageEditorTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = { title: "JPG to PNG Converter", description: "Convert JPG images to PNG online without uploading files.", alternates: { canonical: "/pl/jpg-to-png", languages: getHreflang("jpg-to-png") } };
export default function Page(){ return <SiteShell lang="pl"><ImageEditorTool lang="pl" /></SiteShell>; }
