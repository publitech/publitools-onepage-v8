import { useState } from 'react';

const navItems = [
  { label: 'Réseaux sociaux', href: '/fr/#reseaux-sociaux' },
  { label: 'Avis clients', href: '/fr/#avis' },
  { label: 'Google Business', href: '/fr/#google-business' },
  { label: 'Comparatif', href: '/fr/#comparatif' },
  { label: 'Résultats', href: '/fr/#resultats' },
  { label: 'Tarif', href: '/fr/tarif/' },
  { label: 'FAQ', href: '/fr/faq/' },
] as const;

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        aria-expanded={open}
        aria-label="Ouvrir le menu"
        className="flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-[#E5E7EB] bg-white text-[#0B1F3A]"
        onClick={() => setOpen((value) => !value)}
      >
        <div className="space-y-1.5">
          <span className={`block h-0.5 w-5 bg-current transition ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block h-0.5 w-5 bg-current transition ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-5 bg-current transition ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </div>
      </button>
      {open && (
        <div className="absolute inset-x-4 top-20 z-50 rounded-2xl border border-[#E5E7EB] bg-white p-4 shadow-soft">
          <nav className="flex flex-col gap-2" aria-label="Navigation mobile">
            {navItems.map((item) => (
              <a key={item.label} className="min-h-11 rounded-xl px-4 py-3 text-base font-semibold text-[#0B1F3A] no-underline hover:bg-[#F4F6F8]" href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a className="mt-2 min-h-11 rounded-lg border border-[#0B1F3A] px-4 py-3 text-center font-semibold text-[#0B1F3A] no-underline" href="https://app.publichantier.fr/">Se connecter</a>
            <a className="min-h-11 rounded-lg bg-[#FF7A1A] px-4 py-3 text-center font-semibold text-white no-underline" href="https://app.publichantier.fr/?signup=yes">Essayer 14 jours</a>
          </nav>
        </div>
      )}
    </div>
  );
}
