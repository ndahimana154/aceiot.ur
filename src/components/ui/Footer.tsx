import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';

const urLogo = new URL('../../assets/urlogo2019.png', import.meta.url).href;

const footerLinks = [
  ['Home', '/'],
  ['About', '/about'],
  ['Programs', '/programs'],
  ['Admissions', '/admissions'],
  ['Research', '/research'],
  ['Staff', '/staff'],
  ['News', '/news'],
  ['Contact', '/contact'],
];

const extraLinks = [
  ['Community', '/community'],
  ['Gallery', '/gallery'],
  ['Background', '/background'],
  ['Labs', '/labs'],
];

export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--ace-border)] bg-[color:var(--ace-surface)] py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-sm space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={urLogo}
                alt="University of Rwanda logo"
                className="h-11 w-11 rounded-2xl object-contain"
              />
              <div>
                <p className="font-semibold text-[color:var(--ace-primary)]">ACEIoT</p>
                <p className="text-sm text-[color:var(--ace-muted)]">University of Rwanda</p>
              </div>
            </div>
            <p className="text-sm leading-6 text-[color:var(--ace-muted)]">
              Postgraduate study, research, and partnerships in ICT and connected systems.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--ace-muted)]">
                Explore
              </p>
              <ul className="space-y-2 text-sm text-[color:var(--ace-muted)]">
                {footerLinks.map(([label, href]) => (
                  <li key={href}>
                    <Link
                      to={href}
                      className="transition hover:text-[color:var(--ace-text)] hover:underline"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--ace-muted)]">
                More
              </p>
              <ul className="space-y-2 text-sm text-[color:var(--ace-muted)]">
                {extraLinks.map(([label, href]) => (
                  <li key={href}>
                    <Link
                      to={href}
                      className="transition hover:text-[color:var(--ace-text)] hover:underline"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--ace-muted)]">
                Contact
              </p>
              <ul className="space-y-3 text-sm text-[color:var(--ace-muted)]">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 text-[color:var(--ace-primary)]" />
                  KN 75 Street, Nyarugenge, Kigali
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[color:var(--ace-primary)]" />
                  info@ur.ac.rw
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-[color:var(--ace-border)] py-6 text-center text-sm text-[color:var(--ace-muted)]">
        © {new Date().getFullYear()} ACEIoT · University of Rwanda. All rights
        reserved.
      </div>
    </footer>
  );
}
