import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("zh-CN", "merge-pdf-online-free");

export default function Page() {
  return <BlogPost lang="zh-CN" slug="merge-pdf-online-free" />;
}
