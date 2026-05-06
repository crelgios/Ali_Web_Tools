import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("it", "merge-pdf-online-free");

export default function Page() {
  return <BlogPost lang="it" slug="merge-pdf-online-free" />;
}
