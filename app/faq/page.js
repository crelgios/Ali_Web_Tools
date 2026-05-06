import { createMetadata } from "../../lib/seoConfig";
import LocaleRedirect from "../../components/LocaleRedirect";

export const metadata = createMetadata("en", "faq");

export default function Page() {
  return <LocaleRedirect path="faq" />;
}
