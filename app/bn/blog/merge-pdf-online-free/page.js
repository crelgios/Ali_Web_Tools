import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("bn", "merge-pdf-online-free");

export default function Page() {
  return <BlogPost lang="bn" slug="merge-pdf-online-free" />;
}
