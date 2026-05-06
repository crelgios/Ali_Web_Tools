import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("pl", "merge-pdf-online-free");

export default function Page() {
  return <BlogPost lang="pl" slug="merge-pdf-online-free" />;
}
