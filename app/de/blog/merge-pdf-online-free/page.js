import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("de", "merge-pdf-online-free");

export default function Page() {
  return <BlogPost lang="de" slug="merge-pdf-online-free" />;
}
