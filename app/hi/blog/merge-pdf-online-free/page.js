import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("hi", "merge-pdf-online-free");

export default function Page() {
  return <BlogPost lang="hi" slug="merge-pdf-online-free" />;
}
