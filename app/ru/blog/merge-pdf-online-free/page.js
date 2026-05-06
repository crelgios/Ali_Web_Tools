import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("ru", "merge-pdf-online-free");

export default function Page() {
  return <BlogPost lang="ru" slug="merge-pdf-online-free" />;
}
