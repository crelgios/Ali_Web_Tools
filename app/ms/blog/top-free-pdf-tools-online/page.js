import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("ms", "top-free-pdf-tools-online");

export default function Page() {
  return <BlogPost lang="ms" slug="top-free-pdf-tools-online" />;
}
