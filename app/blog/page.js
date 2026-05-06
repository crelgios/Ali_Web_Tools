import { createPageMetadata } from "../../lib/seo";
import LocaleRedirect from "../../components/LocaleRedirect";

export const metadata = createPageMetadata("en", "blog");

export default function Page() {
  return <LocaleRedirect path="blog" />;
}
