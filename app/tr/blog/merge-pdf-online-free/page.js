import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("tr", "merge-pdf-online-free");

export default function Page() {
  return <BlogPost lang="tr" slug="merge-pdf-online-free" />;
}
