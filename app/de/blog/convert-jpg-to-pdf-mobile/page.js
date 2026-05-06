import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("de", "convert-jpg-to-pdf-mobile");

export default function Page() {
  return <BlogPost lang="de" slug="convert-jpg-to-pdf-mobile" />;
}
