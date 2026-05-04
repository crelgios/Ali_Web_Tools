import SiteShell from "./SiteShell";

const labels = {
  en: { why: "Why avoid uploading private files online?", steps: "Steps", benefits: "Why this method is safer", faq: "FAQ", final: "Final advice", cta: "Convert JPG to PDF Now", notFound: "Blog post not found" },
  "zh-CN": { why: "为什么要避免上传私人文件？", steps: "步骤", benefits: "为什么这种方法更安全", faq: "常见问题", final: "最后建议", cta: "立即转换 JPG 到 PDF", notFound: "未找到博客文章" },
  es: { why: "¿Por qué evitar subir archivos privados?", steps: "Pasos", benefits: "Por qué este método es más seguro", faq: "Preguntas frecuentes", final: "Consejo final", cta: "Convertir JPG a PDF ahora", notFound: "Artículo no encontrado" },
  hi: { why: "निजी फाइलें ऑनलाइन अपलोड करने से क्यों बचें?", steps: "स्टेप्स", benefits: "यह तरीका ज्यादा सुरक्षित क्यों है", faq: "FAQ", final: "अंतिम सलाह", cta: "अभी JPG को PDF में बदलें", notFound: "ब्लॉग पोस्ट नहीं मिला" },
  ar: { why: "لماذا تتجنب رفع الملفات الخاصة؟", steps: "الخطوات", benefits: "لماذا هذه الطريقة أكثر أماناً", faq: "الأسئلة الشائعة", final: "نصيحة أخيرة", cta: "حوّل JPG إلى PDF الآن", notFound: "المقال غير موجود" },
  pt: { why: "Por que evitar carregar ficheiros privados?", steps: "Passos", benefits: "Por que este método é mais seguro", faq: "FAQ", final: "Conselho final", cta: "Converter JPG para PDF agora", notFound: "Artigo não encontrado" },
  fr: { why: "Pourquoi éviter d'envoyer des fichiers privés ?", steps: "Étapes", benefits: "Pourquoi cette méthode est plus sûre", faq: "FAQ", final: "Conseil final", cta: "Convertir JPG en PDF", notFound: "Article introuvable" },
  de: { why: "Warum private Dateien nicht hochladen?", steps: "Schritte", benefits: "Warum diese Methode sicherer ist", faq: "FAQ", final: "Abschließender Tipp", cta: "JPG jetzt in PDF umwandeln", notFound: "Blogbeitrag nicht gefunden" },
  ja: { why: "個人ファイルをアップロードしない理由", steps: "手順", benefits: "この方法が安全な理由", faq: "FAQ", final: "最後のアドバイス", cta: "JPG を PDF に変換", notFound: "記事が見つかりません" },
  ru: { why: "Почему не стоит загружать личные файлы?", steps: "Шаги", benefits: "Почему этот способ безопаснее", faq: "FAQ", final: "Итоговый совет", cta: "Конвертировать JPG в PDF", notFound: "Статья не найдена" },
  id: { why: "Mengapa menghindari unggahan file pribadi?", steps: "Langkah", benefits: "Mengapa metode ini lebih aman", faq: "FAQ", final: "Saran akhir", cta: "Ubah JPG ke PDF", notFound: "Posting blog tidak ditemukan" },
  tr: { why: "Özel dosyaları yüklemekten neden kaçınmalısınız?", steps: "Adımlar", benefits: "Bu yöntem neden daha güvenli", faq: "SSS", final: "Son öneri", cta: "JPG'yi PDF'ye dönüştür", notFound: "Blog yazısı bulunamadı" },
  ko: { why: "개인 파일 업로드를 피해야 하는 이유", steps: "단계", benefits: "이 방법이 더 안전한 이유", faq: "FAQ", final: "마지막 조언", cta: "JPG를 PDF로 변환", notFound: "게시글을 찾을 수 없습니다" },
  it: { why: "Perché evitare di caricare file privati?", steps: "Passaggi", benefits: "Perché questo metodo è più sicuro", faq: "FAQ", final: "Consiglio finale", cta: "Converti JPG in PDF", notFound: "Articolo non trovato" },
  nl: { why: "Waarom privébestanden niet uploaden?", steps: "Stappen", benefits: "Waarom deze methode veiliger is", faq: "FAQ", final: "Laatste advies", cta: "JPG naar PDF converteren", notFound: "Blogpost niet gevonden" },
  pl: { why: "Dlaczego unikać przesyłania prywatnych plików?", steps: "Kroki", benefits: "Dlaczego ta metoda jest bezpieczniejsza", faq: "FAQ", final: "Końcowa rada", cta: "Konwertuj JPG do PDF", notFound: "Nie znaleziono wpisu" },
  th: { why: "ทำไมควรหลีกเลี่ยงการอัปโหลดไฟล์ส่วนตัว", steps: "ขั้นตอน", benefits: "ทำไมวิธีนี้ปลอดภัยกว่า", faq: "FAQ", final: "คำแนะนำสุดท้าย", cta: "แปลง JPG เป็น PDF", notFound: "ไม่พบบทความ" },
  vi: { why: "Vì sao nên tránh tải tệp riêng tư lên?", steps: "Các bước", benefits: "Vì sao cách này an toàn hơn", faq: "FAQ", final: "Lời khuyên cuối", cta: "Chuyển JPG sang PDF", notFound: "Không tìm thấy bài viết" },
  bn: { why: "ব্যক্তিগত ফাইল আপলোড এড়াবেন কেন?", steps: "ধাপ", benefits: "এই পদ্ধতি বেশি নিরাপদ কেন", faq: "FAQ", final: "শেষ পরামর্শ", cta: "JPG থেকে PDF করুন", notFound: "ব্লগ পোস্ট পাওয়া যায়নি" },
  ur: { why: "نجی فائلیں اپلوڈ کرنے سے کیوں بچیں؟", steps: "طریقہ", benefits: "یہ طریقہ زیادہ محفوظ کیوں ہے", faq: "FAQ", final: "آخری مشورہ", cta: "JPG کو PDF بنائیں", notFound: "بلاگ پوسٹ نہیں ملی" },
  fa: { why: "چرا از آپلود فایل‌های خصوصی خودداری کنیم؟", steps: "مراحل", benefits: "چرا این روش امن‌تر است", faq: "FAQ", final: "توصیه نهایی", cta: "تبدیل JPG به PDF", notFound: "مطلب پیدا نشد" },
  ms: { why: "Mengapa elak memuat naik fail peribadi?", steps: "Langkah", benefits: "Mengapa kaedah ini lebih selamat", faq: "FAQ", final: "Nasihat akhir", cta: "Tukar JPG ke PDF", notFound: "Catatan blog tidak ditemui" }
};

