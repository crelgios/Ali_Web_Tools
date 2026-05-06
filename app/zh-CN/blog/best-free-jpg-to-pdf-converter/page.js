import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("zh-CN", "best-free-jpg-to-pdf-converter");

export default function Page() {
  return <BlogPost lang="zh-CN" slug="best-free-jpg-to-pdf-converter" />;
}
