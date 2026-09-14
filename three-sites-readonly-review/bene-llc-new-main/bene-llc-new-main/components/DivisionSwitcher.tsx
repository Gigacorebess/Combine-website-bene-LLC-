'use client';
import { useEffect, useRef, useState } from 'react';

const divisions = [
  { id: 'trading', name: 'Global Commodities', category: 'Trading', number: '01', text: 'Materials that move the world.', detail: 'Metals · Minerals · Energy commodities', image: '/division-assets/trading.webp', port: 3100, url: 'https://www.benellc.com/', color: '#ed583c' },
  { id: 'interiors', name: 'Calyco Interiors', category: 'Construction & Interiors', number: '02', text: 'Spaces for the way you live.', detail: 'Interior design · Visualization · Project delivery', image: '/division-assets/interiors.webp', port: 3101, url: 'https://www.calycointeriors.com/', color: '#d9b88a' },
  { id: 'energy', name: 'Gigacore Energy', category: 'Energy / Hydrogen', number: '03', text: 'A new perspective on hydrogen.', detail: 'Technology · Applications · Partnerships', image: '/division-assets/energy.jpg', port: 3102, url: 'https://www.gigacore.energy/', color: '#97caba' },
];

export default function DivisionSwitcher({ current }: { current: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [local, setLocal] = useState(false);
  const active = divisions.find(d => d.id === current) || divisions[0];
  useEffect(() => { setLocal(['localhost', '127.0.0.1'].includes(window.location.hostname)); }, []);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [open]);
  const close = () => { dialog.current?.close(); setOpen(false); trigger.current?.focus(); };
  const show = () => { dialog.current?.showModal(); setOpen(true); };
  return <>
    <style>{css}</style>
    <button ref={trigger} className="bene-switch-trigger" onClick={show} aria-haspopup="dialog" aria-expanded={open} aria-controls="bene-division-dialog">
      <span className="bene-switch-wordmark">bene<span>.</span></span>
      <span className="bene-switch-trigger-label"><small>OUR DIVISIONS</small><strong>{active.name}</strong></span>
      <span className="bene-switch-grid" aria-hidden="true">⊞</span>
    </button>
    <dialog ref={dialog} id="bene-division-dialog" className="bene-switch-dialog" aria-labelledby="bene-switch-title" onCancel={close} onClose={() => setOpen(false)} onClick={e => { if(e.target === e.currentTarget) close(); }}>
      <div className="bene-switch-panel">
        <div className="bene-switch-top">
          <span className="bene-switch-wordmark">bene<span>.</span><small>LLC</small></span>
          <span className="bene-switch-family">ONE COMPANY. MANY POSSIBILITIES.</span>
          <button className="bene-switch-close" onClick={close} aria-label="Close divisions">✕</button>
        </div>
        <div className="bene-switch-heading"><div><p>EXPLORE BENE</p><h2 id="bene-switch-title">A world of expertise.</h2></div><p>Choose your division.</p></div>
        <div className="bene-switch-cards">
          {divisions.map(d => <a key={d.id} className={'bene-switch-card' + (d.id === current ? ' is-current' : '')}
            href={d.id === current ? '#' : local ? 'http://' + window.location.hostname + ':' + d.port + '/' : d.url}
            aria-current={d.id === current ? 'page' : undefined}
            onClick={d.id === current ? e => { e.preventDefault(); close(); } : undefined}
            style={{ '--division-accent': d.color } as React.CSSProperties}>
            <div className="bene-switch-image"><img src={d.image} alt="" width="640" height="480" /><span className="bene-switch-number">{d.number}</span><span className="bene-switch-badge">{d.id === current ? 'YOU ARE HERE' : d.category}</span></div>
            <div className="bene-switch-card-body"><p>{d.category}</p><div className="bene-switch-card-title"><h3>{d.name}</h3><span aria-hidden="true">↗</span></div><p className="bene-switch-description">{d.text}</p><p className="bene-switch-detail">{d.detail}</p></div>
          </a>)}
        </div>
        <div className="bene-switch-bottom"><span>Technology, energy, materials & the built environment.</span><span>BENE LLC</span></div>
      </div>
    </dialog>
  </>;
}
const css = `
.bene-switch-trigger,.bene-switch-dialog,.bene-switch-dialog *{box-sizing:border-box;font-family:Arial,Helvetica,sans-serif}
.bene-switch-trigger{position:fixed;bottom:24px;left:50%;transform:translateX(-50%);z-index:2147483000;display:flex;align-items:center;gap:20px;padding:13px 19px;border:1px solid #ffffff30;border-radius:60px;background:#162421;color:#fff;box-shadow:0 8px 36px #0004;cursor:pointer;max-width:calc(100vw - 32px);text-align:left;transition:background .2s,box-shadow .2s}
.bene-switch-trigger:hover{background:#253d36;box-shadow:0 12px 40px #0005}
.bene-switch-wordmark{font-size:36px;font-weight:800;letter-spacing:-2px;line-height:1;white-space:nowrap;color:inherit}
.bene-switch-wordmark>span{color:#f46645}
.bene-switch-wordmark>small{font-size:12px;letter-spacing:2px;margin-left:14px;font-weight:400}
.bene-switch-trigger-label{display:flex;flex-direction:column;gap:4px;border-left:1px solid #ffffff38;padding-left:18px}
.bene-switch-trigger-label small{font-size:10px;letter-spacing:1.8px;color:#c0cec9}
.bene-switch-trigger-label strong{font-size:14px;font-weight:500;white-space:nowrap}
.bene-switch-grid{font-size:29px;font-weight:400;line-height:1;margin-left:8px;color:#f4ad93}
.bene-switch-dialog{padding:0;border:1px solid #ffffff28;border-radius:20px;background:#12241f;color:#fff;width:min(1220px,calc(100vw - 48px));max-width:none;max-height:calc(100dvh - 48px);overflow:auto;margin:auto;box-shadow:0 30px 100px #0007}
.bene-switch-dialog::backdrop{background:#061710b8;backdrop-filter:blur(12px)}
.bene-switch-dialog[open]{animation:bene-switch-in .25s ease-out}
.bene-switch-panel{padding:30px 38px 22px}
.bene-switch-top{display:flex;align-items:center;justify-content:space-between;gap:20px;padding-bottom:25px;border-bottom:1px solid #ffffff25}
.bene-switch-family{font-size:11px;letter-spacing:2px;color:#b5c6bd}
.bene-switch-close{display:grid;place-items:center;flex-shrink:0;width:42px;height:42px;border:1px solid #ffffff40;background:transparent;border-radius:50%;color:#fff;font-size:20px;cursor:pointer}
.bene-switch-close:hover{background:#ffffff18}
.bene-switch-heading{display:flex;justify-content:space-between;align-items:end;padding:32px 0 28px;gap:16px}
.bene-switch-heading p{font-size:14px;color:#c1cec7;margin:0 0 8px;line-height:1.5}
.bene-switch-heading>div>p{font-size:11px;letter-spacing:2px;color:#edac94}
.bene-switch-heading h2{color:#fff;font-size:clamp(28px,4vw,48px);font-weight:400;line-height:1.15;letter-spacing:-1.8px;margin:0}
.bene-switch-cards{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}
.bene-switch-card{display:block;min-width:0;color:#fff;text-decoration:none;border:1px solid #ffffff25;border-radius:10px;overflow:hidden;background:#ffffff05;transition:transform .2s,border-color .2s,background .2s}
.bene-switch-card:hover{transform:translateY(-4px);border-color:var(--division-accent);background:#ffffff0b}
.bene-switch-card.is-current{border-color:var(--division-accent)}
.bene-switch-image{height:205px;position:relative;overflow:hidden;background:#d9d9ce}
.bene-switch-image img{display:block;width:100%;height:100%;object-fit:cover;transition:transform .45s}
.bene-switch-card:first-child .bene-switch-image img{object-fit:contain}
.bene-switch-image:after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,#0003,transparent 50%,#0007)}
.bene-switch-card:hover img{transform:scale(1.05)}
.bene-switch-number{position:absolute;top:15px;left:17px;z-index:1;font-size:13px;color:white;background:#12241fa6;padding:6px 9px;border-radius:30px}
.bene-switch-badge{position:absolute;bottom:15px;left:17px;right:12px;z-index:1;font-size:11px;letter-spacing:1px;color:white;text-transform:uppercase}
.bene-switch-card-body{padding:22px 20px 23px}
.bene-switch-card-body>p:first-child{font-size:11px;letter-spacing:1px;text-transform:uppercase;color:var(--division-accent);margin:0 0 11px;line-height:1.5}
.bene-switch-card-title{display:flex;justify-content:space-between;align-items:center;gap:8px}
.bene-switch-card-title h3{font-size:23px;font-weight:400;letter-spacing:-.6px;line-height:1.2;color:#fff;margin:0}
.bene-switch-card-title>span{font-size:25px;color:var(--division-accent)}
.bene-switch-description{font-size:15px;line-height:1.6;color:#d7dfda;margin:14px 0 22px}
.bene-switch-detail{font-size:12px;line-height:1.7;color:#aebfb5;border-top:1px solid #ffffff20;padding-top:14px;margin:0}
.bene-switch-bottom{display:flex;justify-content:space-between;gap:16px;padding-top:23px;font-size:12px;line-height:1.6;color:#aebfb5}
.bene-switch-dialog button:focus-visible,.bene-switch-card:focus-visible,.bene-switch-trigger:focus-visible{outline:3px solid #ffb091;outline-offset:4px}
@keyframes bene-switch-in{from{opacity:0;transform:translateY(16px) scale(.985)}to{opacity:1;transform:none}}
@media(max-width:720px){.bene-switch-dialog{width:calc(100vw - 24px);max-height:calc(100dvh - 24px);border-radius:14px}.bene-switch-panel{padding:22px 18px}.bene-switch-family{display:none}.bene-switch-heading{display:block;padding:23px 0}.bene-switch-heading>p{margin:12px 0 0}.bene-switch-cards{grid-template-columns:1fr;gap:14px}.bene-switch-card{display:grid;grid-template-columns:110px minmax(0,1fr)}.bene-switch-image{height:100%;min-height:165px}.bene-switch-badge{display:none}.bene-switch-card-body{padding:17px 14px}.bene-switch-card-title h3{font-size:21px}.bene-switch-description{margin:9px 0;font-size:14px}.bene-switch-detail{font-size:12px;padding-top:8px}.bene-switch-bottom>span:last-child{display:none}.bene-switch-trigger{bottom:16px;gap:14px}.bene-switch-trigger-label{padding-left:14px}.bene-switch-heading h2{letter-spacing:-1px}}
@media(prefers-reduced-motion:reduce){.bene-switch-dialog[open]{animation:none}.bene-switch-card,.bene-switch-image img,.bene-switch-trigger{transition:none}.bene-switch-card:hover,.bene-switch-card:hover img{transform:none}}
@media(max-width:720px){.bene-switch-trigger{left:auto;right:14px;transform:none;gap:12px;padding:11px 15px}.bene-switch-trigger .bene-switch-wordmark{font-size:27px}.bene-switch-trigger-label strong{display:none}.bene-switch-trigger-label small{font-size:11px;letter-spacing:1px}.bene-switch-trigger-label{padding-left:12px}.bene-switch-grid{font-size:23px;margin-left:0}}
`;
