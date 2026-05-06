import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("es", "convert-excel-word-ppt-to-pdf-without-uploading-data");

export default function Page() {
  return <BlogPost lang="es" slug="convert-excel-word-ppt-to-pdf-without-uploading-data" />;
}
