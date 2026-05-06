import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("bn", "convert-jpg-to-pdf-mobile");

export default function Page() {
  return <BlogPost lang="bn" slug="convert-jpg-to-pdf-mobile" />;
}
