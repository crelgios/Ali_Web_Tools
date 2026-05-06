import { createPageMetadata } from "../../../lib/seo";
import BlogIndex from "../../../components/BlogIndex";

export const metadata = createPageMetadata("nl", "blog");

export default function Page() {
  return <BlogIndex lang="nl" />;
}
