"use client";
import { usePathname } from "next/navigation";
import { languageOptions } from "../lib/translations";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const parts = pathname.split("/").filter(Boolean);
  const codes = languageOptions.map((l) => l.code);
  const currentLang = codes.includes(parts[0]) ? parts[0] : "en";
  const currentPath = parts.length > 1 ? parts.slice(1).join("/") : "";

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
