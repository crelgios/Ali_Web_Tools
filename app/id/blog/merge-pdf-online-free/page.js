import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("id", "merge-pdf-online-free");

export default function Page() {
  return <BlogPost lang="id" slug="merge-pdf-online-free" />;
}
