import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("hi", "jpg-to-pdf-without-software");

export default function Page() {
  return <BlogPost lang="hi" slug="jpg-to-pdf-without-software" />;
}
