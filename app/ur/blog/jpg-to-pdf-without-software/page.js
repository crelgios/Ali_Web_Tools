import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("ur", "jpg-to-pdf-without-software");

export default function Page() {
  return <BlogPost lang="ur" slug="jpg-to-pdf-without-software" />;
}
