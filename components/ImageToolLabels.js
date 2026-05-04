
export const imageToolText = {
  en: {
    imageToolsTitle: "Image Tools", imageToolsDesc: "Crop, resize, compress and convert images privately in your browser.", open: "Open Tool",
    cropTitle: "Crop Image", cropDesc: "Select a rectangular area and crop your image without upload.", resizeTitle: "Resize Image", resizeDesc: "Set exact width and height using input boxes.", compressTitle: "Compress Image", compressDesc: "Reduce image file size while keeping good quality.", convertTitle: "JPG to PNG Converter", convertDesc: "Convert JPG images to PNG directly in your browser.",
    choose: "Choose Image", noImage: "No image selected", download: "Download", reset: "Reset", preview: "Preview", privacy: "Your image is processed locally in your browser. We do not upload or store your files.",
    cropHelp: "Drag on the image to draw a rectangular crop area. Then click Download Cropped Image.", downloadCrop: "Download Cropped Image", width: "Width", height: "Height", keepRatio: "Keep aspect ratio", downloadResize: "Download Resized Image", quality: "Quality", downloadCompressed: "Download Compressed Image", originalSize: "Original size", newSize: "New size", convert: "Convert to PNG", downloadPng: "Download PNG"
  },
  hi: {
    imageToolsTitle: "इमेज टूल्स", imageToolsDesc: "इमेज को क्रॉप, रीसाइज़, कंप्रेस और कन्वर्ट करें — सब कुछ ब्राउज़र में।", open: "टूल खोलें",
    cropTitle: "इमेज क्रॉप करें", cropDesc: "अपनी इमेज में rectangular area select करके crop करें।", resizeTitle: "इमेज रीसाइज़", resizeDesc: "Width और height input box से exact size सेट करें।", compressTitle: "इमेज कंप्रेस", compressDesc: "इमेज का file size कम करें।", convertTitle: "JPG से PNG कन्वर्टर", convertDesc: "JPG इमेज को PNG में बदलें।",
    choose: "इमेज चुनें", noImage: "कोई इमेज चुनी नहीं गई", download: "डाउनलोड", reset: "रीसेट", preview: "प्रीव्यू", privacy: "आपकी इमेज आपके ब्राउज़र में ही प्रोसेस होती है। हम फाइल अपलोड या सेव नहीं करते।",
    cropHelp: "इमेज पर drag करके rectangular crop area बनाएं, फिर Download Cropped Image पर क्लिक करें।", downloadCrop: "क्रॉप इमेज डाउनलोड करें", width: "चौड़ाई", height: "ऊंचाई", keepRatio: "Aspect ratio रखें", downloadResize: "रीसाइज़ इमेज डाउनलोड करें", quality: "क्वालिटी", downloadCompressed: "कंप्रेस इमेज डाउनलोड करें", originalSize: "Original size", newSize: "New size", convert: "PNG में बदलें", downloadPng: "PNG डाउनलोड करें"
  },
  ar: {
    imageToolsTitle: "أدوات الصور", imageToolsDesc: "قص الصور وتغيير حجمها وضغطها وتحويلها داخل المتصفح.", open: "افتح الأداة",
    cropTitle: "قص الصورة", cropDesc: "حدد منطقة مستطيلة واقص الصورة بدون رفعها.", resizeTitle: "تغيير حجم الصورة", resizeDesc: "حدد العرض والارتفاع بدقة.", compressTitle: "ضغط الصورة", compressDesc: "قلل حجم ملف الصورة مع جودة جيدة.", convertTitle: "تحويل JPG إلى PNG", convertDesc: "حوّل صور JPG إلى PNG داخل المتصفح.",
    choose: "اختر صورة", noImage: "لم يتم اختيار صورة", download: "تنزيل", reset: "إعادة ضبط", preview: "معاينة", privacy: "تتم معالجة صورتك محلياً داخل المتصفح. لا نرفع أو نخزن ملفاتك.",
    cropHelp: "اسحب على الصورة لرسم منطقة قص مستطيلة، ثم اضغط تنزيل الصورة المقصوصة.", downloadCrop: "تنزيل الصورة المقصوصة", width: "العرض", height: "الارتفاع", keepRatio: "الحفاظ على النسبة", downloadResize: "تنزيل الصورة بعد تغيير الحجم", quality: "الجودة", downloadCompressed: "تنزيل الصورة المضغوطة", originalSize: "الحجم الأصلي", newSize: "الحجم الجديد", convert: "تحويل إلى PNG", downloadPng: "تنزيل PNG"
  },
  "zh-CN": {
    imageToolsTitle: "图片工具", imageToolsDesc: "在浏览器中私密裁剪、调整、压缩和转换图片。", open: "打开工具",
    cropTitle: "裁剪图片", cropDesc: "选择矩形区域并在浏览器中裁剪图片。", resizeTitle: "调整图片大小", resizeDesc: "使用宽度和高度输入框设置准确尺寸。", compressTitle: "压缩图片", compressDesc: "减小图片文件大小并保持较好质量。", convertTitle: "JPG 转 PNG", convertDesc: "直接在浏览器中将 JPG 转为 PNG。",
    choose: "选择图片", noImage: "未选择图片", download: "下载", reset: "重置", preview: "预览", privacy: "图片只在你的浏览器中本地处理。我们不会上传或存储文件。",
    cropHelp: "在图片上拖动绘制矩形裁剪区域，然后点击下载。", downloadCrop: "下载裁剪图片", width: "宽度", height: "高度", keepRatio: "保持比例", downloadResize: "下载调整后的图片", quality: "质量", downloadCompressed: "下载压缩图片", originalSize: "原始大小", newSize: "新大小", convert: "转换为 PNG", downloadPng: "下载 PNG"
  }
};
export function getImageToolText(lang){ return imageToolText[lang] || imageToolText.en; }
