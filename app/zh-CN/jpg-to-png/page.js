import SiteShell from "../../../components/SiteShell";
import ImageEditorTool from "../../../components/ImageEditorTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = { title: "JPG to PNG Converter", description: "Convert JPG images to PNG online without uploading files.", alternates: { canonical: "/zh-CN/jpg-to-png", languages: getHreflang("jpg-to-png") } };
export default function Page(){ return <SiteShell lang="zh-CN"><ImageEditorTool lang="zh-CN" /></SiteShell>; }
