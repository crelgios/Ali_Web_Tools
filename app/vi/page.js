import { createPageMetadata } from "../../lib/seo";
import HomePage from "../../components/HomePage";
export const metadata = createPageMetadata("vi", "home");
export default function Page(){ return <HomePage lang="vi" />; }
