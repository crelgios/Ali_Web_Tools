import { createPageMetadata } from "../../lib/seo";
import HomePage from "../../components/HomePage";
export const metadata = createPageMetadata("zh-CN", "home");
export default function Page(){ return <HomePage lang="zh-CN" />; }
