import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("hi", "convert-jpg-to-pdf-mobile");

export default function Page() {
  return <BlogPost lang="hi" slug="convert-jpg-to-pdf-mobile" />;
}
