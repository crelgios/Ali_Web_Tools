import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("bn", "jpg-to-pdf-without-software");

export default function Page() {
  return <BlogPost lang="bn" slug="jpg-to-pdf-without-software" />;
}
