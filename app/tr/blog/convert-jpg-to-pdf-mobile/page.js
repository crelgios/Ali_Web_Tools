import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("tr", "convert-jpg-to-pdf-mobile");

export default function Page() {
  return <BlogPost lang="tr" slug="convert-jpg-to-pdf-mobile" />;
}
