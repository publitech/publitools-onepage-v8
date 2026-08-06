import { useMemo, useState } from 'react';

const freelanceMonthly = 270;
const agencyMonthly = 450;
const publitoolsMonthly = 39.9;

export default function PricingCalculator() {
  const [postsPerWeek, setPostsPerWeek] = useState(3);

  const monthlyPosts = useMemo(() => postsPerWeek * 4, [postsPerWeek]);
  const savingsVsFreelance = useMemo(
    () => Math.round(freelanceMonthly - publitoolsMonthly),
    [],
  );
  const savingsVsAgency = useMemo(() => Math.round(agencyMonthly - publitoolsMonthly), []);

  return (
    <div className="space-y-8">
      <div className="rounded-[16px] border border-[#e8e9ea] bg-white p-6 shadow-soft">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7a7f8c]">
              Calculateur
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-[#262832]">
              Combien de publications par semaine ?
            </h3>
            <p className="mt-2 text-[#5b6170]">
              {postsPerWeek} publication{postsPerWeek > 1 ? 's' : ''} / semaine, soit {monthlyPosts}{' '}
              par mois environ.
            </p>
          </div>
          <div className="rounded-[14px] bg-[#262832] px-5 py-4 text-white">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-300">Économie estimée</p>
            <p className="mt-2 text-3xl font-bold">{savingsVsFreelance}€ / mois</p>
            <p className="text-sm text-slate-300">vs freelance • {savingsVsAgency}€ vs agence</p>
          </div>
        </div>
        <input
          aria-label="Combien de publications par semaine"
          className="mt-6 h-3 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-[#f4862d]"
          type="range"
          min="1"
          max="10"
          value={postsPerWeek}
          onChange={(event) => setPostsPerWeek(Number(event.target.value))}
        />
        <div className="mt-2 flex justify-between text-sm text-[#7a7f8c]">
          <span>1</span>
          <span>10</span>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <article className="rounded-[16px] border border-[#e8e9ea] bg-[#f6f6f6] p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7a7f8c]">Freelance</p>
          <p className="mt-4 text-5xl font-bold text-[#262832]">270€</p>
          <p className="mt-2 text-[#5b6170]">/ mois</p>
          <ul className="mt-6 space-y-3 text-[#3f4351]">
            <li>Création et publication manuelles</li>
            <li>Temps de réponse variable</li>
            <li>Moins spontané sur le chantier</li>
          </ul>
        </article>

        <article className="rounded-[16px] border border-[#e8e9ea] bg-[#f6f6f6] p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7a7f8c]">Agence Web</p>
          <p className="mt-4 text-5xl font-bold text-[#262832]">450€</p>
          <p className="mt-2 text-[#5b6170]">/ mois</p>
          <ul className="mt-6 space-y-3 text-[#3f4351]">
            <li>Processus plus lourd</li>
            <li>Validation plus longue</li>
            <li>Moins de réactivité terrain</li>
          </ul>
        </article>

        <article className="gradient-brand rounded-[18px] p-[1px] shadow-soft">
          <div className="rounded-[17px] bg-[#262832] p-8 text-white">
            <div className="inline-flex rounded-lg bg-white/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#ffd2a5]">
              Recommandé
            </div>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#ffe1c7]">
              PubliTools Abonnement Pro
            </p>
            <p className="mt-4 text-5xl font-bold">39,90€</p>
            <p className="mt-2 text-slate-300">/ mois</p>
            <ul className="mt-6 space-y-3 text-slate-100">
              <li>IA générative illimitée</li>
              <li>Retouche photo automatique</li>
              <li>Publication auto multi-réseaux</li>
              <li>Support prioritaire 7j/7</li>
            </ul>
            <a
              className="mt-8 inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-[#f4862d] px-5 py-3 text-center text-sm font-bold text-white no-underline transition hover:bg-[#e27924]"
              href="https://app.publichantier.fr/?signup=yes"
            >
              COMMENCER L'ESSAI
            </a>
            <p className="mt-3 text-center text-sm text-slate-300">Sans engagement • Annulation facile</p>
          </div>
        </article>
      </div>
    </div>
  );
}
