import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("ur", "merge-pdf-online-free");

export default function Page() {
  return <BlogPost lang="ur" slug="merge-pdf-online-free" />;
}
