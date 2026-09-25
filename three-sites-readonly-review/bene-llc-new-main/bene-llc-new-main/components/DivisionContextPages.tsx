// Shared About and Contact templates for every division, so the visitor stays
// inside the division they came from. The division comes from the URL, which
// means the header, the highlighted division and the copy are all correct in
// the first render — no client-side context and no flash of the wrong division.
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import EnquiryForm from '@/components/EnquiryForm';
import type { Division } from '@/lib/divisions';
import type { DivisionAbout, DivisionContact } from '@/lib/division-content';
import '../app/pages.css';

const HQ = { address: '762 Green St, Iselin, NJ 08830, USA', phone: '+1 646 367 3725', tel: '+16463673725' };

export function DivisionAboutPage({ division, about }: { division: Division; about: DivisionAbout }) {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <SiteHeader division={division.slug} cta={{ href: `${division.href}/contact`, label: 'Get in touch' }} />

      <main id="main">
        <section className="page-hero">
          <div className="shell">
            <div className="eyebrow">
              <span className="signal">●</span> Bene LLC / {division.short} / About us
            </div>
            <h1>{about.headline[0]}<br /><em>{about.headline[1]}</em></h1>
            <div className="page-hero-foot">
              <span>{division.name.toUpperCase()}</span>
              <span>WHO WE ARE ↓</span>
            </div>
          </div>
        </section>

        <section className="shell lede">
          <p>{about.lede}</p>
          <p className="fine-print">{about.fine}</p>
        </section>

        <section className="dark-section" id="what-we-do">
          <div className="shell">
            <div className="section-top">
              <div>
                <span className="eyebrow">01 / What we do</span>
                <h2>{division.headline[0]}<br />{division.headline[1]}</h2>
              </div>
              <p>{division.menuText}</p>
            </div>

            <div className="split">
              {division.subs.map(sub => (
                <article key={sub.slug}>
                  <span className="eyebrow">{sub.name}</span>
                  <h2>{sub.name}</h2>
                  <p>{sub.summary}</p>
                  {sub.points.length > 0 && (
                    <ul className="checklist">
                      {sub.points.map(p => <li key={p}>{p}</li>)}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="process" id="approach">
          <div className="shell">
            <div className="section-top">
              <div>
                <span className="eyebrow">02 / How we work</span>
                <h2>From the brief.<br />To the outcome.</h2>
              </div>
              <p>{about.fine}</p>
            </div>

            <div className="process-grid">
              {about.approach.map(([n, title, text]) => (
                <article key={n}>
                  <span className="eyebrow">{n} ───── ↗</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>

            <div className="approach-note">
              <span className="eyebrow">Worth knowing</span>
              <p>{about.closing}</p>
            </div>
          </div>
        </section>

        <section className="shell contact">
          <span className="eyebrow">03 / Start a conversation</span>
          <div className="contact-inner">
            <div>
              <h2>Talk to<br />{division.name}.</h2>
              <a className="mail-link" href={`mailto:${division.email}`}>{division.email} <span>↗</span></a>
            </div>
            <div>
              <p>Tell us what you are working on and the team will come back to you with the right next step.</p>
              <a className="cta" href={`${division.href}/contact`}>Contact us <span>↗</span></a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

export function DivisionContactPage({ division, contact }: { division: Division; contact: DivisionContact }) {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <SiteHeader division={division.slug} cta={{ href: `mailto:${division.email}`, label: 'Get in touch' }} />

      <main id="main">
        <section className="page-hero">
          <div className="shell">
            <div className="eyebrow">
              <span className="signal">●</span> Bene LLC / {division.short} / Contact us
            </div>
            <h1>{contact.headline[0]}<br /><em>{contact.headline[1]}</em></h1>
            <div className="page-hero-foot">
              <span>{division.name.toUpperCase()}</span>
              <span>SEND AN ENQUIRY ↓</span>
            </div>
          </div>
        </section>

        <section className="shell lede">
          <p>{contact.lede}</p>
          <p className="fine-print">{contact.fine}</p>
        </section>

        <section className="dark-section" id="enquiry">
          <div className="shell">
            <div className="section-top">
              <div>
                <span className="eyebrow">01 / Send an enquiry</span>
                <h2>Tell us about<br />your requirement.</h2>
              </div>
              <p>
                Complete the form and your own mail client opens with the enquiry written out, ready
                to send to the {division.short} team.
              </p>
            </div>

            <EnquiryForm
              email={division.email}
              topic={division.short}
              categoryLabel={contact.categoryLabel}
              categories={contact.categories}
              logistics={false}
              detailsLabel="Tell us more"
              detailsPlaceholder="Scope, timeline, site or system details, and anything else we should know."
              note={`Enquiries are handled by the ${division.name} team. Scope, specifications and commercial terms are agreed per engagement — nothing on this site is an offer or a quotation.`}
            />
          </div>
        </section>

        <section className="shell portfolio" id="details">
          <div className="section-top">
            <div>
              <span className="eyebrow">02 / Reach us directly</span>
              <h2>Prefer to email<br />or call?</h2>
            </div>
            <p>Direct lines to the team, for enquiries that do not fit a form.</p>
          </div>

          <div className="info-grid">
            <article>
              <span className="eyebrow">{division.short} enquiries</span>
              <h3>Email us</h3>
              <a href={`mailto:${division.email}`}>{division.email} ↗</a>
              <p className="fine">For partnerships, projects and technical discussions.</p>
            </article>

            <article>
              <span className="eyebrow">Other divisions</span>
              <h3>Bene LLC</h3>
              <a href="/contact">Global enquiries ↗</a>
              <p className="fine">Commodity trading and anything outside {division.short}.</p>
            </article>

            <article>
              <span className="eyebrow">Head office</span>
              <h3>Bene LLC</h3>
              <p>{HQ.address}</p>
              <a href={`tel:${HQ.tel}`}>{HQ.phone} ↗</a>
            </article>
          </div>
        </section>

        <section className="process">
          <div className="shell">
            <div className="section-top">
              <div>
                <span className="eyebrow">03 / What happens next</span>
                <h2>From enquiry.<br />To next step.</h2>
              </div>
              <p>Every enquiry follows the same three steps, so you always know where it stands.</p>
            </div>

            <div className="process-grid">
              {contact.next.map(([n, title, text]) => (
                <article key={n}>
                  <span className="eyebrow">{n} ───── ↗</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
