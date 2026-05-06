import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("pt", "merge-pdf-online-free");

export default function Page() {
  return <BlogPost lang="pt" slug="merge-pdf-online-free" />;
}
