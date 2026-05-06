import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("pt", "jpg-to-pdf-without-software");

export default function Page() {
  return <BlogPost lang="pt" slug="jpg-to-pdf-without-software" />;
}
