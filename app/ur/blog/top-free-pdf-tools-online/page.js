import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("ur", "top-free-pdf-tools-online");

export default function Page() {
  return <BlogPost lang="ur" slug="top-free-pdf-tools-online" />;
}
