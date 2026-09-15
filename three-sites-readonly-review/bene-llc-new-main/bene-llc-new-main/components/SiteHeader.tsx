'use client';
import { useEffect, useRef, useState } from 'react';
import { descriptorFor, divisions } from '@/lib/divisions';

type Link = { href: string; label: string };

const stripLabel: Record<string, string> = { construction: 'Construction & Interiors', trading: 'Global Commodities' };

export default function SiteHeader({ division, sub, links, cta }: { division: string; sub?: string; links: Link[]; cta: Link }) {
  const [open, setOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const lines = descriptorFor(division, sub);

  // Hover strip under the logo descriptor for switching divisions.
  const [strip, setStrip] = useState(false);
  const stripTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const touchTap = useRef(false);
  const keepStrip = () => clearTimeout(stripTimer.current);
  const showStrip = () => { keepStrip(); setStrip(true); };
  const hideStrip = () => { keepStrip(); stripTimer.current = setTimeout(() => setStrip(false), 220); };

  useEffect(() => {
    if (!strip) return;
    const onDown = (e: PointerEvent) => { if (!(e.target as Element).closest?.('.brand-wrap')) setStrip(false); };
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setStrip(false); };
    addEventListener('pointerdown', onDown);
    addEventListener('keydown', onKey);
    return () => { removeEventListener('pointerdown', onDown); removeEventListener('keydown', onKey); };
  }, [strip]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { setOpen(false); trigger.current?.focus(); } };
    const onDown = (e: MouseEvent) => { if (!header.current?.contains(e.target as Node)) setOpen(false); };
    addEventListener('keydown', onKey);
    addEventListener('mousedown', onDown);
    return () => { removeEventListener('keydown', onKey); removeEventListener('mousedown', onDown); };
  }, [open]);

  return (
    <header ref={header} className={'nav' + (open ? ' menu-open' : '')}>
      <div className="shell nav-inner">
        <div className="brand-wrap" onPointerLeave={e => { if (e.pointerType === 'mouse') hideStrip(); }} onPointerEnter={keepStrip}>
          <a className="brand" href="/" aria-label={'Bene LLC — ' + lines.join(' ').toLowerCase()}>
            bene<span className="brand-dot" />
            <small
              className="brand-descriptor"
              onPointerEnter={e => { if (e.pointerType === 'mouse') showStrip(); }}
              onPointerDown={e => { touchTap.current = e.pointerType !== 'mouse'; }}
              onClick={e => { if (touchTap.current && !strip) { e.preventDefault(); showStrip(); } }}
            >
              {lines.map(l => <span key={l}>{l}</span>)}
            </small>
          </a>
          <nav className={'division-strip' + (strip ? ' is-open' : '')} aria-label="Switch division" aria-hidden={!strip}>
            {divisions.map(d => (
              <a key={d.slug} href={d.href} tabIndex={strip ? undefined : -1} className={d.slug === division ? 'is-current' : undefined} aria-current={d.slug === division ? 'true' : undefined}>
                {stripLabel[d.slug] ?? d.short}
              </a>
            ))}
          </nav>
        </div>
        <nav className="navlinks" aria-label="Main navigation">
          <button ref={trigger} type="button" className="divisions-trigger" aria-expanded={open} aria-controls="divisions-menu" onClick={() => setOpen(o => !o)}>
            Divisions <span aria-hidden="true">{open ? '−' : '+'}</span>
          </button>
          {links.map(l => <a key={l.href} href={l.href}>{l.label}</a>)}
        </nav>
        <a href={cta.href} className="cta nav-cta">{cta.label} <span>↗</span></a>
      </div>
      <div id="divisions-menu" className="divisions-menu" hidden={!open}>
        <div className="shell">
          <div className="divisions-menu-head">
            <span className="eyebrow">Bene LLC / Divisions and subdivisions</span>
            <button type="button" className="divisions-close" onClick={() => { setOpen(false); trigger.current?.focus(); }}>Close ✕</button>
          </div>
          <ul className="divisions-grid">
            {divisions.map((d, i) => (
              <li key={d.slug} className={d.slug === division ? 'is-current' : undefined}>
                <div className="division-meta">
                  <span className="eyebrow">0{i + 1}</span>
                  {d.slug === division && <span className="here-badge">You are here</span>}
                </div>
                <a className="division-thumb" href={d.href} tabIndex={-1} aria-hidden="true">
                  <img src={d.image.src} alt="" width="720" height="450" loading="lazy" decoding="async" />
                </a>
                <a className="division-name" href={d.href} aria-current={d.slug === division && !sub ? 'page' : undefined}>
                  {d.name} <span aria-hidden="true">↗</span>
                </a>
                <p>{d.menuText}</p>
                <ul className="division-subs">
                  {d.subs.map(s => (
                    <li key={s.slug}>
                      <a href={s.href} aria-current={d.slug === division && s.slug === sub ? 'page' : undefined}>{s.name}</a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <a href={cta.href} className="cta divisions-menu-cta">{cta.label} <span>↗</span></a>
        </div>
      </div>
      {open && <div className="menu-scrim" aria-hidden="true" onClick={() => setOpen(false)} />}
    </header>
  );
}
