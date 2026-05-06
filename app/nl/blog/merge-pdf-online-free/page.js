import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("nl", "merge-pdf-online-free");

export default function Page() {
  return <BlogPost lang="nl" slug="merge-pdf-online-free" />;
}
