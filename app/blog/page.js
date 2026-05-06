import { createMetadata } from "../../lib/seoConfig";
import LocaleRedirect from "../../components/LocaleRedirect";

export const metadata = createMetadata("en", "blog");

export default function Page() {
  return <LocaleRedirect path="blog" />;
}
