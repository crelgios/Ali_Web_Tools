import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("vi", "top-free-pdf-tools-online");

export default function Page() {
  return <BlogPost lang="vi" slug="top-free-pdf-tools-online" />;
}
