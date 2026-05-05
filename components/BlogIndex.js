import SiteShell from "./SiteShell";

const blogText = {
  en: { heading: "Ali W Vide Blog", intro: "Simple guides to help you convert, merge and manage PDF files safely.", read: "Read Guide" },
  "zh-CN": { heading: "PDF 工具博客", intro: "帮助你安全转换、合并和管理 PDF 文件的简单指南。", read: "阅读指南" },
  es: { heading: "Blog de herramientas PDF", intro: "Guías sencillas para convertir, unir y gestionar archivos PDF de forma segura.", read: "Leer guía" },
  hi: { heading: "PDF टूल्स ब्लॉग", intro: "PDF फाइलों को सुरक्षित तरीके से कन्वर्ट, मर्ज और मैनेज करने की आसान गाइड।", read: "गाइड पढ़ें" },
  ar: { heading: "مدونة أدوات PDF", intro: "أدلة بسيطة لمساعدتك على تحويل ودمج وإدارة ملفات PDF بأمان.", read: "اقرأ الدليل" },
  pt: { heading: "Blog de Ferramentas PDF", intro: "Guias simples para converter, juntar e gerir ficheiros PDF com segurança.", read: "Ler guia" },
  fr: { heading: "Blog des outils PDF", intro: "Des guides simples pour convertir, fusionner et gérer vos fichiers PDF en sécurité.", read: "Lire le guide" },
  de: { heading: "PDF-Tools Blog", intro: "Einfache Anleitungen zum sicheren Konvertieren, Zusammenführen und Verwalten von PDF-Dateien.", read: "Anleitung lesen" },
  ja: { heading: "PDF ツールブログ", intro: "PDF ファイルを安全に変換、結合、管理するための簡単なガイド。", read: "ガイドを読む" },
  ru: { heading: "Блог PDF-инструментов", intro: "Простые инструкции для безопасного конвертирования, объединения и управления PDF-файлами.", read: "Читать руководство" },
  id: { heading: "Blog Alat PDF", intro: "Panduan sederhana untuk mengonversi, menggabungkan, dan mengelola file PDF dengan aman.", read: "Baca Panduan" },
  tr: { heading: "PDF Araçları Blogu", intro: "PDF dosyalarını güvenle dönüştürmek, birleştirmek ve yönetmek için basit rehberler.", read: "Rehberi Oku" },
  ko: { heading: "PDF 도구 블로그", intro: "PDF 파일을 안전하게 변환, 병합, 관리하는 쉬운 가이드입니다.", read: "가이드 읽기" },
  it: { heading: "Blog Strumenti PDF", intro: "Guide semplici per convertire, unire e gestire file PDF in modo sicuro.", read: "Leggi la guida" },
  nl: { heading: "Ali W Vide Blog", intro: "Eenvoudige handleidingen om PDF-bestanden veilig te converteren, samen te voegen en te beheren.", read: "Lees gids" },
  pl: { heading: "Blog narzędzi PDF", intro: "Proste poradniki do bezpiecznej konwersji, łączenia i zarządzania plikami PDF.", read: "Czytaj poradnik" },
  th: { heading: "บล็อกเครื่องมือ PDF", intro: "คู่มือง่าย ๆ สำหรับแปลง รวม และจัดการไฟล์ PDF อย่างปลอดภัย", read: "อ่านคู่มือ" },
  vi: { heading: "Blog công cụ PDF", intro: "Hướng dẫn đơn giản để chuyển đổi, gộp và quản lý tệp PDF an toàn.", read: "Đọc hướng dẫn" },
  bn: { heading: "PDF টুলস ব্লগ", intro: "PDF ফাইল নিরাপদে কনভার্ট, মার্জ ও ম্যানেজ করার সহজ গাইড।", read: "গাইড পড়ুন" },
  ur: { heading: "PDF ٹولز بلاگ", intro: "PDF فائلوں کو محفوظ طریقے سے کنورٹ، مرج اور مینیج کرنے کی آسان گائیڈز۔", read: "گائیڈ پڑھیں" },
  fa: { heading: "وبلاگ ابزارهای PDF", intro: "راهنماهای ساده برای تبدیل، ادغام و مدیریت امن فایل‌های PDF.", read: "خواندن راهنما" },
  ms: { heading: "Blog Alat PDF", intro: "Panduan ringkas untuk menukar, menggabung dan mengurus fail PDF dengan selamat.", read: "Baca Panduan" }
};

