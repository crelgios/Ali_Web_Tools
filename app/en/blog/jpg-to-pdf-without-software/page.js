import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("en", "jpg-to-pdf-without-software");

export default function Page() {
  return <BlogPost lang="en" slug="jpg-to-pdf-without-software" />;
}
