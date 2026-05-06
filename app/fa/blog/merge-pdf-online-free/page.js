import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("fa", "merge-pdf-online-free");

export default function Page() {
  return <BlogPost lang="fa" slug="merge-pdf-online-free" />;
}
