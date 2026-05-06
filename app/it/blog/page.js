import { createPageMetadata } from "../../../lib/seo";
import BlogIndex from "../../../components/BlogIndex";

export const metadata = createPageMetadata("it", "blog");

export default function Page() {
  return <BlogIndex lang="it" />;
}
