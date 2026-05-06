import { createMetadata } from "../../lib/seoConfig";
import HomePage from "../../components/HomePage";
export const metadata = createMetadata("zh-CN", "");
export default function Page(){ return <HomePage lang="zh-CN" />; }
