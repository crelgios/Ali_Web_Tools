"use client";

import { usePathname } from "next/navigation";

const languages = [
  { code: "en", label: "🌐 English" },
  { code: "hi", label: "🇮🇳 हिंदी" },
  { code: "es", label: "🇪🇸 Español" }
];

const toolFallback = "jpg-to-pdf";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const parts = pathname.split("/").filter(Boolean);
  const currentLang = ["en", "hi", "es"].includes(parts[0]) ? parts[0] : "en";

  function changeLanguage(e) {
    const nextLang = e.target.value;
    const currentTool = parts.length > 1 ? parts.slice(1).join("/") : toolFallback;

    if (["jpg-to-pdf", "png-to-pdf", "merge-pdf"].includes(currentTool)) {
      window.location.href = `/${nextLang}/${currentTool}`;
      return;
    }

    window.location.href = `/${nextLang}/${toolFallback}`;
  }

  return (
    <select className="lang-select" value={currentLang} onChange={changeLanguage} aria-label="Select language">
      {languages.map((language) => (
        <option key={language.code} value={language.code}>
          {language.label}
        </option>
      ))}
    </select>
  );
}
