'use client';

import { useEffect, useRef, useState } from 'react';
import { divisionContent } from '@/lib/division-content';
import { divisions, findDivision } from '@/lib/divisions';
import './SiteHeader.css';

type Link = { href: string; label: string };

// Context-aware navigation, defined once and used by desktop and mobile alike.
// About and Contact stay inside whichever division the visitor is already in;
// Trading is the root site, so its pages are /about and /contact, and every
// other division has /<division>/about and /<division>/contact. The division
// comes from the URL, so there is no state to reset and nothing to flash.
export function contextLinks(division: string): Link[] {
  const d = findDivision(division);
  const base = d && divisionContent[d.slug] ? d.href : '';
  return [
    { href: '/#commodities', label: 'Commodities' },
    { href: `${base}/about`, label: 'About' },
    { href: `${base}/contact`, label: 'Contact Us' },
  ];
}

const stripLabel: Record<string, string> = {
  construction: 'Construction & Interiors',
  trading: 'Global Commodities',
};

const inlineDivisionLabels: Record<string, string[]> = {
  technology: ['TECHNOLOGY'],
  energy: ['ENERGY'],
  'critical-minerals': ['CRITICAL', 'MINERALS'],
  construction: ['CONSTRUCTION', '& INTERIORS'],
  trading: ['GLOBAL', 'COMMODITIES'],
};

export default function SiteHeader({
  division,
  sub,
  links,
  cta,
}: {
  division: string;
  sub?: string;
  /** Omit to use the division's own context-aware links. */
  links?: Link[];
  cta: Link;
}) {
  const navLinks = links ?? contextLinks(division);
  const [open, setOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        trigger.current?.focus();
      }
    };

    const onDown = (e: MouseEvent) => {
      if (!header.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    addEventListener('keydown', onKey);
    addEventListener('mousedown', onDown);

    return () => {
      removeEventListener('keydown', onKey);
      removeEventListener('mousedown', onDown);
    };
  }, [open]);

  return (
    <header
      ref={header}
      className={'nav' + (open ? ' menu-open' : '')}
    >
      <div className="shell nav-inner">
        <div className="brand-wrap">
          <a className="brand" href="/" aria-label="Bene LLC — home">
            bene<span className="brand-dot" />
          </a>

          {/* Every division, always in the order set by lib/divisions.ts, so the
              strip reads the same on every page. The current one is marked
              rather than pulled out, which used to reorder the list per page. */}
          <nav className="division-inline" aria-label="Divisions">
            {divisions.map(d => (
              <a
                key={d.slug}
                href={d.href}
                className={d.slug === division ? 'is-current' : undefined}
                aria-current={d.slug === division && !sub ? 'page' : undefined}
              >
                {(inlineDivisionLabels[d.slug] ?? [
                  (stripLabel[d.slug] ?? d.short).toUpperCase(),
                ]).map((line, index) => (
                  <span key={`${d.slug}-${index}`}>{line}</span>
                ))}
              </a>
            ))}
          </nav>
        </div>

        <nav className="navlinks" aria-label="Main navigation">
          <button
            ref={trigger}
            type="button"
            className="divisions-trigger"
            aria-expanded={open}
            aria-controls="divisions-menu"
            onClick={() => setOpen(o => !o)}
          >
            Divisions <span aria-hidden="true">{open ? '−' : '+'}</span>
          </button>

          {navLinks.map(l => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <a href={cta.href} className="cta nav-cta">
          {cta.label} <span>↗</span>
        </a>
      </div>

      <div
        id="divisions-menu"
        className="divisions-menu"
        hidden={!open}
      >
        <div className="shell">
          <div className="divisions-menu-head">
            <span className="eyebrow">
              Bene LLC / Divisions and subdivisions
            </span>

            <button
              type="button"
              className="divisions-close"
              onClick={() => {
                setOpen(false);
                trigger.current?.focus();
              }}
            >
              Close ✕
            </button>
          </div>

          <ul className="divisions-grid">
            {divisions.map((d, i) => (
              <li
                key={d.slug}
                className={d.slug === division ? 'is-current' : undefined}
              >
                <div className="division-meta">
                  <span className="eyebrow">0{i + 1}</span>
                  {d.slug === division && (
                    <span className="here-badge">You are here</span>
                  )}
                </div>

                <a
                  className="division-thumb"
                  href={d.href}
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <img
                    src={d.image.src}
                    alt=""
                    width="720"
                    height="450"
                    loading="lazy"
                    decoding="async"
                  />
                </a>

                <a
                  className="division-name"
                  href={d.href}
                  aria-current={
                    d.slug === division && !sub ? 'page' : undefined
                  }
                >
                  {d.name} <span aria-hidden="true">↗</span>
                </a>

                <p>{d.menuText}</p>

                <ul className="division-subs">
                  {d.subs.map(s => (
                    <li key={s.slug}>
                      <a
                        href={s.href}
                        aria-current={
                          d.slug === division && s.slug === sub
                            ? 'page'
                            : undefined
                        }
                      >
                        {s.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          <a href={cta.href} className="cta divisions-menu-cta">
            {cta.label} <span>↗</span>
          </a>
        </div>
      </div>

      {open && (
        <div
          className="menu-scrim"
          aria-hidden="true"
          onClick={() => setOpen(false)}
        />
      )}
    </header>
  );
}
