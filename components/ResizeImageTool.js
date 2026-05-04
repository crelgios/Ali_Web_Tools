
"use client";
import { useState } from "react";
import { getImageToolText } from "./ImageToolLabels";
export default function ResizeImageTool({ lang="en" }){
 const t=getImageToolText(lang); const [src,setSrc]=useState(''); const [name,setName]=useState(''); const [w,setW]=useState(''); const [h,setH]=useState(''); const [ratio,setRatio]=useState(1); const [keep,setKeep]=useState(true);
 function load(e){const f=e.target.files?.[0]; if(!f)return; const url=URL.createObjectURL(f); setSrc(url); setName(f.name); const im=new Image(); im.onload=()=>{setW(im.naturalWidth);setH(im.naturalHeight);setRatio(im.naturalWidth/im.naturalHeight)}; im.src=url;}
 function setWidth(v){setW(v); if(keep&&ratio&&v) setH(Math.round(Number(v)/ratio));}
 function setHeight(v){setH(v); if(keep&&ratio&&v) setW(Math.round(Number(v)*ratio));}
 function download(){const im=new Image(); im.onload=()=>{const cw=Math.max(1,parseInt(w||im.naturalWidth,10)); const ch=Math.max(1,parseInt(h||im.naturalHeight,10)); const c=document.createElement('canvas'); c.width=cw;c.height=ch; c.getContext('2d').drawImage(im,0,0,cw,ch); const a=document.createElement('a'); a.download='resized-image.png'; a.href=c.toDataURL('image/png'); a.click();}; im.src=src;}
 return <main className="container"><section className="hero tool-hero"><h1>{t.resizeTitle}</h1><p>{t.resizeDesc}</p></section><section className="card tool-page-card"><div className="dropzone"><input type="file" accept="image/*" onChange={load}/><p>{name||t.noImage}</p></div>{src&&<div className="editor-grid"><div className="tool-form"><label>{t.width}<input className="input" type="number" min="1" value={w} onChange={e=>setWidth(e.target.value)}/></label><label>{t.height}<input className="input" type="number" min="1" value={h} onChange={e=>setHeight(e.target.value)}/></label><label className="check-row"><input type="checkbox" checked={keep} onChange={e=>setKeep(e.target.checked)}/> {t.keepRatio}</label><button className="btn" onClick={download}>{t.downloadResize}</button></div><div className="preview-box"><h2>{t.preview}</h2><img className="image-preview" src={src} alt="Resize preview"/></div></div>}</section><div className="note">🔒 {t.privacy}</div></main>;
}