const posts = {
  "convert-excel-word-ppt-to-pdf-without-uploading-data": {
    en: {
      title: "How to Convert Excel, Word, and PowerPoint to PDF Without Uploading Your Data",
      intro: "Converting Excel sheets, Word documents and PowerPoint presentations to PDF is common, but uploading private files to random websites can be risky.",
      method1: "Method 1: Use Save As in Word",
      method2: "Method 2: Use Export in Excel or PowerPoint",
      method3: "Method 3: Use Print to PDF for Word, Excel and PPT",
      safe: "No upload is required, your data stays on your device, and it works for Word, Excel and PowerPoint.",
      final: "For private documents, use Save As, Export or Print to PDF before using upload-based tools."
    },
    hi: {
      title: "Excel, Word और PowerPoint को PDF में कैसे बदलें बिना डेटा अपलोड किए",
      intro: "Excel sheet, Word document और PowerPoint presentation को PDF में बदलना आम बात है, लेकिन निजी फाइलें किसी वेबसाइट पर अपलोड करना risky हो सकता है।",
      method1: "Method 1: Word में Save As इस्तेमाल करें",
      method2: "Method 2: Excel या PowerPoint में Export इस्तेमाल करें",
      method3: "Method 3: Word, Excel और PPT में Print to PDF इस्तेमाल करें",
      safe: "इसमें upload की जरूरत नहीं, data आपके device पर रहता है, और यह Word, Excel और PowerPoint में काम करता है।",
      final: "Private documents के लिए upload-based tools से पहले Save As, Export या Print to PDF इस्तेमाल करें।"
    },
    ar: {
      title: "كيفية تحويل Excel وWord وPowerPoint إلى PDF دون رفع بياناتك",
      intro: "تحويل ملفات Excel وWord وPowerPoint إلى PDF أمر شائع، لكن رفع الملفات الخاصة إلى مواقع عشوائية قد يكون خطيراً.",
      method1: "الطريقة 1: استخدم Save As في Word",
      method2: "الطريقة 2: استخدم Export في Excel أو PowerPoint",
      method3: "الطريقة 3: استخدم Print to PDF في Word وExcel وPPT",
      safe: "لا تحتاج إلى رفع الملفات، وتبقى بياناتك على جهازك، وتعمل الطريقة مع Word وExcel وPowerPoint.",
      final: "للمستندات الخاصة، استخدم Save As أو Export أو Print to PDF قبل الأدوات التي تطلب الرفع."
    }
  }
};

