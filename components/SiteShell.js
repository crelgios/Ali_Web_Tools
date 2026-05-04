import LanguageSwitcher from "./LanguageSwitcher";
import { getText, getDir } from "../lib/translations";
import { getTrustText } from "../lib/trustTranslations";
import { getImageToolText } from "./ImageToolLabels";

const blogLabels = {"en": "Blog", "zh-CN": "博客", "es": "Blog", "hi": "ब्लॉग", "ar": "المدونة", "pt": "Blog", "fr": "Blog", "de": "Blog", "ja": "ブログ", "ru": "Блог", "id": "Blog", "tr": "Blog", "ko": "블로그", "it": "Blog", "nl": "Blog", "pl": "Blog", "th": "บล็อก", "vi": "Blog", "bn": "ব্লগ", "ur": "بلاگ", "fa": "وبلاگ", "ms": "Blog"};

function navText(lang){
  const i = getImageToolText(lang);
  return {
    pdf: i.pdfCategory || "PDF Tools",
    image: i.imageCategory || i.imageToolsTitle || "Image Tools"
  };
}

export default function SiteShell({ lang = "en", children }) {
  const t = getText(lang);
  const trust = getTrustText(lang);
  const dir = getDir(lang);
  const nav = navText(lang);

  return (
    <div dir={dir}>
      <div className="nav">
        <div className="nav-inner">
          <a className="logo" href={`/${lang}`}>{t.logo}</a>
          <div className="links">
            <a href={`/${lang}/pdf-tools`}>{nav.pdf}</a>
            <a href={`/${lang}/image-tools`}>{nav.image}</a>
            <a href={`/${lang}/blog`}>{blogLabels[lang] || blogLabels.en}</a>
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
