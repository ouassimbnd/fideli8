"use client";

import { useState } from "react";
import Link from "next/link";
import { landingConfig } from "@/lib/landing-config";

export function LandingPricing() {
  const [annual, setAnnual] = useState(false);
  const { monthly, annualPerMonth, taxLabel, availability } = landingConfig.pricing;
  const price = annual ? annualPerMonth : monthly;
  return <div className="grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
    <div>
      <span className="landing-eyebrow">05 / TARIFS</span>
      <h2 className="landing-title mt-5">SIMPLE<br/>DÈS LE<br/><span className="text-[#ee6557]">DÉPART.</span></h2>
      <p className="mt-6 max-w-md text-base leading-relaxed text-black/65">Une hypothèse de tarif facile à comprendre, par commerce. Le montant définitif et les conditions seront confirmés avant toute souscription.</p>
      <div className="mt-8 inline-flex rounded-full border-2 border-[#242321] bg-white p-1" role="group" aria-label="Période de facturation">
        <button type="button" aria-pressed={!annual} onClick={() => setAnnual(false)} className={`rounded-full px-5 py-2 text-sm font-bold transition-colors ${!annual ? "bg-[#242321] text-white" : "text-[#242321]"}`}>Mensuel</button>
        <button type="button" aria-pressed={annual} onClick={() => setAnnual(true)} className={`rounded-full px-5 py-2 text-sm font-bold transition-colors ${annual ? "bg-[#242321] text-white" : "text-[#242321]"}`}>Annuel</button>
      </div>
    </div>
    <div className="rounded-[1.75rem] border-2 border-[#242321] bg-white p-7 shadow-[12px_12px_0_#ee6557] sm:p-10">
      <div className="flex items-center justify-between gap-4"><span className="text-xs font-bold uppercase tracking-[.2em]">Offre de lancement envisagée</span><span className="text-3xl">✳</span></div>
      <div className="mt-10 flex items-baseline gap-2" aria-live="polite"><strong className="font-display text-7xl leading-none sm:text-8xl">{price} {landingConfig.currencySymbol}</strong><span className="text-sm text-black/60">{taxLabel} / mois</span></div>
      <p className="mt-2 text-sm text-black/55">{annual ? `Soit ${annualPerMonth * 12} ${landingConfig.currencySymbol} ${taxLabel} facturés à l’année, tarif indicatif.` : "Facturation mensuelle envisagée, tarif indicatif."}</p>
      <div className="my-8 h-px bg-black/15"/>
      <ul className="space-y-3 text-sm font-medium">{["Une page et un QR code pour votre commerce", "Cartes clients, points et récompenses", "Tableau de bord et retours privés", "Accès depuis téléphone et ordinateur"].map(item => <li key={item} className="flex gap-3"><span className="font-bold text-[#ee6557]">✓</span>{item}</li>)}</ul>
      <Link href="/business/login" className="landing-solid-link mt-9 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#242321] px-7 text-center text-sm font-bold text-white transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ee6557]">Créer mon espace <span className="ml-3" aria-hidden>↗</span></Link>
      <p className="mt-4 text-center text-xs leading-relaxed text-black/50">{availability}</p>
    </div>
  </div>;
}
