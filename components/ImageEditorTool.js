"use client";

import { useRef, useState } from "react";

const labels = {
  en: {
    title: "Free Online Image Editor",
    desc: "Crop, resize, rotate, flip and convert images directly in your browser. Your image is not uploaded or stored.",
    select: "Select Image",
    noFile: "No image selected",
    width: "Width",
    height: "Height",
    keep: "Keep aspect ratio",
    rotateLeft: "Rotate Left",
    rotateRight: "Rotate Right",
    flipH: "Flip Horizontal",
    flipV: "Flip Vertical",
    format: "Download Format",
    quality: "Quality",
    reset: "Reset",
    download: "Download Image",
    privacy: "Your image is edited inside your browser. We do not upload or store your files.",
    preview: "Preview"
  },
  hi: {
    title: "मुफ्त ऑनलाइन इमेज एडिटर",
    desc: "इमेज को क्रॉप, रीसाइज़, रोटेट, फ्लिप और कन्वर्ट करें। आपकी इमेज अपलोड या सेव नहीं होती।",
    select: "इमेज चुनें", noFile: "कोई इमेज चुनी नहीं गई", width: "चौड़ाई", height: "ऊंचाई", keep: "आस्पेक्ट रेशियो रखें", rotateLeft: "बाएं घुमाएं", rotateRight: "दाएं घुमाएं", flipH: "हॉरिजॉन्टल फ्लिप", flipV: "वर्टिकल फ्लिप", format: "डाउनलोड फॉर्मेट", quality: "क्वालिटी", reset: "रीसेट", download: "इमेज डाउनलोड करें", privacy: "आपकी इमेज ब्राउज़र में एडिट होती है। हम फाइल अपलोड या सेव नहीं करते।", preview: "प्रीव्यू"
  },
  ar: {
    title: "محرر صور مجاني على الإنترنت",
    desc: "قص الصور وتغيير حجمها وتدويرها وقلبها وتحويلها داخل المتصفح. لا يتم رفع صورتك أو تخزينها.",
    select: "اختر صورة", noFile: "لم يتم اختيار صورة", width: "العرض", height: "الارتفاع", keep: "الحفاظ على النسبة", rotateLeft: "تدوير لليسار", rotateRight: "تدوير لليمين", flipH: "قلب أفقي", flipV: "قلب عمودي", format: "صيغة التنزيل", quality: "الجودة", reset: "إعادة ضبط", download: "تنزيل الصورة", privacy: "يتم تحرير صورتك داخل المتصفح. نحن لا نرفع أو نخزن ملفاتك.", preview: "معاينة"
  },
  "zh-CN": {
    title: "免费在线图片编辑器",
    desc: "直接在浏览器中裁剪、调整大小、旋转、翻转和转换图片。不会上传或保存你的图片。",
    select: "选择图片", noFile: "未选择图片", width: "宽度", height: "高度", keep: "保持宽高比", rotateLeft: "向左旋转", rotateRight: "向右旋转", flipH: "水平翻转", flipV: "垂直翻转", format: "下载格式", quality: "质量", reset: "重置", download: "下载图片", privacy: "你的图片在浏览器中编辑。我们不会上传或保存文件。", preview: "预览"
  },
  es: { title: "Editor de imágenes gratis online", desc: "Recorta, redimensiona, gira, voltea y convierte imágenes en tu navegador. No subimos ni guardamos tu imagen.", select: "Seleccionar imagen", noFile: "No hay imagen seleccionada", width: "Ancho", height: "Alto", keep: "Mantener proporción", rotateLeft: "Girar izquierda", rotateRight: "Girar derecha", flipH: "Voltear horizontal", flipV: "Voltear vertical", format: "Formato", quality: "Calidad", reset: "Restablecer", download: "Descargar imagen", privacy: "Tu imagen se edita en tu navegador. No subimos ni guardamos tus archivos.", preview: "Vista previa" },
  fr: { title: "Éditeur d’image gratuit en ligne", desc: "Rognez, redimensionnez, faites pivoter, retournez et convertissez vos images dans votre navigateur.", select: "Choisir une image", noFile: "Aucune image sélectionnée", width: "Largeur", height: "Hauteur", keep: "Garder les proportions", rotateLeft: "Rotation gauche", rotateRight: "Rotation droite", flipH: "Retourner horizontalement", flipV: "Retourner verticalement", format: "Format", quality: "Qualité", reset: "Réinitialiser", download: "Télécharger l’image", privacy: "Votre image est modifiée dans votre navigateur. Nous ne stockons pas vos fichiers.", preview: "Aperçu" },
  de: { title: "Kostenloser Online-Bildeditor", desc: "Bilder direkt im Browser zuschneiden, skalieren, drehen, spiegeln und konvertieren.", select: "Bild auswählen", noFile: "Kein Bild ausgewählt", width: "Breite", height: "Höhe", keep: "Seitenverhältnis beibehalten", rotateLeft: "Links drehen", rotateRight: "Rechts drehen", flipH: "Horizontal spiegeln", flipV: "Vertikal spiegeln", format: "Format", quality: "Qualität", reset: "Zurücksetzen", download: "Bild herunterladen", privacy: "Ihr Bild wird im Browser bearbeitet. Wir laden oder speichern keine Dateien.", preview: "Vorschau" },
  pt: { title: "Editor de imagem grátis online", desc: "Corte, redimensione, gire, espelhe e converta imagens no navegador.", select: "Selecionar imagem", noFile: "Nenhuma imagem selecionada", width: "Largura", height: "Altura", keep: "Manter proporção", rotateLeft: "Girar à esquerda", rotateRight: "Girar à direita", flipH: "Virar horizontal", flipV: "Virar vertical", format: "Formato", quality: "Qualidade", reset: "Redefinir", download: "Baixar imagem", privacy: "Sua imagem é editada no navegador. Não enviamos nem armazenamos arquivos.", preview: "Prévia" }
};

