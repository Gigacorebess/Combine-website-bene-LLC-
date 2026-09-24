import type { Metadata } from 'next';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { enquiry } from '@/lib/divisions';
import '../pages.css';

export const metadata: Metadata = {
  title: 'About us — Bene LLC',
  description:
    'Bene LLC is a global trading company offering worldwide sourcing and integrated supply chain solutions across metals, minerals, energy and agricultural commodities.',
};

const links = [
  { href: '/#commodities', label: 'Commodities' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const stats: [string, string][] = [
  ['10+', 'Offices and logistics facilities'],
  ['90+', 'Countries covered'],
  ['50+', 'People across the group'],
  ['5+', 'Years of trading'],
];

const principles: [string, string, string][] = [
  ['01', 'Responsible sourcing', 'Material is bought from producers and suppliers assessed on origin, documentation and handling, so every cargo can be traced back to a source we are willing to stand behind.'],
  ['02', 'Utmost commitment', 'One team coordinates the enquiry, the contract and the shipment, so counterparties deal with people who already know the detail of their cargo.'],
  ['03', 'Highest standards', 'Specifications, inspection and documentation are agreed before a transaction is structured, not negotiated once material is already moving.'],
  ['04', 'Sustainability at core', 'Recovered and recycled feedstocks — scrap metal, used oil and recycling inputs — sit alongside primary material as a core part of the portfolio.'],
];

const capabilities: [string, string][] = [
  ['Supply chain services', 'Procurement through to distribution, with inventory, storage and movement planned as one flow rather than separate hand-offs.'],
  ['Integrated sourcing, logistics & warehousing', 'Inspection, freight, customs formalities, inland movement and warehousing coordinated around the delivery window you need.'],
  ['Selling agent services', 'Representation for producers seeking structured access to buyers in new markets.'],
  ['Regular sourcing', 'Repeat programmes for customers with continuing requirements, priced and scheduled against agreed specifications.'],
];

export default function AboutPage() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <SiteHeader division="trading" links={links} cta={{ href: '/contact', label: 'Contact us' }} />

      <main id="main">
        <section className="page-hero">
          <div className="shell">
            <div className="eyebrow"><span className="signal">●</span> Bene LLC / About us</div>
            <h1>Worldwide sourcing.<br /><em>One trading partner.</em></h1>
            <div className="page-hero-foot">
              <span>GLOBAL TRADING &amp; INTEGRATED SUPPLY CHAIN</span>
              <span>WHO WE ARE ↓</span>
            </div>
          </div>
        </section>

        <section className="shell lede">
          <p>
            Bene LLC is a global trading company specialising in the sourcing and trading of a diverse
            range of commodities, backed by <em>integrated supply chain management</em> from origin to
            destination.
          </p>
          <p className="fine-print">
            Our work sits in the detail: competitive sourcing, transport and storage planned together,
            and documentation agreed up front — so material arrives where it is needed, as specified.
          </p>
        </section>

        <div className="shell">
          <div className="stats">
            {stats.map(([value, label]) => (
              <div key={label}><strong>{value}</strong><span>{label}</span></div>
            ))}
          </div>
        </div>

        <section className="dark-section" id="mission">
          <div className="shell">
            <div className="section-top">
              <div>
                <span className="eyebrow">01 / Vision and mission</span>
                <h2>Where we are going.<br />How we get there.</h2>
              </div>
              <p>Two statements that decide what we take on, and how each engagement is run.</p>
            </div>

            <div className="split">
              <article>
                <span className="eyebrow">Vision</span>
                <h2>The preferred trading partner.</h2>
                <p>
                  To be the trading partner clients reach for first, providing exceptional value and
                  reliability. We build long-term relationships, apply market insight, and deliver
                  solutions that hold up in the ever-changing world of international trade.
                </p>
              </article>
              <article>
                <span className="eyebrow">Mission</span>
                <h2>Exceed what was agreed.</h2>
                <p>
                  To consistently exceed client expectations through a diverse portfolio of high-quality
                  products, seamless supply chain solutions and direct, responsive service — establishing
                  Bene as a partner that contributes to the success of our clients&rsquo; businesses.
                </p>
                <ul className="checklist">
                  <li>Quality confirmed against agreed specification</li>
                  <li>Logistics planned with the contract, not after it</li>
                  <li>One point of contact from enquiry to delivery</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="shell portfolio" id="what-we-do">
          <div className="section-top">
            <div>
              <span className="eyebrow">02 / What we do</span>
              <h2>Tailored to your<br />requirement.</h2>
            </div>
            <p>
              From a single freight shipment by sea, air, pallet or container, through to a structured
              multi-origin sourcing programme.
            </p>
          </div>

          <div className="portfolio-list">
            {capabilities.map(([name, text], i) => (
              <div className="portfolio-row" key={name}>
                <span className="eyebrow">0{i + 1}</span>
                <h3>{name}</h3>
                <p>{text}</p>
                <span className="arrow" aria-hidden="true">·</span>
              </div>
            ))}
          </div>
        </section>

        <section className="process" id="principles">
          <div className="shell">
            <div className="section-top">
              <div>
                <span className="eyebrow">03 / How we trade</span>
                <h2>Principles that<br />carry the cargo.</h2>
              </div>
              <p>
                Trading relationships are built on what happens after the contract is signed. These four
                commitments shape every transaction we take on.
              </p>
            </div>

            <div className="process-grid">
              {principles.slice(0, 3).map(([n, title, text]) => (
                <article key={n}>
                  <span className="eyebrow">{n} ───── ↗</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>

            <div className="approach-note">
              <span className="eyebrow">{principles[3][1]}</span>
              <p>{principles[3][2]}</p>
            </div>
          </div>
        </section>

        <section className="shell contact">
          <span className="eyebrow">04 / Start a conversation</span>
          <div className="contact-inner">
            <div>
              <h2>Let&rsquo;s talk about<br />your requirement.</h2>
              <a className="mail-link" href="mailto:info@benellc.com">info@benellc.com <span>↗</span></a>
            </div>
            <div>
              <p>
                Speak to our team about products, sourcing programmes or partnership opportunities —
                and we will come back with the right next step.
              </p>
              <a className="cta" href="/contact">Contact us <span>↗</span></a>
              <p className="fine">
                Trading enquiries can go straight to{' '}
                <a className="underlined" href={enquiry('sales@benellc.com', 'commodity trading')}>
                  sales@benellc.com
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
