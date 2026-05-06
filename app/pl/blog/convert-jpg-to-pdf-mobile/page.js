import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("pl", "convert-jpg-to-pdf-mobile");

export default function Page() {
  return <BlogPost lang="pl" slug="convert-jpg-to-pdf-mobile" />;
}
