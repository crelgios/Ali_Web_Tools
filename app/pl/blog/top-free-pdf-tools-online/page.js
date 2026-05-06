import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("pl", "top-free-pdf-tools-online");

export default function Page() {
  return <BlogPost lang="pl" slug="top-free-pdf-tools-online" />;
}
