import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

const urLogo = new URL('../../assets/urlogo2019.png', import.meta.url).href;

const footerLinks = [
  ['Home', '/'],
  ['About', '/about'],
  ['Programs', '/programs'],
  ['Admissions', '/admissions'],
  ['Research', '/research'],
  ['Our Community', '/faculty'],
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
    <footer className="border-t border-slate-200 bg-white py-10">
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
                <p className="font-semibold text-[#0f6e8c]">ACEIoT</p>
                <p className="text-sm text-slate-500">University of Rwanda</p>
              </div>
            </div>
            <p className="text-sm leading-6 text-slate-600">
              Building research capacity and academic excellence through
              technology, partnerships, and innovation.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
                Explore
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                {footerLinks.map(([label, href]) => (
                  <li key={href}>
                    <Link
                      to={href}
                      className="hover:text-slate-900 hover:underline"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
                More
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                {extraLinks.map(([label, href]) => (
                  <li key={href}>
                    <Link
                      to={href}
                      className="hover:text-slate-900 hover:underline"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
                Contact
              </p>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-slate-400" />
                  Kigali, Rwanda
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-slate-400" />
                  info@aceiot.ur.ac.rw
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-slate-400" />
                  +250 788 123 456
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-slate-200 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} ACEIoT · University of Rwanda. All rights
        reserved.
      </div>
    </footer>
  );
}
