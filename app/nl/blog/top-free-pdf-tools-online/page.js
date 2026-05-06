import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("nl", "top-free-pdf-tools-online");

export default function Page() {
  return <BlogPost lang="nl" slug="top-free-pdf-tools-online" />;
}
