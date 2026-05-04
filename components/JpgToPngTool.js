"use client";
import { useState } from "react";
import { getImageToolText } from "./ImageToolLabels";
export default function JpgToPngTool({ lang="en" }){
 const t=getImageToolText(lang); const [src,setSrc]=useState(""); const [file,setFile]=useState(null);
 function load(e){const f=e.target.files?.[0]; if(!f)return; setFile(f); setSrc(URL.createObjectURL(f));}
 function convert(){ if(!src)return; const im=new Image(); im.onload=()=>{const c=document.createElement('canvas'); c.width=im.naturalWidth; c.height=im.naturalHeight; c.getContext('2d').drawImage(im,0,0); const a=document.createElement('a'); a.download='converted-image.png'; a.href=c.toDataURL('image/png'); a.click();}; im.src=src; }
 return <main className="container"><section className="hero tool-hero"><h1>{t.convertTitle}</h1><p>{t.convertDesc}</p></section><section className="card tool-page-card"><div className="dropzone"><input type="file" accept="image/jpeg,image/jpg" onChange={load}/><p>{file?.name||t.noImage}</p></div>{src&&<div className="editor-grid"><div className="tool-form"><button className="btn" onClick={convert}>{t.downloadPng}</button></div><div className="preview-box"><h2>{t.preview}</h2><img className="image-preview" src={src} alt="Preview"/></div></div>}</section><div className="note">🔒 {t.privacy}</div></main>;
}
