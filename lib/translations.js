export const languages = ["en", "hi", "es"];

export const dict = {
  en: {
    logo: "PDF Tools",
    jpg: "JPG to PDF",
    png: "PNG to PDF",
    merge: "Merge PDF",
    useTool: "Use Tool",
    footer: "Files are processed in your browser. We do not store your files.",
    homeTitle: "Free Online PDF Tools",
    homeDesc: "Convert images to PDF and merge PDF files fast, free and securely.",
    homeNote: "Your files are processed inside your browser and are not uploaded to our server.",
    jpgDesc: "Convert JPG images into PDF files instantly.",
    pngDesc: "Convert PNG images into PDF files online.",
    mergeDesc: "Combine multiple PDF files into one PDF.",
    selectImages: "Select your images and convert them into a PDF instantly.",
    noFiles: "No files selected",
    convertBtn: "Convert to PDF",
    privacyImage: "Your files are processed in your browser. We do not upload or store your files.",
    mergeSub: "Combine multiple PDF files into one PDF.",
    mergeBtn: "Merge PDF",
    privacyPdf: "Your PDF files are processed in your browser and are not stored."
  },
  hi: {
    logo: "PDF टूल्स",
    jpg: "JPG से PDF",
    png: "PNG से PDF",
    merge: "PDF मिलाएं",
    useTool: "टूल इस्तेमाल करें",
    footer: "फाइलें आपके ब्राउज़र में प्रोसेस होती हैं। हम आपकी फाइलें सेव नहीं करते।",
    homeTitle: "मुफ्त ऑनलाइन PDF टूल्स",
    homeDesc: "इमेज को PDF में बदलें और PDF फाइलों को तेज, मुफ्त और सुरक्षित तरीके से मिलाएं।",
    homeNote: "आपकी फाइलें आपके ब्राउज़र में ही प्रोसेस होती हैं और हमारे सर्वर पर अपलोड नहीं होतीं।",
    jpgDesc: "JPG इमेज को तुरंत PDF फाइल में बदलें।",
    pngDesc: "PNG इमेज को ऑनलाइन PDF फाइल में बदलें।",
    mergeDesc: "कई PDF फाइलों को एक PDF में मिलाएं।",
    selectImages: "अपनी इमेज चुनें और तुरंत PDF बनाएं।",
    noFiles: "कोई फाइल चुनी नहीं गई",
    convertBtn: "PDF बनाएं",
    privacyImage: "आपकी फाइलें आपके ब्राउज़र में ही प्रोसेस होती हैं। हम आपकी फाइलें अपलोड या सेव नहीं करते।",
    mergeSub: "कई PDF फाइलों को एक PDF में मिलाएं।",
    mergeBtn: "PDF मिलाएं",
    privacyPdf: "आपकी PDF फाइलें आपके ब्राउज़र में ही प्रोसेस होती हैं और सेव नहीं की जातीं।"
  },
  es: {
    logo: "Herramientas PDF",
    jpg: "JPG a PDF",
    png: "PNG a PDF",
    merge: "Unir PDF",
    useTool: "Usar herramienta",
    footer: "Los archivos se procesan en tu navegador. No guardamos tus archivos.",
    homeTitle: "Herramientas PDF Gratis Online",
    homeDesc: "Convierte imágenes a PDF y une archivos PDF rápido, gratis y de forma segura.",
    homeNote: "Tus archivos se procesan dentro de tu navegador y no se suben a nuestro servidor.",
    jpgDesc: "Convierte imágenes JPG en archivos PDF al instante.",
    pngDesc: "Convierte imágenes PNG en archivos PDF online.",
    mergeDesc: "Combina varios archivos PDF en un solo PDF.",
    selectImages: "Selecciona tus imágenes y conviértelas en PDF al instante.",
    noFiles: "No hay archivos seleccionados",
    convertBtn: "Convertir a PDF",
    privacyImage: "Tus archivos se procesan en tu navegador. No subimos ni guardamos tus archivos.",
    mergeSub: "Combina varios archivos PDF en un solo PDF.",
    mergeBtn: "Unir PDF",
    privacyPdf: "Tus archivos PDF se procesan en tu navegador y no se guardan."
  }
};

export function getText(lang) {
  return dict[lang] || dict.en;
}
