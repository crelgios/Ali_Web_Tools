"use client";
import { useEffect, useState } from "react";
import { getImageToolText } from "./ImageToolLabels";

function fmt(n){ if(!n) return ""; if(n<1024) return n+" B"; if(n<1048576) return (n/1024).toFixed(1)+" KB"; return (n/1048576).toFixed(2)+" MB"; }

export default function CompressImageTool({ lang="en" }){
  const t=getImageToolText(lang);
  const [file,setFile]=useState(null); const [src,setSrc]=useState(""); const [quality,setQuality]=useState(0.7); const [rotation,setRotation]=useState(0); const [newSize,setNewSize]=useState(""); const [actual,setActual]=useState(""); const [working,setWorking]=useState(false);

  function load(e){ const f=e.target.files?.[0]; if(!f) return; setFile(f); setSrc(URL.createObjectURL(f)); setNewSize(""); setActual(""); setRotation(0); }

  function makeBlob(cb){
    if(!file||!src) return;
    const im=new Image();
    im.onload=()=>{
      const angle=((rotation%360)+360)%360; const swap=angle===90||angle===270;
      const c=document.createElement("canvas"); c.width=swap?im.naturalHeight:im.naturalWidth; c.height=swap?im.naturalWidth:im.naturalHeight;
      const ctx=c.getContext("2d"); ctx.translate(c.width/2,c.height/2); ctx.rotate(angle*Math.PI/180); ctx.drawImage(im,-im.naturalWidth/2,-im.naturalHeight/2);
      c.toBlob(blob=>cb(blob),"image/jpeg",Number(quality));
    };
    im.src=src;
  }

  useEffect(()=>{ if(!file||!src) return; let cancelled=false; setWorking(true); const timer=setTimeout(()=>{ makeBlob(blob=>{ if(cancelled) return; setNewSize(blob?fmt(blob.size):""); setWorking(false); }); },250); return ()=>{cancelled=true; clearTimeout(timer);}; },[file,src,quality,rotation]);

  function download(){ if(!file) return; setWorking(true); makeBlob(blob=>{ setWorking(false); if(!blob) return; setActual(fmt(blob.size)); const a=document.createElement("a"); a.download="compressed-rotated-image.jpg"; a.href=URL.createObjectURL(blob); a.click(); }); }

  return <main className="container"><section className="hero tool-hero"><h1>{t.compressTitle}</h1><p>{t.compressDesc}</p></section><section className="card tool-page-card"><div className="dropzone"><input type="file" accept="image/*" onChange={load}/><p>{file?.name||t.noImage}</p>{file&&<p className="file-info">{t.originalSize}: {fmt(file.size)}</p>}{newSize&&<p className="file-info">{t.newSize}: {newSize}</p>}{actual&&<p className="file-info">{t.actualNewSize}: {actual}</p>}</div>{src&&<div className="editor-grid"><div className="tool-form"><label>{t.quality}: {Math.round(quality*100)}%<input type="range" min="0.1" max="1" step="0.05" value={quality} onChange={e=>{setQuality(Number(e.target.value)); setActual("");}}/></label><p className="file-info">{t.rotation}: {rotation}°</p><div className="tool-actions"><button className="btn secondary" onClick={()=>{setRotation(r=>(r+270)%360); setActual("");}}>{t.rotateLeft}</button><button className="btn secondary" onClick={()=>{setRotation(r=>(r+90)%360); setActual("");}}>{t.rotateRight}</button></div>{working&&<p className="file-info">...</p>}<button className="btn" onClick={download}>{t.downloadCompressed}</button></div><div className="preview-box"><h2>{t.preview}</h2><img className="image-preview" src={src} alt="Preview" style={{transform:`rotate(${rotation}deg)`}}/></div></div>}</section><div className="note">🔒 {t.privacy}</div></main>;
}
