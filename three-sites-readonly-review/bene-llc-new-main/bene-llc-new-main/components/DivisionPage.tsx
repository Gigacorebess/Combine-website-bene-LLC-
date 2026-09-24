import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import DivisionHeroMedia from '@/components/DivisionHeroMedia';
import { divisions, enquiry, type Division, type Subdivision } from '@/lib/divisions';

// The same header navigation on every page, so it does not change as you
// move between divisions.
const siteLinks = [
  { href: '/#commodities', label: 'Commodities' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact Us' },
];

function SiteCards({ sites }: { sites: Subdivision['sites'] }) {
  if (!sites.length) return null;
  return (
    <div className="site-links">
      {sites.map(s => (
        <a key={s.url} className="site-link" href={s.url} target="_blank" rel="noreferrer">
          <span className="eyebrow">{s.note}</span>
          <strong>{s.label}</strong>
          <span className="site-url">{s.url.replace(/^https:\/\/(www\.)?/, '').replace(/\/$/, '')} ↗</span>
        </a>
      ))}
    </div>
  );
}

function Contact({ division, topic }: { division: Division; topic: string }) {
  return (
    <section className="shell contact" id="contact">
      <span className="eyebrow">Start a conversation</span>
      <div className="contact-inner">
        <div>
          <h2>Talk to {division.name}.</h2>
          <a className="mail-link" href={enquiry(division.email, topic)}>{division.email} <span>↗</span></a>
        </div>
        <div>
          <p>Tell us what you are working on, and the team will come back to you with the right next step.</p>
          <a className="cta" href={enquiry(division.email, topic)}>Send an enquiry <span>↗</span></a>
        </div>
      </div>
    </section>
  );
}

export function DivisionOverview({ division }: { division: Division }) {
  const index = divisions.indexOf(division) + 1;
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <SiteHeader division={division.slug} links={siteLinks} cta={{ href: enquiry(division.email, division.short), label: 'Get in touch' }} />
      <main id="main">
        <section className="shell division-hero">
          <div className="division-hero-grid">
            <div className="division-hero-copy">
              <div className="eyebrow"><span className="signal">●</span> Bene LLC / 0{index} / {division.short}</div>
              <h1>
                <span className="line"><span>{division.headline[0]}</span></span>
                <span className="line"><em>{division.headline[1]}</em></span>
              </h1>
              <p className="division-intro">{division.intro}</p>
            </div>
            <DivisionHeroMedia division={division} index={index} />
          </div>
          <div className="hero-footer"><span>{division.name.toUpperCase()}</span><span>{division.subs.length} {division.subs.length === 1 ? 'AREA' : 'AREAS'} OF WORK ↓</span></div>
        </section>
        <section className="dark-section">
          <div className="shell">
            <div className="section-top">
              <div><span className="eyebrow">What we do</span><h2>{division.menuText.replace(/\.$/, '')}.</h2></div>
            </div>
            <div className="sub-grid" data-count={division.subs.length}>
              {division.subs.map((s, i) => (
                <article key={s.slug} className="sub-card">
                  <div>
                    <span className="eyebrow">0{i + 1} ───── {division.short}</span>
                    <h3>{s.name}</h3>
                    <p>{s.summary}</p>
                  </div>
                  <div>
                    <ul className="sub-points">{s.points.map(p => <li key={p}>{p}</li>)}</ul>
                    <SiteCards sites={s.sites} />
                    <a className="text-link" href={s.href}>Explore {s.name} <span>→</span></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <Contact division={division} topic={division.short} />
      </main>
      <SiteFooter />
    </>
  );
}

export function SubdivisionDetail({ division, sub }: { division: Division; sub: Subdivision }) {
  const siblings = division.subs.filter(s => s.slug !== sub.slug);
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <SiteHeader division={division.slug} sub={sub.slug} links={siteLinks} cta={{ href: enquiry(division.email, sub.name), label: 'Get in touch' }} />
      <main id="main">
        <section className="shell division-hero">
          <nav className="breadcrumb eyebrow" aria-label="Breadcrumb"><a href="/">Bene LLC</a> / <a href={division.href}>{division.short}</a> / <span aria-current="page">{sub.name}</span></nav>
          <h1>{sub.name}<br /><em>by {division.name}.</em></h1>
          <p className="division-intro">{sub.summary}</p>
        </section>
        <section className="process">
          <div className="shell">
            <div className="process-grid">
              {sub.points.map((p, i) => (
                <article key={p}><span className="eyebrow">0{i + 1} ─────</span><p className="sub-point-lead">{p}</p></article>
              ))}
            </div>
            {sub.sites.length > 0 && (
              <div className="sub-sites">
                <span className="eyebrow">Visit the specialist website{sub.sites.length > 1 ? 's' : ''}</span>
                <SiteCards sites={sub.sites} />
              </div>
            )}
          </div>
        </section>
        {siblings.length > 0 && (
          <section className="shell portfolio">
            <span className="eyebrow">More from {division.name}</span>
            <div className="portfolio-list sibling-list">
              {siblings.map((s, i) => (
                <a key={s.slug} className="portfolio-row" href={s.href}><span className="eyebrow">0{i + 1}</span><h3>{s.name}</h3><p>{s.summary}</p><span className="arrow">↗</span></a>
              ))}
            </div>
          </section>
        )}
        <Contact division={division} topic={sub.name} />
      </main>
      <SiteFooter />
    </>
  );
}
