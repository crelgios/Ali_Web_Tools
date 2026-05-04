"use client";

import { useRef, useState } from "react";

const labels = {
  en: {
    title: "Free Online Image Editor",
    desc: "Resize images by width and height, add text, compress images and convert JPG to PNG directly in your browser.",
    select: "Select Image", noFile: "No image selected", width: "Width", height: "Height", keep: "Keep aspect ratio",
    rotateLeft: "Rotate Left", rotateRight: "Rotate Right", flipH: "Flip Horizontal", flipV: "Flip Vertical",
    format: "Output Format", quality: "Compression Quality", reset: "Reset", download: "Download Image",
    preview: "Preview", textTitle: "Add Text on Image", text: "Text", textPlaceholder: "Type your text", textSize: "Text Size", textX: "Text X", textY: "Text Y", applyText: "Apply Text",
    compressTitle: "Image Compress Tool", compressDesc: "Lower the quality value to reduce file size before download.", converterTitle: "JPG to PNG Converter", converterDesc: "Upload a JPG image, choose PNG format and download it as PNG.", original: "Original", estimated: "Estimated download size", privacy: "Your image is processed locally in your browser. We do not upload or store your files."
  },
  hi: {
    title: "मुफ्त ऑनलाइन इमेज एडिटर", desc: "इमेज को width/height से रीसाइज़ करें, टेक्स्ट जोड़ें, कंप्रेस करें और JPG को PNG में बदलें।",
    select: "इमेज चुनें", noFile: "कोई इमेज चुनी नहीं गई", width: "चौड़ाई", height: "ऊंचाई", keep: "आस्पेक्ट रेशियो रखें",
    rotateLeft: "बाएं घुमाएं", rotateRight: "दाएं घुमाएं", flipH: "हॉरिजॉन्टल फ्लिप", flipV: "वर्टिकल फ्लिप",
    format: "आउटपुट फॉर्मेट", quality: "कंप्रेशन क्वालिटी", reset: "रीसेट", download: "इमेज डाउनलोड करें",
    preview: "प्रीव्यू", textTitle: "इमेज पर टेक्स्ट जोड़ें", text: "टेक्स्ट", textPlaceholder: "अपना टेक्स्ट लिखें", textSize: "टेक्स्ट साइज़", textX: "टेक्स्ट X", textY: "टेक्स्ट Y", applyText: "टेक्स्ट लगाएं",
    compressTitle: "इमेज कंप्रेस टूल", compressDesc: "डाउनलोड से पहले फाइल साइज कम करने के लिए क्वालिटी घटाएं।", converterTitle: "JPG से PNG कन्वर्टर", converterDesc: "JPG इमेज अपलोड करें, PNG चुनें और डाउनलोड करें।", original: "ओरिजिनल", estimated: "अनुमानित डाउनलोड साइज", privacy: "आपकी इमेज ब्राउज़र में ही प्रोसेस होती है। हम फाइल अपलोड या सेव नहीं करते।"
  },
  ar: {
    title: "محرر صور مجاني على الإنترنت", desc: "غيّر حجم الصور بالعرض والارتفاع، أضف نصاً، اضغط الصور وحوّل JPG إلى PNG داخل المتصفح.",
    select: "اختر صورة", noFile: "لم يتم اختيار صورة", width: "العرض", height: "الارتفاع", keep: "الحفاظ على النسبة",
    rotateLeft: "تدوير لليسار", rotateRight: "تدوير لليمين", flipH: "قلب أفقي", flipV: "قلب عمودي",
    format: "صيغة الإخراج", quality: "جودة الضغط", reset: "إعادة ضبط", download: "تنزيل الصورة",
    preview: "معاينة", textTitle: "إضافة نص على الصورة", text: "النص", textPlaceholder: "اكتب النص", textSize: "حجم النص", textX: "موضع X", textY: "موضع Y", applyText: "تطبيق النص",
    compressTitle: "أداة ضغط الصور", compressDesc: "اخفض الجودة لتقليل حجم الملف قبل التنزيل.", converterTitle: "محول JPG إلى PNG", converterDesc: "ارفع صورة JPG واختر PNG ثم نزّلها.", original: "الأصلي", estimated: "حجم التنزيل المتوقع", privacy: "تتم معالجة صورتك محلياً داخل المتصفح. نحن لا نرفع أو نخزن ملفاتك."
  },
  "zh-CN": {
    title: "免费在线图片编辑器", desc: "在浏览器中按宽高调整图片、添加文字、压缩图片并将 JPG 转为 PNG。",
    select: "选择图片", noFile: "未选择图片", width: "宽度", height: "高度", keep: "保持宽高比",
    rotateLeft: "向左旋转", rotateRight: "向右旋转", flipH: "水平翻转", flipV: "垂直翻转",
    format: "输出格式", quality: "压缩质量", reset: "重置", download: "下载图片",
    preview: "预览", textTitle: "在图片上添加文字", text: "文字", textPlaceholder: "输入文字", textSize: "文字大小", textX: "文字 X", textY: "文字 Y", applyText: "应用文字",
    compressTitle: "图片压缩工具", compressDesc: "下载前降低质量以减小文件大小。", converterTitle: "JPG 转 PNG", converterDesc: "上传 JPG，选择 PNG 格式并下载。", original: "原始大小", estimated: "预计下载大小", privacy: "图片只在你的浏览器中本地处理。我们不会上传或存储文件。"
  },
  es: { title: "Editor de imágenes gratis online", desc: "Cambia tamaño, añade texto, comprime y convierte JPG a PNG en tu navegador.", select: "Seleccionar imagen", noFile: "No hay imagen seleccionada", width: "Ancho", height: "Alto", keep: "Mantener proporción", rotateLeft: "Girar izquierda", rotateRight: "Girar derecha", flipH: "Voltear horizontal", flipV: "Voltear vertical", format: "Formato", quality: "Calidad de compresión", reset: "Restablecer", download: "Descargar imagen", preview: "Vista previa", textTitle: "Añadir texto", text: "Texto", textPlaceholder: "Escribe tu texto", textSize: "Tamaño", textX: "Texto X", textY: "Texto Y", applyText: "Aplicar texto", compressTitle: "Compresor de imágenes", compressDesc: "Baja la calidad para reducir tamaño.", converterTitle: "Convertidor JPG a PNG", converterDesc: "Sube JPG, elige PNG y descarga.", original: "Original", estimated: "Tamaño estimado", privacy: "Tu imagen se procesa en tu navegador. No subimos ni guardamos archivos." },
  fr: { title: "Éditeur d’image gratuit", desc: "Redimensionnez, ajoutez du texte, compressez et convertissez JPG en PNG dans le navigateur.", select: "Choisir une image", noFile: "Aucune image sélectionnée", width: "Largeur", height: "Hauteur", keep: "Garder les proportions", rotateLeft: "Rotation gauche", rotateRight: "Rotation droite", flipH: "Retourner horizontalement", flipV: "Retourner verticalement", format: "Format", quality: "Qualité", reset: "Réinitialiser", download: "Télécharger", preview: "Aperçu", textTitle: "Ajouter du texte", text: "Texte", textPlaceholder: "Votre texte", textSize: "Taille", textX: "Texte X", textY: "Texte Y", applyText: "Appliquer", compressTitle: "Compresseur d’image", compressDesc: "Réduisez la qualité pour diminuer la taille.", converterTitle: "Convertisseur JPG vers PNG", converterDesc: "Importez JPG, choisissez PNG et téléchargez.", original: "Original", estimated: "Taille estimée", privacy: "Votre image est traitée dans votre navigateur. Aucun envoi ni stockage." },
  de: { title: "Kostenloser Online-Bildeditor", desc: "Bildgröße ändern, Text hinzufügen, komprimieren und JPG in PNG umwandeln.", select: "Bild auswählen", noFile: "Kein Bild ausgewählt", width: "Breite", height: "Höhe", keep: "Seitenverhältnis beibehalten", rotateLeft: "Links drehen", rotateRight: "Rechts drehen", flipH: "Horizontal spiegeln", flipV: "Vertikal spiegeln", format: "Format", quality: "Qualität", reset: "Zurücksetzen", download: "Bild herunterladen", preview: "Vorschau", textTitle: "Text hinzufügen", text: "Text", textPlaceholder: "Text eingeben", textSize: "Textgröße", textX: "Text X", textY: "Text Y", applyText: "Text anwenden", compressTitle: "Bild komprimieren", compressDesc: "Qualität senken, um Dateigröße zu reduzieren.", converterTitle: "JPG zu PNG", converterDesc: "JPG hochladen, PNG wählen und herunterladen.", original: "Original", estimated: "Geschätzte Größe", privacy: "Ihr Bild wird lokal im Browser verarbeitet. Keine Uploads oder Speicherung." }
};

