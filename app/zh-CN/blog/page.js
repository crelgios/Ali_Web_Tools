import { createPageMetadata } from "../../../lib/seo";
import BlogIndex from "../../../components/BlogIndex";

export const metadata = createPageMetadata("zh-CN", "blog");

export default function Page() {
  return <BlogIndex lang="zh-CN" />;
}
