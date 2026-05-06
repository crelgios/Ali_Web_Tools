import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("ms", "merge-pdf-online-free");

export default function Page() {
  return <BlogPost lang="ms" slug="merge-pdf-online-free" />;
}
