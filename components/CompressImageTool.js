
"use client";
import { useState } from "react";
import { getImageToolText } from "./ImageToolLabels";
function fmt(n){if(!n)return ''; if(n<1024)return n+' B'; if(n<1048576)return (n/1024).toFixed(1)+' KB'; return (n/1048576).toFixed(2)+' MB'}
export default function CompressImageTool({ lang="en" }){
 const t=getImageToolText(lang); const [file,setFile]=useState(null); const [src,setSrc]=useState(''); const [quality,setQuality]=useState(.7); const [newSize,setNewSize]=useState('');
 function load(e){const f=e.target.files?.[0]; if(!f)return; setFile(f); setSrc(URL.createObjectURL(f)); setNewSize('');}
 function download(){if(!file)return; const im=new Image(); im.onload=()=>{const c=document.createElement('canvas'); c.width=im.naturalWidth;c.height=im.naturalHeight; c.getContext('2d').drawImage(im,0,0); c.toBlob(blob=>{if(!blob)return; setNewSize(fmt(blob.size)); const a=document.createElement('a'); a.download='compressed-image.jpg'; a.href=URL.createObjectURL(blob); a.click();},'image/jpeg',Number(quality));}; im.src=src;}
 return <main className="container"><section className="hero tool-hero"><h1>{t.compressTitle}</h1><p>{t.compressDesc}</p></section><section className="card tool-page-card"><div className="dropzone"><input type="file" accept="image/*" onChange={load}/><p>{file?.name||t.noImage}</p>{file&&<p className="file-info">{t.originalSize}: {fmt(file.size)}</p>}{newSize&&<p className="file-info">{t.newSize}: {newSize}</p>}</div>{src&&<div className="editor-grid"><div className="tool-form"><label>{t.quality}: {Math.round(quality*100)}%<input type="range" min="0.1" max="1" step="0.05" value={quality} onChange={e=>setQuality(e.target.value)}/></label><button className="btn" onClick={download}>{t.downloadCompressed}</button></div><div className="preview-box"><h2>{t.preview}</h2><img className="image-preview" src={src} alt="Compress preview"/></div></div>}</section><div className="note">🔒 {t.privacy}</div></main>;
}
