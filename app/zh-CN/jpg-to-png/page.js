import SiteShell from "../../../components/SiteShell";
import { getHreflang } from "../../../lib/translations";
import JpgToPngTool from "../../../components/JpgToPngTool";

export const metadata = { title: "JPG to PNG Converter", description: "Convert JPG images to PNG in your browser.", alternates: { canonical: "/zh-CN/jpg-to-png", languages: getHreflang("jpg-to-png") } };
export default function Page(){ return <SiteShell lang="zh-CN"><JpgToPngTool lang="zh-CN" /></SiteShell>; }
