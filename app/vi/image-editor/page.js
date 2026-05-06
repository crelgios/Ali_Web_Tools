import { createMetadata } from "../../../lib/seoConfig";
import { redirect } from "next/navigation";
export const metadata = createMetadata("vi", "image-editor");

export default function Page({ params }){ redirect(`/${params?.lang || "en"}/image-tools`); }
