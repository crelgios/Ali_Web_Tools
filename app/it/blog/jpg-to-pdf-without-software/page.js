import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("it", "jpg-to-pdf-without-software");

export default function Page() {
  return <BlogPost lang="it" slug="jpg-to-pdf-without-software" />;
}
