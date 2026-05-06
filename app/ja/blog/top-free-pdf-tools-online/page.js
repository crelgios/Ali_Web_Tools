import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("ja", "top-free-pdf-tools-online");

export default function Page() {
  return <BlogPost lang="ja" slug="top-free-pdf-tools-online" />;
}
