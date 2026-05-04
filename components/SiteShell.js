import LanguageSwitcher from "./LanguageSwitcher";
import { getText, getDir } from "../lib/translations";

export default function SiteShell({ lang = "en", children }) {
  const t = getText(lang);
  const dir = getDir(lang);

  return (
    <div dir={dir}>
      <div className="nav">
        <div className="nav-inner">
          <a className="logo" href={`/${lang}`}>{t.logo}</a>
          <div className="links">
            <a href={`/${lang}/jpg-to-pdf`}>{t.jpg}</a>
            <a href={`/${lang}/png-to-pdf`}>{t.png}</a>
            <a href={`/${lang}/merge-pdf`}>{t.merge}</a>
            <a href="/en/blog">Blog</a>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
      {children}
      
      <div className="footer">
        <p>{t.footer}</p>
        <p className="footer-links">
          <a href={`/${lang}/privacy-policy`}>Privacy Policy</a>
          <span> · </span>
          <a href={`/${lang}/terms`}>Terms</a>
          <span> · </span>
          <a href={`/${lang}/contact`}>Contact</a>
          <span> · </span>
          <a href={`/${lang}/faq`}>FAQ</a>
        </p>
      </div>

    </div>
  );
}
