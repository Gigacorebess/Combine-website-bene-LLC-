import type { Metadata } from 'next';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import EnquiryForm from '@/components/EnquiryForm';
import '../pages.css';

export const metadata: Metadata = {
  title: 'Contact us — Bene LLC',
  description:
    'Talk to the Bene LLC trading desk about commodity sourcing, supply chain services or partnership opportunities.',
};

const SALES = 'sales@benellc.com';

export default function ContactPage() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <SiteHeader division="trading" cta={{ href: `mailto:${SALES}`, label: 'Talk trade' }} />

      <main id="main">
        <section className="page-hero">
          <div className="shell">
            <div className="eyebrow"><span className="signal">●</span> Bene LLC / Contact us</div>
            <h1>Your next shipment<br /><em>starts here.</em></h1>
            <div className="page-hero-foot">
              <span>SOURCING. LOGISTICS. DELIVERY.</span>
              <span>SEND AN ENQUIRY ↓</span>
            </div>
          </div>
        </section>

        <section className="shell lede">
          <p>
            Whether you want to speak to our trading team, ask about a specific material or explore a
            partnership — <em>tell us what you need and where it has to land.</em>
          </p>
          <p className="fine-print">
            The more detail you can share on grade, quantity, destination and timing, the faster we can
            come back with something concrete.
          </p>
        </section>

        <section className="dark-section" id="enquiry">
          <div className="shell">
            <div className="section-top">
              <div>
                <span className="eyebrow">01 / Send an enquiry</span>
                <h2>Tell us about<br />your requirement.</h2>
              </div>
              <p>
                Complete the form and your own mail client opens with the enquiry written out, ready to
                send to the Bene trading desk.
              </p>
            </div>
            <EnquiryForm email={SALES} />
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
              <span className="eyebrow">General enquiries</span>
              <h3>Email us</h3>
              <a href="mailto:info@benellc.com">info@benellc.com ↗</a>
              <p className="fine">For introductions, partnerships and general questions.</p>
            </article>

            <article>
              <span className="eyebrow">Trading desk</span>
              <h3>Commodity enquiries</h3>
              <a href={`mailto:${SALES}`}>{SALES} ↗</a>
              <p className="fine">For material, specification, quantity and shipment discussions.</p>
            </article>

            <article>
              <span className="eyebrow">Head office</span>
              <h3>Bene LLC</h3>
              <p>762 Green St, Iselin, NJ 08830, USA</p>
              <a href="tel:+16463673725">+1 646 367 3725 ↗</a>
            </article>
          </div>
        </section>

        <section className="process">
          <div className="shell">
            <div className="section-top">
              <div>
                <span className="eyebrow">03 / What happens next</span>
                <h2>From enquiry.<br />To delivery.</h2>
              </div>
              <p>
                Every engagement follows the same three steps, so you always know where a requirement
                stands.
              </p>
            </div>

            <div className="process-grid">
              {([
                ['01', 'We review the requirement', 'The desk checks grade, quantity, destination and timing against what can realistically be sourced and moved.'],
                ['02', 'We structure the supply', 'Source, specification and commercial terms are put together, with inspection and documentation planned around the transaction.'],
                ['03', 'We coordinate delivery', 'Shipment planning, handling and counterpart communication are run from one place through to arrival.'],
              ] as [string, string, string][]).map(([n, title, text]) => (
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
