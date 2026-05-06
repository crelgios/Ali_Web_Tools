import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("nl", "convert-jpg-to-pdf-mobile");

export default function Page() {
  return <BlogPost lang="nl" slug="convert-jpg-to-pdf-mobile" />;
}
