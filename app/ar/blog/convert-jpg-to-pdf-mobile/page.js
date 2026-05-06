import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("ar", "convert-jpg-to-pdf-mobile");

export default function Page() {
  return <BlogPost lang="ar" slug="convert-jpg-to-pdf-mobile" />;
}
