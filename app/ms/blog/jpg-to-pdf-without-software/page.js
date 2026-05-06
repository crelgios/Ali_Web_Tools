import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("ms", "jpg-to-pdf-without-software");

export default function Page() {
  return <BlogPost lang="ms" slug="jpg-to-pdf-without-software" />;
}
