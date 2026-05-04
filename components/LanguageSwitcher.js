"use client";
import { usePathname } from "next/navigation";
import { languageOptions } from "../lib/translations";

export default function LanguageSwitcher() {
  const pathname = usePathname() || "/";
  const parts = pathname.split("/").filter(Boolean);
  const codes = languageOptions.map((l) => l.code);
  const hasLangPrefix = codes.includes(parts[0]);
  const currentLang = hasLangPrefix ? parts[0] : "en";

  // Keep the same page while changing language.
  // Example: /en/faq -> /hi/faq and /faq -> /hi/faq
  const currentPath = hasLangPrefix ? parts.slice(1).join("/") : parts.join("/");

  function changeLanguage(e) {
    const nextLang = e.target.value;
    window.location.href = currentPath ? `/${nextLang}/${currentPath}` : `/${nextLang}`;
  }

  return (
    <select className="lang-select" value={currentLang} onChange={changeLanguage} aria-label="Select language">
      {languageOptions.map((language) => (
        <option key={language.code} value={language.code}>{language.label}</option>
      ))}
    </select>
  );
}