const fallbackMain = {
  "zh-CN": ["如何将 Excel、Word 和 PowerPoint 转换为 PDF 而不上传数据", "将办公文件转换为 PDF 很常见，但把私人文件上传到不熟悉的网站可能有风险。", "方法 1：在 Word 中使用另存为", "方法 2：在 Excel 或 PowerPoint 中使用导出", "方法 3：使用 Print to PDF", "无需上传，数据保留在你的设备上。", "处理私人文件时，优先使用另存为、导出或 Print to PDF。"],
  es: ["Cómo convertir Excel, Word y PowerPoint a PDF sin subir tus datos", "Convertir documentos a PDF es común, pero subir archivos privados a sitios desconocidos puede ser riesgoso.", "Método 1: usar Guardar como en Word", "Método 2: usar Exportar en Excel o PowerPoint", "Método 3: usar Imprimir a PDF", "No requiere subida y tus datos permanecen en tu dispositivo.", "Para documentos privados, usa Guardar como, Exportar o Imprimir a PDF."],
  fr: ["Comment convertir Excel, Word et PowerPoint en PDF sans envoyer vos données", "Convertir des fichiers en PDF est courant, mais envoyer des fichiers privés à des sites inconnus peut être risqué.", "Méthode 1 : utiliser Enregistrer sous dans Word", "Méthode 2 : utiliser Exporter dans Excel ou PowerPoint", "Méthode 3 : utiliser Imprimer en PDF", "Aucun envoi n'est nécessaire et vos données restent sur votre appareil.", "Pour les documents privés, utilisez d'abord Enregistrer sous, Exporter ou Imprimer en PDF."],
  de: ["Excel, Word und PowerPoint in PDF umwandeln, ohne Daten hochzuladen", "PDF-Konvertierung ist häufig, aber private Dateien auf unbekannte Websites hochzuladen kann riskant sein.", "Methode 1: Speichern unter in Word", "Methode 2: Exportieren in Excel oder PowerPoint", "Methode 3: Drucken als PDF", "Kein Upload nötig; deine Daten bleiben auf deinem Gerät.", "Nutze bei privaten Dokumenten zuerst Speichern unter, Exportieren oder Drucken als PDF."],
  ur: ["Excel، Word اور PowerPoint کو ڈیٹا اپلوڈ کیے بغیر PDF بنائیں", "فائلوں کو PDF میں بدلنا عام ہے، مگر نجی فائلیں نامعلوم ویب سائٹس پر اپلوڈ کرنا خطرناک ہو سکتا ہے۔", "طریقہ 1: Word میں Save As استعمال کریں", "طریقہ 2: Excel یا PowerPoint میں Export استعمال کریں", "طریقہ 3: Print to PDF استعمال کریں", "اپلوڈ کی ضرورت نہیں اور ڈیٹا آپ کے device پر رہتا ہے۔", "نجی documents کے لیے پہلے Save As، Export یا Print to PDF استعمال کریں۔"],
  fa: ["تبدیل Excel، Word و PowerPoint به PDF بدون آپلود داده", "تبدیل فایل به PDF رایج است، اما آپلود فایل خصوصی در سایت‌های ناشناس می‌تواند خطرناک باشد.", "روش 1: استفاده از Save As در Word", "روش 2: استفاده از Export در Excel یا PowerPoint", "روش 3: استفاده از Print to PDF", "نیازی به آپلود نیست و داده روی دستگاه شما می‌ماند.", "برای اسناد خصوصی ابتدا از Save As، Export یا Print to PDF استفاده کنید."]
};

