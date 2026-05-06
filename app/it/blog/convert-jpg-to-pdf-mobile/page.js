import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("it", "convert-jpg-to-pdf-mobile");

export default function Page() {
  return <BlogPost lang="it" slug="convert-jpg-to-pdf-mobile" />;
}
