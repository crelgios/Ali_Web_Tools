"use client";
import { useRef, useState } from "react";
import { getImageToolText } from "./ImageToolLabels";

export default function CropImageTool({ lang = "en" }) {
  const t = getImageToolText(lang);
  const imgRef = useRef(null);
  const [src, setSrc] = useState("");
  const [fileName, setFileName] = useState("");
  const [dragging, setDragging] = useState(false);
  const [start, setStart] = useState(null);
  const [rect, setRect] = useState(null);

  function loadImage(e){
    const file=e.target.files?.[0];
    if(!file) return;
    setSrc(URL.createObjectURL(file));
    setFileName(file.name);
    setRect(null);
  }
  function point(e){
    const box=imgRef.current.getBoundingClientRect();
    const clientX=e.touches?.[0]?.clientX ?? e.clientX;
    const clientY=e.touches?.[0]?.clientY ?? e.clientY;
    return {x:Math.max(0,Math.min(clientX-box.left,box.width)), y:Math.max(0,Math.min(clientY-box.top,box.height)), box};
  }
  function down(e){ if(!src||!imgRef.current) return; e.preventDefault(); const p=point(e); setDragging(true); setStart(p); setRect({x:p.x,y:p.y,w:1,h:1}); }
  function move(e){ if(!dragging||!start||!imgRef.current) return; e.preventDefault(); const p=point(e); setRect({x:Math.min(start.x,p.x), y:Math.min(start.y,p.y), w:Math.abs(p.x-start.x), h:Math.abs(p.y-start.y)}); }
  function up(){ setDragging(false); }
  async function download(){
    const img=imgRef.current; if(!img||!rect||rect.w<5||rect.h<5) return;
    const scaleX=img.naturalWidth/img.getBoundingClientRect().width;
    const scaleY=img.naturalHeight/img.getBoundingClientRect().height;
    const sx=Math.round(rect.x*scaleX), sy=Math.round(rect.y*scaleY), sw=Math.round(rect.w*scaleX), sh=Math.round(rect.h*scaleY);
    const canvas=document.createElement('canvas'); canvas.width=sw; canvas.height=sh;
    const ctx=canvas.getContext('2d'); ctx.drawImage(img,sx,sy,sw,sh,0,0,sw,sh);
    const a=document.createElement('a'); a.download='cropped-image.png'; a.href=canvas.toDataURL('image/png'); a.click();
  }
  const selectedText = rect ? `${Math.round(rect.w)} × ${Math.round(rect.h)} px` : '';
  return <main className="container"><section className="hero tool-hero"><h1>{t.cropTitle}</h1><p>{t.cropDesc}</p></section><section className="card tool-page-card"><div className="dropzone"><input type="file" accept="image/*" onChange={loadImage}/><p>{fileName || t.noImage}</p></div><p className="small-note"><b>{t.cropHelp}</b><br/>{t.dragTip}</p>{src && <><div className="preview-box"><div className="crop-stage" onMouseDown={down} onMouseMove={move} onMouseUp={up} onMouseLeave={up} onTouchStart={down} onTouchMove={move} onTouchEnd={up}><img ref={imgRef} src={src} alt="Crop preview" draggable="false" />{!rect && <div className="crop-hint">{t.cropHelp}</div>}{rect && <div className="crop-rect" style={{left:rect.x,top:rect.y,width:rect.w,height:rect.h}}/>}</div></div>{rect&&<p className="file-info">{t.selectArea}: {selectedText}</p>}</>}<div className="tool-actions"><button className="btn light-btn" onClick={()=>setRect(null)} disabled={!src}>{t.reset}</button><button className="btn" onClick={download} disabled={!src||!rect||rect.w<5||rect.h<5}>{t.downloadCrop}</button></div></section><div className="note">🔒 {t.privacy}</div></main>;
}
