import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("it", "top-free-pdf-tools-online");

export default function Page() {
  return <BlogPost lang="it" slug="top-free-pdf-tools-online" />;
}
