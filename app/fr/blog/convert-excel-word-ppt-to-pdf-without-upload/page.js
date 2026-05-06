import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("fr", "convert-excel-word-ppt-to-pdf-without-upload");

export default function Page() {
  return <BlogPost lang="fr" slug="convert-excel-word-ppt-to-pdf-without-uploading-data" />;
}
