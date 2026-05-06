import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("id", "jpg-to-pdf-without-software");

export default function Page() {
  return <BlogPost lang="id" slug="jpg-to-pdf-without-software" />;
}
