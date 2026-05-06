import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("hi", "top-free-pdf-tools-online");

export default function Page() {
  return <BlogPost lang="hi" slug="top-free-pdf-tools-online" />;
}
