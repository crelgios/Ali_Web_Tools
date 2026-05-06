import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("nl", "jpg-to-pdf-without-software");

export default function Page() {
  return <BlogPost lang="nl" slug="jpg-to-pdf-without-software" />;
}