function getLabels(lang) { return labels[lang] || labels.en; }
function formatBytes(bytes) {
  if (!bytes) return "0 KB";
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

export default function ImageEditorTool({ lang = "en" }) {
  const t = getLabels(lang);
  const fileInputRef = useRef(null);
  const canvasRef = useRef(null);
  const imageRef = useRef(null);
  const [fileName, setFileName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [fileSize, setFileSize] = useState(0);
  const [estimatedSize, setEstimatedSize] = useState(0);
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [originalWidth, setOriginalWidth] = useState(0);
  const [originalHeight, setOriginalHeight] = useState(0);
  const [keepRatio, setKeepRatio] = useState(true);
  const [rotation, setRotation] = useState(0);
  const [flipX, setFlipX] = useState(false);
  const [flipY, setFlipY] = useState(false);
  const [format, setFormat] = useState("image/png");
  const [quality, setQuality] = useState(0.82);
  const [text, setText] = useState("");
  const [textSize, setTextSize] = useState(48);
  const [textX, setTextX] = useState(40);
  const [textY, setTextY] = useState(80);
  const [textApplied, setTextApplied] = useState(false);

  function updateEstimate(canvas = canvasRef.current, nextFormat = format, nextQuality = quality) {
    if (!canvas) return;
    try {
      const dataUrl = canvas.toDataURL(nextFormat, Number(nextQuality));
      const size = Math.round((dataUrl.length * 3) / 4);
      setEstimatedSize(size);
    } catch (_) {}
  }

  function draw(img = imageRef.current, next = {}) {
    const canvas = canvasRef.current;
    if (!canvas || !img) return;
    const w = Math.max(1, parseInt(next.width ?? width || img.naturalWidth, 10));
    const h = Math.max(1, parseInt(next.height ?? height || img.naturalHeight, 10));
    const angle = ((next.rotation ?? rotation) % 360 + 360) % 360;
    const sx = next.flipX ?? flipX;
    const sy = next.flipY ?? flipY;
    const activeText = next.textApplied ?? textApplied;
    const currentText = next.text ?? text;
    const currentTextSize = Number(next.textSize ?? textSize);
    const currentTextX = Number(next.textX ?? textX);
    const currentTextY = Number(next.textY ?? textY);
    const rotated = angle === 90 || angle === 270;
    canvas.width = rotated ? h : w;
    canvas.height = rotated ? w : h;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate((angle * Math.PI) / 180);
    ctx.scale(sx ? -1 : 1, sy ? -1 : 1);
    ctx.drawImage(img, -w / 2, -h / 2, w, h);
    ctx.restore();
    if (activeText && currentText.trim()) {
      ctx.save();
      ctx.font = `700 ${currentTextSize}px Arial, sans-serif`;
      ctx.fillStyle = "#111827";
      ctx.strokeStyle = "rgba(255,255,255,.92)";
      ctx.lineWidth = Math.max(2, Math.round(currentTextSize / 10));
      ctx.strokeText(currentText, currentTextX, currentTextY);
      ctx.fillText(currentText, currentTextX, currentTextY);
      ctx.restore();
    }
    updateEstimate(canvas);
  }

  function loadFile(e) {
    const file = e.target.files?.[0];
    if (!file || !file.type.startsWith("image/")) return;
    const url = URL.createObjectURL(file);
    setFileName(file.name);
    setFileSize(file.size);
    setImageUrl(url);
    setRotation(0); setFlipX(false); setFlipY(false); setTextApplied(false); setText("");
    const img = new Image();
    img.onload = () => {
      imageRef.current = img;
      setOriginalWidth(img.naturalWidth); setOriginalHeight(img.naturalHeight);
      setWidth(String(img.naturalWidth)); setHeight(String(img.naturalHeight));
      setTextX(Math.round(img.naturalWidth * 0.07)); setTextY(Math.round(img.naturalHeight * 0.14));
      draw(img, { width: img.naturalWidth, height: img.naturalHeight, rotation: 0, flipX: false, flipY: false, textApplied: false });
    };
    img.src = url;
  }

  function updateWidth(value) {
    setWidth(value);
    let nextHeight = height;
    if (keepRatio && originalWidth && originalHeight && Number(value) > 0) {
      nextHeight = String(Math.round((Number(value) * originalHeight) / originalWidth)); setHeight(nextHeight);
    }
    draw(imageRef.current, { width: value, height: nextHeight });
  }
  function updateHeight(value) {
    setHeight(value);
    let nextWidth = width;
    if (keepRatio && originalWidth && originalHeight && Number(value) > 0) {
      nextWidth = String(Math.round((Number(value) * originalWidth) / originalHeight)); setWidth(nextWidth);
    }
    draw(imageRef.current, { width: nextWidth, height: value });
  }
  function rotateBy(amount) { const nextRotation = rotation + amount; setRotation(nextRotation); draw(imageRef.current, { rotation: nextRotation }); }
  function toggleFlip(axis) { const nx = axis === "x" ? !flipX : flipX; const ny = axis === "y" ? !flipY : flipY; setFlipX(nx); setFlipY(ny); draw(imageRef.current, { flipX: nx, flipY: ny }); }
  function applyText() { setTextApplied(true); draw(imageRef.current, { textApplied: true }); }
  function resetImage() {
    if (!imageRef.current) return;
    setWidth(String(originalWidth)); setHeight(String(originalHeight)); setRotation(0); setFlipX(false); setFlipY(false); setTextApplied(false);
    draw(imageRef.current, { width: originalWidth, height: originalHeight, rotation: 0, flipX: false, flipY: false, textApplied: false });
  }
  function changeFormat(nextFormat) { setFormat(nextFormat); setTimeout(() => updateEstimate(canvasRef.current, nextFormat, quality), 0); }
  function changeQuality(value) { const q = Number(value); setQuality(q); setTimeout(() => updateEstimate(canvasRef.current, format, q), 0); }
  function downloadImage() {
    const canvas = canvasRef.current; if (!canvas) return;
    const extension = format === "image/jpeg" ? "jpg" : format === "image/webp" ? "webp" : "png";
    const safeName = (fileName || "edited-image").replace(/\.[^/.]+$/, "");
    const link = document.createElement("a");
    link.download = `${safeName}-edited.${extension}`;
    link.href = canvas.toDataURL(format, Number(quality));
    link.click();
  }

  return (
    <main className="container">
      <section className="hero tool-hero"><h1>{t.title}</h1><p>{t.desc}</p></section>
      <section className="card editor-card">
        <div className="editor-grid">
          <div>
            <div className="dropzone"><input ref={fileInputRef} type="file" accept="image/*" onChange={loadFile} /><p>{fileName || t.noFile}</p>{fileSize > 0 && <p className="small-note">{t.original}: {formatBytes(fileSize)}</p>}</div>
            <div className="editor-controls">
              <h2>{t.title}</h2>
              <label>{t.width}<input className="input" type="number" min="1" value={width} onChange={(e) => updateWidth(e.target.value)} /></label>
              <label>{t.height}<input className="input" type="number" min="1" value={height} onChange={(e) => updateHeight(e.target.value)} /></label>
              <label className="check-row"><input type="checkbox" checked={keepRatio} onChange={(e) => setKeepRatio(e.target.checked)} /> {t.keep}</label>
              <div className="button-row"><button className="btn light-btn" type="button" onClick={() => rotateBy(-90)} disabled={!imageUrl}>{t.rotateLeft}</button><button className="btn light-btn" type="button" onClick={() => rotateBy(90)} disabled={!imageUrl}>{t.rotateRight}</button><button className="btn light-btn" type="button" onClick={() => toggleFlip("x")} disabled={!imageUrl}>{t.flipH}</button><button className="btn light-btn" type="button" onClick={() => toggleFlip("y")} disabled={!imageUrl}>{t.flipV}</button></div>
              <hr />
              <h2>{t.textTitle}</h2>
              <label>{t.text}<input className="input" type="text" value={text} placeholder={t.textPlaceholder} onChange={(e) => { setText(e.target.value); if (textApplied) draw(imageRef.current, { text: e.target.value }); }} /></label>
              <label>{t.textSize}<input className="input" type="number" min="8" max="300" value={textSize} onChange={(e) => { setTextSize(e.target.value); if (textApplied) draw(imageRef.current, { textSize: e.target.value }); }} /></label>
              <div className="two-inputs"><label>{t.textX}<input className="input" type="number" value={textX} onChange={(e) => { setTextX(e.target.value); if (textApplied) draw(imageRef.current, { textX: e.target.value }); }} /></label><label>{t.textY}<input className="input" type="number" value={textY} onChange={(e) => { setTextY(e.target.value); if (textApplied) draw(imageRef.current, { textY: e.target.value }); }} /></label></div>
              <button className="btn light-btn" type="button" onClick={applyText} disabled={!imageUrl}>{t.applyText}</button>
              <hr />
              <h2>{t.compressTitle}</h2><p className="small-note">{t.compressDesc}</p>
              <label>{t.quality}: {Math.round(Number(quality) * 100)}%<input className="input" type="range" min="0.1" max="1" step="0.01" value={quality} onChange={(e) => changeQuality(e.target.value)} /></label>
              <h2>{t.converterTitle}</h2><p className="small-note">{t.converterDesc}</p>
              <label>{t.format}<select className="input" value={format} onChange={(e) => changeFormat(e.target.value)}><option value="image/png">PNG</option><option value="image/jpeg">JPG</option><option value="image/webp">WebP</option></select></label>
              <p className="small-note">{t.estimated}: {formatBytes(estimatedSize)}</p>
              <div className="button-row"><button className="btn light-btn" type="button" onClick={resetImage} disabled={!imageUrl}>{t.reset}</button><button className="btn" type="button" onClick={downloadImage} disabled={!imageUrl}>{t.download}</button></div>
            </div>
          </div>
          <div className="preview-box"><h2>{t.preview}</h2><canvas ref={canvasRef} className="image-canvas" /></div>
        </div>
      </section>
      <div className="note">🔒 {t.privacy}</div>
    </main>
  );
}
