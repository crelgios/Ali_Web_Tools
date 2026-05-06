import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("id", "top-free-pdf-tools-online");

export default function Page() {
  return <BlogPost lang="id" slug="top-free-pdf-tools-online" />;
}
