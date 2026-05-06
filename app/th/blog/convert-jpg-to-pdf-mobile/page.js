import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("th", "convert-jpg-to-pdf-mobile");

export default function Page() {
  return <BlogPost lang="th" slug="convert-jpg-to-pdf-mobile" />;
}
