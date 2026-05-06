import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("pl", "jpg-to-pdf-without-software");

export default function Page() {
  return <BlogPost lang="pl" slug="jpg-to-pdf-without-software" />;
}
