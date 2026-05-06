import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("zh-CN", "convert-jpg-to-pdf-mobile");

export default function Page() {
  return <BlogPost lang="zh-CN" slug="convert-jpg-to-pdf-mobile" />;
}
