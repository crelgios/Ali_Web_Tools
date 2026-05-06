import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("fa", "jpg-to-pdf-without-software");

export default function Page() {
  return <BlogPost lang="fa" slug="jpg-to-pdf-without-software" />;
}
