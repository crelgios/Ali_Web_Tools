import LanguageSwitcher from "./LanguageSwitcher";
import { getText, getDir } from "../lib/translations";
import { getTrustText } from "../lib/trustTranslations";


const navLabels = {
  en: { pdf: "PDF Tools", image: "Image Tools" },
  hi: { pdf: "PDF टूल्स", image: "इमेज टूल्स" },
  ar: { pdf: "أدوات PDF", image: "أدوات الصور" },
  "zh-CN": { pdf: "PDF 工具", image: "图片工具" },
  es: { pdf: "Herramientas PDF", image: "Herramientas de imagen" },
  fr: { pdf: "Outils PDF", image: "Outils d’image" },
  de: { pdf: "PDF-Tools", image: "Bild-Tools" }
};

const blogLabels = {
  en: "Blog", "zh-CN": "博客", es: "Blog", hi: "ब्लॉग", ar: "المدونة", pt: "Blog", fr: "Blog", de: "Blog", ja: "ブログ", ru: "Блог", id: "Blog", tr: "Blog", ko: "블로그", it: "Blog", nl: "Blog", pl: "Blog", th: "บล็อก", vi: "Blog", bn: "ব্লগ", ur: "بلاگ", fa: "وبلاگ", ms: "Blog"
};

export default function SiteShell({ lang = "en", children }) {
  const t = getText(lang);
  const trust = getTrustText(lang);
  const dir = getDir(lang);
  const nav = navLabels[lang] || navLabels.en;

  return (
    <div dir={dir}>
      <div className="nav">
        <div className="nav-inner">
          <a className="logo" href={`/${lang}`}>{t.logo}</a>
          <div className="links">
            <a href={`/${lang}/pdf-tools`}>{nav.pdf}</a>
            <a href={`/${lang}/image-tools`}>{nav.image}</a>
            <a href={`/${lang}/blog`}>{blogLabels[lang] || "Blog"}</a>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
      {children}
      
      <div className="footer">
        <p>{t.footer}</p>
        <p className="footer-links">
          <a href={`/${lang}/privacy-policy`}>{trust.privacyTitle}</a>
          <span> · </span>
          <a href={`/${lang}/terms`}>{trust.termsTitle}</a>
          <span> · </span>
          <a href={`/${lang}/contact`}>{trust.contactTitle}</a>
          <span> · </span>
          <a href={`/${lang}/faq`}>{trust.faqTitle}</a>
        </p>
      </div>

    </div>
  );
}
