'use client';

// Bene keeps its enquiry flow in the visitor's own mail client — no backend and
// no third-party form service. The form collects the details the trading desk
// needs, then hands a pre-filled message to the mail client on submit.
import { useState } from 'react';

const commodities = [
  'Sulphur',
  'Urea and fertilizer inputs',
  'Crude oil',
  'LNG',
  'Scrap metals (HMS / copper)',
  'Carbon and coal products',
  'Agricultural commodities',
  'Recovered materials',
  'Other / not listed',
];

type Field = { name: string; label: string; placeholder: string; type: string; required: boolean; full?: boolean };

const fields: Field[] = [
  { name: 'company', label: 'Company name', placeholder: 'Full legal or operating name', type: 'text', required: true, full: true },
  { name: 'first', label: 'First name', placeholder: 'Your first name', type: 'text', required: true },
  { name: 'last', label: 'Last name', placeholder: 'Your last name', type: 'text', required: true },
  { name: 'email', label: 'Email address', placeholder: 'you@company.com', type: 'email', required: true },
  { name: 'phone', label: 'Phone number', placeholder: '+1 555 000 0000', type: 'tel', required: false },
  { name: 'role', label: 'Job title', placeholder: 'Your current role', type: 'text', required: false },
  { name: 'quantity', label: 'Quantity and unit', placeholder: 'e.g. 5,000 MT per month', type: 'text', required: false },
  { name: 'destination', label: 'Destination port or terminal', placeholder: 'Country, port or specific site', type: 'text', required: false },
  { name: 'window', label: 'Delivery window', placeholder: 'e.g. Q1 2027, or spot', type: 'text', required: false },
];

export default function EnquiryForm({ email }: { email: string }) {
  const [sent, setSent] = useState(false);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const value = (k: string) => String(data.get(k) ?? '').trim();

    const body = [
      'Hello Bene team,',
      '',
      `Commodity / category: ${value('commodity')}`,
      `Quantity and unit: ${value('quantity')}`,
      `Destination port / terminal: ${value('destination')}`,
      `Delivery window: ${value('window')}`,
      '',
      'Requirement details:',
      value('details'),
      '',
      '—',
      `${value('first')} ${value('last')}${value('role') ? `, ${value('role')}` : ''}`,
      value('company'),
      value('email'),
      value('phone'),
    ].join('\n');

    const subject = `Bene LLC — ${value('commodity') || 'commodity'} enquiry (${value('company')})`;
    location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form className="enquiry-form" onSubmit={submit}>
      <div className="full">
        <label htmlFor="commodity">Commodity or category <span className="req">*</span></label>
        <select id="commodity" name="commodity" required defaultValue="">
          <option value="" disabled>Select a commodity</option>
          {commodities.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      {fields.map(f => (
        <div key={f.name} className={f.full ? 'full' : undefined}>
          <label htmlFor={f.name}>
            {f.label} {f.required && <span className="req">*</span>}
          </label>
          <input
            id={f.name}
            name={f.name}
            type={f.type}
            placeholder={f.placeholder}
            required={f.required}
          />
        </div>
      ))}

      <div className="full">
        <label htmlFor="details">Specification and requirement details <span className="req">*</span></label>
        <textarea
          id="details"
          name="details"
          required
          placeholder="Grade or specification, packing and handling requirements, inspection or documentation needs, and anything else we should know."
        />
      </div>

      <p className="form-note">
        Enquiries are handled by the Bene trading desk. Specifications, availability and commercial
        terms are confirmed per transaction — nothing on this site is an offer or a quotation.
      </p>

      <button className="cta" type="submit">
        {sent ? 'Opening your mail client…' : 'Send enquiry'} <span aria-hidden="true">↗</span>
      </button>

      {sent && (
        <p className="form-note" role="status">
          Your mail client should now be open with the enquiry pre-filled. If nothing happened, email{' '}
          <a className="underlined" href={`mailto:${email}`}>{email}</a> directly.
        </p>
      )}
    </form>
  );
}
