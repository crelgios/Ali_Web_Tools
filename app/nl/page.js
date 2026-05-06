import { createPageMetadata } from "../../lib/seo";
import HomePage from "../../components/HomePage";
export const metadata = createPageMetadata("nl", "home");
export default function Page(){ return <HomePage lang="nl" />; }
