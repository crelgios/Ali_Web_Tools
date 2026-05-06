import { createMetadata } from "../../lib/seoConfig";
import LocaleRedirect from "../../components/LocaleRedirect";

export const metadata = createMetadata("en", "privacy-policy");

export default function Page() {
  return <LocaleRedirect path="privacy-policy" />;
}
