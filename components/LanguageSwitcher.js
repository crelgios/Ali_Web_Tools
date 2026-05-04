"use client";

import { usePathname, useRouter } from "next/navigation";
import { languageOptions } from "../lib/translations";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname() || "/";
  const codes = languageOptions.map((l) => l.code);
  const parts = pathname.split("/").filter(Boolean);
  const hasLangPrefix = codes.includes(parts[0]);
  const currentLang = hasLangPrefix ? parts[0] : (typeof window !== "undefined" && localStorage.getItem("siteLang")) || "en";
  const currentPath = hasLangPrefix ? parts.slice(1).join("/") : parts.join("/");

  function changeLanguage(e) {
    const nextLang = e.target.value;
    if (typeof window !== "undefined") {
      localStorage.setItem("siteLang", nextLang);
    }
    const nextPath = currentPath ? `/${nextLang}/${currentPath}` : `/${nextLang}`;
    router.push(nextPath);
  }

  return (
    <select className="lang-select" value={currentLang} onChange={changeLanguage} aria-label="Select language">
      {languageOptions.map((language) => (
        <option key={language.code} value={language.code}>{language.label}</option>
      ))}
    </select>
  );
}