const postText = {
  en: [
    ["convert-excel-word-ppt-to-pdf-without-uploading-data", "How to Convert Excel, Word, and PowerPoint to PDF Without Uploading Your Data", "Safe ways to convert Excel, Word and PPT files to PDF using Save As, Export and Microsoft Print to PDF without uploading private files online."],
    ["jpg-to-pdf-without-software", "How to Convert JPG to PDF Without Software (Free & Fast)", "Convert JPG to PDF online without installing software. Fast, secure and easy for mobile and desktop."],
    ["convert-jpg-to-pdf-mobile", "Convert JPG to PDF on Mobile (No App Needed)", "Convert JPG images to PDF on Android or iPhone directly from your browser."],
    ["best-free-jpg-to-pdf-converter", "Best Free JPG to PDF Converter Online (No Signup Required)", "What makes a good free JPG to PDF converter and how to use one without signup."],
    ["merge-pdf-online-free", "How to Merge PDF Files Online Free Without Software", "Combine multiple PDF files into one document easily from your browser."],
    ["top-free-pdf-tools-online", "Top Free Ali W Vide Online You Should Use in 2026", "Useful free Ali W Vide for converting images to PDF and merging PDF files."],
  ],
  hi: [
    ["convert-excel-word-ppt-to-pdf-without-uploading-data", "Excel, Word और PowerPoint को PDF में कैसे बदलें बिना डेटा अपलोड किए", "Save As, Export और Microsoft Print to PDF से निजी फाइलें वेबसाइट पर अपलोड किए बिना PDF बनाएं।"],
    ["jpg-to-pdf-without-software", "बिना सॉफ्टवेयर JPG को PDF में कैसे बदलें", "मोबाइल और डेस्कटॉप पर JPG को PDF में तेज़ और सुरक्षित तरीके से बदलें।"],
    ["convert-jpg-to-pdf-mobile", "मोबाइल पर JPG को PDF में बदलें", "Android या iPhone ब्राउज़र से JPG इमेज को PDF में बदलें।"],
    ["best-free-jpg-to-pdf-converter", "सबसे अच्छा फ्री JPG to PDF Converter", "बिना signup JPG to PDF converter कैसे चुनें और इस्तेमाल करें।"],
    ["merge-pdf-online-free", "PDF फाइलें फ्री में कैसे मर्ज करें", "कई PDF फाइलों को एक PDF में आसानी से जोड़ें।"],
    ["top-free-pdf-tools-online", "2026 के लिए बेस्ट फ्री Ali W Vide", "PDF convert और merge करने के उपयोगी फ्री ऑनलाइन टूल्स।"],
  ],
  ar: [
    ["convert-excel-word-ppt-to-pdf-without-uploading-data", "كيفية تحويل Excel وWord وPowerPoint إلى PDF دون رفع بياناتك", "طرق آمنة لتحويل الملفات إلى PDF باستخدام Save As وExport وMicrosoft Print to PDF دون رفعها."],
    ["jpg-to-pdf-without-software", "كيفية تحويل JPG إلى PDF بدون برامج", "حوّل صور JPG إلى PDF بسرعة وأمان من المتصفح."],
    ["convert-jpg-to-pdf-mobile", "تحويل JPG إلى PDF على الهاتف", "حوّل الصور إلى PDF على Android أو iPhone من المتصفح."],
    ["best-free-jpg-to-pdf-converter", "أفضل محول JPG إلى PDF مجاني", "كيفية اختيار محول مجاني بدون تسجيل."],
    ["merge-pdf-online-free", "كيفية دمج ملفات PDF مجاناً", "اجمع عدة ملفات PDF في ملف واحد بسهولة."],
    ["top-free-pdf-tools-online", "أفضل أدوات PDF مجانية في 2026", "أدوات مفيدة لتحويل ودمج ملفات PDF."],
  ]
};