function getLabels(lang) {
  return labels[lang] || labels.en;
}

export default function ImageEditorTool({ lang = "en" }) {
  const t = getLabels(lang);
  const fileInputRef = useRef(null);
  const canvasRef = useRef(null);
  const imageRef = useRef(null);
  const [fileName, setFileName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [originalWidth, setOriginalWidth] = useState(0);
  const [originalHeight, setOriginalHeight] = useState(0);
  const [keepRatio, setKeepRatio] = useState(true);
  const [rotation, setRotation] = useState(0);
  const [flipX, setFlipX] = useState(false);
  const [flipY, setFlipY] = useState(false);
  const [format, setFormat] = useState("image/png");
  const [quality, setQuality] = useState(0.92);

  function draw(img, nextWidth = width, nextHeight = height, nextRotation = rotation, nextFlipX = flipX, nextFlipY = flipY) {
    const canvas = canvasRef.current;
    if (!canvas || !img) return;

    const w = Math.max(1, parseInt(nextWidth || img.naturalWidth, 10));
    const h = Math.max(1, parseInt(nextHeight || img.naturalHeight, 10));
    const angle = ((nextRotation % 360) + 360) % 360;
    const rotated = angle === 90 || angle === 270;

    canvas.width = rotated ? h : w;
    canvas.height = rotated ? w : h;

    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate((angle * Math.PI) / 180);
    ctx.scale(nextFlipX ? -1 : 1, nextFlipY ? -1 : 1);
    ctx.drawImage(img, -w / 2, -h / 2, w, h);
    ctx.restore();
  }

  function loadFile(e) {
    const file = e.target.files?.[0];
    if (!file || !file.type.startsWith("image/")) return;
    const url = URL.createObjectURL(file);
    setFileName(file.name);
    setImageUrl(url);
    setRotation(0);
    setFlipX(false);
    setFlipY(false);

    const img = new Image();
    img.onload = () => {
      imageRef.current = img;
      setOriginalWidth(img.naturalWidth);
      setOriginalHeight(img.naturalHeight);
      setWidth(String(img.naturalWidth));
      setHeight(String(img.naturalHeight));
      draw(img, img.naturalWidth, img.naturalHeight, 0, false, false);
    };
    img.src = url;
  }

  function updateWidth(value) {
    setWidth(value);
    let nextHeight = height;
    if (keepRatio && originalWidth && originalHeight) {
      nextHeight = String(Math.round((Number(value) * originalHeight) / originalWidth));
      setHeight(nextHeight);
    }
    draw(imageRef.current, value, nextHeight);
  }

  function updateHeight(value) {
    setHeight(value);
    let nextWidth = width;
    if (keepRatio && originalWidth && originalHeight) {
      nextWidth = String(Math.round((Number(value) * originalWidth) / originalHeight));
      setWidth(nextWidth);
    }
    draw(imageRef.current, nextWidth, value);
  }

  function rotateBy(amount) {
    const next = rotation + amount;
    setRotation(next);
    draw(imageRef.current, width, height, next, flipX, flipY);
  }

  function toggleFlip(axis) {
    const nextFlipX = axis === "x" ? !flipX : flipX;
    const nextFlipY = axis === "y" ? !flipY : flipY;
    setFlipX(nextFlipX);
    setFlipY(nextFlipY);
    draw(imageRef.current, width, height, rotation, nextFlipX, nextFlipY);
  }

  function resetImage() {
    if (!imageRef.current) return;
    setWidth(String(originalWidth));
    setHeight(String(originalHeight));
    setRotation(0);
    setFlipX(false);
    setFlipY(false);
    draw(imageRef.current, originalWidth, originalHeight, 0, false, false);
  }

  function downloadImage() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const extension = format === "image/jpeg" ? "jpg" : format === "image/webp" ? "webp" : "png";
    const safeName = (fileName || "edited-image").replace(/\.[^/.]+$/, "");
    const link = document.createElement("a");
    link.download = `${safeName}-edited.${extension}`;
    link.href = canvas.toDataURL(format, Number(quality));
    link.click();
  }

  return (
    <main className="container">
      <section className="hero tool-hero">
        <h1>{t.title}</h1>
        <p>{t.desc}</p>
      </section>

      <section className="card editor-card">
        <div className="editor-grid">
          <div>
            <div className="dropzone">
              <input ref={fileInputRef} type="file" accept="image/*" onChange={loadFile} />
              <p>{fileName || t.noFile}</p>
            </div>

            <div className="editor-controls">
              <label>{t.width}<input className="input" type="number" min="1" value={width} onChange={(e) => updateWidth(e.target.value)} /></label>
              <label>{t.height}<input className="input" type="number" min="1" value={height} onChange={(e) => updateHeight(e.target.value)} /></label>
              <label className="check-row"><input type="checkbox" checked={keepRatio} onChange={(e) => setKeepRatio(e.target.checked)} /> {t.keep}</label>

              <div className="button-row">
                <button className="btn light-btn" type="button" onClick={() => rotateBy(-90)} disabled={!imageUrl}>{t.rotateLeft}</button>
                <button className="btn light-btn" type="button" onClick={() => rotateBy(90)} disabled={!imageUrl}>{t.rotateRight}</button>
                <button className="btn light-btn" type="button" onClick={() => toggleFlip("x")} disabled={!imageUrl}>{t.flipH}</button>
                <button className="btn light-btn" type="button" onClick={() => toggleFlip("y")} disabled={!imageUrl}>{t.flipV}</button>
              </div>

              <label>{t.format}
                <select className="input" value={format} onChange={(e) => setFormat(e.target.value)}>
                  <option value="image/png">PNG</option>
                  <option value="image/jpeg">JPG</option>
                  <option value="image/webp">WebP</option>
                </select>
              </label>

              <label>{t.quality}
                <input className="input" type="range" min="0.4" max="1" step="0.01" value={quality} onChange={(e) => setQuality(e.target.value)} />
              </label>

              <div className="button-row">
                <button className="btn light-btn" type="button" onClick={resetImage} disabled={!imageUrl}>{t.reset}</button>
                <button className="btn" type="button" onClick={downloadImage} disabled={!imageUrl}>{t.download}</button>
              </div>
            </div>
          </div>

          <div className="preview-box">
            <h2>{t.preview}</h2>
            <canvas ref={canvasRef} className="image-canvas" />
          </div>
        </div>
      </section>

      <div className="note">🔒 {t.privacy}</div>
    </main>
  );
}