const simplePosts = {
  "jpg-to-pdf-without-software": {
    en: ["How to Convert JPG to PDF Without Software (Free & Fast)", "You can convert JPG images to PDF directly in your browser without installing heavy software.", "Open the JPG to PDF tool, choose your images, click convert, and download your PDF instantly."],
    hi: ["बिना सॉफ्टवेयर JPG को PDF में कैसे बदलें", "आप JPG images को browser में ही PDF में बदल सकते हैं, heavy software install करने की जरूरत नहीं।", "JPG to PDF tool खोलें, images चुनें, convert पर क्लिक करें और PDF download करें।"],
    ar: ["كيفية تحويل JPG إلى PDF بدون برامج", "يمكنك تحويل صور JPG إلى PDF مباشرة من المتصفح دون تثبيت برامج كبيرة.", "افتح أداة JPG to PDF، اختر الصور، اضغط تحويل، ثم حمّل ملف PDF."]
  },
  "convert-jpg-to-pdf-mobile": {
    en: ["Convert JPG to PDF on Mobile (No App Needed)", "You can convert JPG images to PDF on Android or iPhone from your browser.", "Open the tool, select photos from your gallery, tap convert, and download the PDF."],
    hi: ["मोबाइल पर JPG को PDF में बदलें", "Android या iPhone पर browser से JPG images को PDF में बदल सकते हैं।", "Tool खोलें, gallery से photo चुनें, convert करें और PDF download करें।"],
    ar: ["تحويل JPG إلى PDF على الهاتف", "يمكنك تحويل الصور إلى PDF على Android أو iPhone من المتصفح.", "افتح الأداة، اختر الصور، اضغط تحويل، ثم حمّل PDF."]
  },
  "best-free-jpg-to-pdf-converter": {
    en: ["Best Free JPG to PDF Converter Online (No Signup Required)", "A good converter should be fast, free, mobile friendly and not require signup.", "Choose your JPG images, convert them to PDF, and download the result."],
    hi: ["सबसे अच्छा फ्री JPG to PDF Converter", "अच्छा converter fast, free, mobile friendly और बिना signup होना चाहिए।", "JPG images चुनें, PDF में convert करें और result download करें।"],
    ar: ["أفضل محول JPG إلى PDF مجاني", "المحول الجيد يجب أن يكون سريعاً ومجانياً ومناسباً للهاتف ولا يحتاج إلى تسجيل.", "اختر صور JPG، حولها إلى PDF، ثم حمّل النتيجة."]
  },
  "merge-pdf-online-free": {
    en: ["How to Merge PDF Files Online Free Without Software", "Merging PDF files helps you combine many documents into one clean file.", "Open Merge PDF, select files, arrange the order, and download the merged PDF."],
    hi: ["PDF फाइलें फ्री में कैसे मर्ज करें", "PDF merge करने से कई documents एक clean file में जुड़ जाते हैं।", "Merge PDF खोलें, files select करें, order set करें और merged PDF download करें।"],
    ar: ["كيفية دمج ملفات PDF مجاناً", "دمج PDF يساعدك على جمع عدة مستندات في ملف واحد.", "افتح أداة الدمج، اختر الملفات، رتّبها، ثم حمّل ملف PDF النهائي."]
  },
  "top-free-pdf-tools-online": {
    en: ["Top Free PDF Tools Online You Should Use in 2026", "Free PDF tools help you convert images, merge files and manage documents quickly.", "Useful tools include JPG to PDF, PNG to PDF and Merge PDF."],
    hi: ["2026 के लिए बेस्ट फ्री PDF Tools", "Free PDF tools से images convert, files merge और documents manage करना आसान होता है।", "Useful tools में JPG to PDF, PNG to PDF और Merge PDF शामिल हैं।"],
    ar: ["أفضل أدوات PDF مجانية في 2026", "أدوات PDF المجانية تساعدك على تحويل الصور ودمج الملفات بسرعة.", "من الأدوات المفيدة JPG to PDF وPNG to PDF وMerge PDF."]
  }
};

