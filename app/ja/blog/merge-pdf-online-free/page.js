import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("ja", "merge-pdf-online-free");

export default function Page() {
  return <BlogPost lang="ja" slug="merge-pdf-online-free" />;
}
