import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("ur", "convert-jpg-to-pdf-mobile");

export default function Page() {
  return <BlogPost lang="ur" slug="convert-jpg-to-pdf-mobile" />;
}
