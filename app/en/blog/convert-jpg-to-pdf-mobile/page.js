import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("en", "convert-jpg-to-pdf-mobile");

export default function Page() {
  return <BlogPost lang="en" slug="convert-jpg-to-pdf-mobile" />;
}