const fallbackLocalized = {
  "zh-CN": ["如何将 Excel、Word 和 PowerPoint 转换为 PDF 而不上传数据", "安全地将文件转换为 PDF，不把私人文件上传到网站。"],
  es: ["Cómo convertir Excel, Word y PowerPoint a PDF sin subir tus datos", "Convierte archivos a PDF de forma segura sin subir documentos privados."],
  pt: ["Como converter Excel, Word e PowerPoint para PDF sem enviar os seus dados", "Converta ficheiros para PDF com segurança sem carregar documentos privados."],
  fr: ["Comment convertir Excel, Word et PowerPoint en PDF sans envoyer vos données", "Convertissez vos fichiers en PDF en sécurité sans téléverser vos documents privés."],
  de: ["Excel, Word und PowerPoint in PDF umwandeln, ohne Daten hochzuladen", "Dateien sicher in PDF umwandeln, ohne private Dokumente hochzuladen."],
  ja: ["データをアップロードせずに Excel、Word、PowerPoint を PDF に変換する方法", "個人ファイルをアップロードせず安全に PDF へ変換します。"],
  ru: ["Как конвертировать Excel, Word и PowerPoint в PDF без загрузки данных", "Безопасно создавайте PDF, не загружая личные файлы на сайты."],
  id: ["Cara Mengubah Excel, Word, dan PowerPoint ke PDF Tanpa Mengunggah Data", "Ubah file ke PDF dengan aman tanpa mengunggah dokumen pribadi."],
  tr: ["Excel, Word ve PowerPoint Dosyalarını Veri Yüklemeden PDF Yapma", "Özel dosyaları siteye yüklemeden güvenli PDF oluşturun."],
  ko: ["데이터를 업로드하지 않고 Excel, Word, PowerPoint를 PDF로 변환하는 방법", "개인 파일을 업로드하지 않고 안전하게 PDF로 변환하세요."],
  it: ["Come convertire Excel, Word e PowerPoint in PDF senza caricare i dati", "Converti file in PDF in modo sicuro senza caricare documenti privati."],
  nl: ["Excel, Word en PowerPoint naar PDF omzetten zonder je data te uploaden", "Maak veilig PDF-bestanden zonder privébestanden te uploaden."],
  pl: ["Jak konwertować Excel, Word i PowerPoint do PDF bez przesyłania danych", "Bezpiecznie twórz PDF bez wysyłania prywatnych plików na strony."],
  th: ["วิธีแปลง Excel, Word และ PowerPoint เป็น PDF โดยไม่อัปโหลดข้อมูล", "แปลงไฟล์เป็น PDF อย่างปลอดภัยโดยไม่อัปโหลดไฟล์ส่วนตัว"],
  vi: ["Cách chuyển Excel, Word và PowerPoint sang PDF mà không tải dữ liệu lên", "Tạo PDF an toàn mà không tải tệp riêng tư lên website."],
  bn: ["ডেটা আপলোড না করে Excel, Word ও PowerPoint PDF করুন", "ব্যক্তিগত ফাইল ওয়েবসাইটে আপলোড না করে নিরাপদে PDF তৈরি করুন।"],
  ur: ["Excel، Word اور PowerPoint کو ڈیٹا اپلوڈ کیے بغیر PDF بنائیں", "نجی فائلیں ویب سائٹ پر اپلوڈ کیے بغیر محفوظ طریقے سے PDF بنائیں۔"],
  fa: ["تبدیل Excel، Word و PowerPoint به PDF بدون آپلود داده", "بدون آپلود فایل‌های خصوصی، PDF را امن بسازید."],
  ms: ["Cara Menukar Excel, Word dan PowerPoint kepada PDF Tanpa Memuat Naik Data", "Tukar fail kepada PDF dengan selamat tanpa memuat naik dokumen peribadi."]
};

function getPosts(lang) {
  if (postText[lang]) return postText[lang].map(([slug, title, desc]) => ({ slug, title, desc }));
  const base = postText.en;
  const first = fallbackLocalized[lang];
  return base.map(([slug, title, desc], index) => ({
    slug,
    title: index === 0 && first ? first[0] : title,
    desc: index === 0 && first ? first[1] : desc
  }));
}

export default function BlogIndex({ lang = "en" }) {
  const t = blogText[lang] || blogText.en;
  const posts = getPosts(lang);

  return (
    <SiteShell lang={lang}>
      <main className="container">
        <section className="hero">
          <h1>{t.heading}</h1>
          <p>{t.intro}</p>
        </section>

        <section className="grid">
          {posts.map((post) => (
            <div className="card" key={post.slug}>
              <h2>{post.title}</h2>
              <p>{post.desc}</p>
              <a className="btn" href={`/${lang}/blog/${post.slug}`}>{t.read}</a>
            </div>
          ))}
        </section>
      </main>
    </SiteShell>
  );
}
