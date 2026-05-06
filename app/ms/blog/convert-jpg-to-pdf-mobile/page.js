import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("ms", "convert-jpg-to-pdf-mobile");

export default function Page() {
  return <BlogPost lang="ms" slug="convert-jpg-to-pdf-mobile" />;
}
