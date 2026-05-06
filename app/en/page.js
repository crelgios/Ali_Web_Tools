import { createMetadata } from "../../lib/seoConfig";
import HomePage from "../../components/HomePage";
export const metadata = createMetadata("en", "");
export default function Page(){ return <HomePage lang="en" />; }
