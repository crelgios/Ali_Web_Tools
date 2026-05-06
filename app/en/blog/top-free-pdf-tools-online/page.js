import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("en", "top-free-pdf-tools-online");

export default function Page() {
  return <BlogPost lang="en" slug="top-free-pdf-tools-online" />;
}
