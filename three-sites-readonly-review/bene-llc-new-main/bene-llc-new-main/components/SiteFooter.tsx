import { divisions } from '@/lib/divisions';

export default function SiteFooter() {
  return (
    <div className="shell">
      <footer className="footer">
        <a className="brand" href="/">bene<span className="brand-dot" /></a>
        <span>© {new Date().getFullYear()} Bene LLC</span>
        <nav className="footer-nav" aria-label="Footer">
          {divisions.map(d => <a key={d.slug} href={d.href}>{d.short}</a>)}
          <a href="/about">About us</a>
          <a href="/contact">Contact us</a>
          <a href="mailto:info@benellc.com">General enquiries ↗</a>
        </nav>
      </footer>
    </div>
  );
}