function localizedMain(lang) {
  const main = posts["convert-excel-word-ppt-to-pdf-without-uploading-data"];
  if (main[lang]) return main[lang];
  const f = fallbackMain[lang] || [main.en.title, main.en.intro, main.en.method1, main.en.method2, main.en.method3, main.en.safe, main.en.final];
  return { title: f[0], intro: f[1], method1: f[2], method2: f[3], method3: f[4], safe: f[5], final: f[6] };
}

function getSimple(slug, lang) {
  const data = simplePosts[slug];
  if (!data) return null;
  if (data[lang]) return data[lang];
  const titleFallback = {
    "zh-CN": "PDF 指南", es: "Guía PDF", pt: "Guia PDF", fr: "Guide PDF", de: "PDF-Anleitung", ja: "PDF ガイド", ru: "Руководство PDF", id: "Panduan PDF", tr: "PDF Rehberi", ko: "PDF 가이드", it: "Guida PDF", nl: "PDF-gids", pl: "Poradnik PDF", th: "คู่มือ PDF", vi: "Hướng dẫn PDF", bn: "PDF গাইড", ur: "PDF گائیڈ", fa: "راهنمای PDF", ms: "Panduan PDF"
  };
  return [titleFallback[lang] || data.en[0], data.en[1], data.en[2]];
}

function PostContent({ slug, lang }) {
  const l = labels[lang] || labels.en;
  if (slug === "convert-excel-word-ppt-to-pdf-without-upload" || slug === "convert-excel-word-ppt-to-pdf-without-uploading-data") {
    const p = localizedMain(lang);
    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BlogPosting", headline: p.title, description: p.intro, image: "/images/print-to-pdf-guide.png", author: { "@type": "Organization", name: "PDF Tools" }, publisher: { "@type": "Organization", name: "PDF Tools" } }) }} />
        <h1>{p.title}</h1>
        <p>{p.intro}</p>
        <h2>{l.why}</h2>
        <ul><li>Private documents should stay on your device.</li><li>Avoid upload tools for IDs, payments, school or office data.</li><li>Use built-in PDF options first.</li></ul>
        <h2>{p.method1}</h2>
        <ol><li>Open your Word document.</li><li>Click File.</li><li>Click Save As.</li><li>Select PDF.</li><li>Save the file.</li></ol>
        <h2>{p.method2}</h2>
        <ol><li>Open Excel or PowerPoint.</li><li>Click File.</li><li>Click Export.</li><li>Choose PDF or Create PDF/XPS.</li><li>Save your PDF.</li></ol>
        <h2>{p.method3}</h2>
        <img src="/images/print-to-pdf-guide.png" alt={p.title} style={{ width: "100%", borderRadius: "14px", margin: "14px 0", border: "1px solid #e5e7eb" }} />
        <ol><li>Open your file.</li><li>Press Ctrl + P or choose File → Print.</li><li>Select Microsoft Print to PDF.</li><li>Click Print.</li><li>Choose folder and save.</li></ol>
        <h2>{l.benefits}</h2><p>{p.safe}</p>
        <h2>{l.faq}</h2><p><strong>Is this safe?</strong><br />Yes, because the PDF is created on your device.</p>
        <h2>{l.final}</h2><p>{p.final}</p>
      </>
    );
  }

  const p = getSimple(slug, lang);
  if (!p) return <h1>{l.notFound}</h1>;
  return <><h1>{p[0]}</h1><p>{p[1]}</p><h2>{l.steps}</h2><p>{p[2]}</p><h2>{l.final}</h2><p>{lang === "hi" ? "अपनी फाइलों को सुरक्षित रखने के लिए browser-based और privacy friendly tools इस्तेमाल करें।" : lang === "ar" ? "للحفاظ على ملفاتك آمنة، استخدم أدوات تحترم الخصوصية وتعمل من المتصفح." : "To keep your files safe, use browser-based and privacy-friendly tools."}</p></>;
}

export default function BlogPost({ lang = "en", slug }) {
  const l = labels[lang] || labels.en;
  return (
    <SiteShell lang={lang}>
      <main className="container">
        <article className="card blog-post">
          <PostContent slug={slug} lang={lang} />
          <a className="btn" href={`/${lang}/jpg-to-pdf`}>{l.cta}</a>
        </article>
      </main>
    </SiteShell>
  );
}
