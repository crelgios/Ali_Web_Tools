import { createPageMetadata } from "../../lib/seo";
import LocaleRedirect from "../../components/LocaleRedirect";

export const metadata = createPageMetadata("en", "privacy-policy");

export default function Page() {
  return <LocaleRedirect path="privacy-policy" />;
}
