/** Valeurs éditoriales à remplacer avant une commercialisation publique. */
export const landingConfig = {
  brand: "fideli",
  currency: "EUR",
  currencySymbol: "€",
  roi: {
    customersPerDay: { initial: 35, min: 5, max: 200, step: 1 },
    averageBasket: { initial: 18, min: 5, max: 150, step: 1 },
    openDays: { initial: 24, min: 5, max: 31, step: 1 },
    hypotheticalGrowth: { initial: 5, min: 0, max: 20, step: 1 },
  },
  pricing: {
    monthly: 19,
    annualPerMonth: 16,
    taxLabel: "HT",
    availability: "Tarifs indicatifs · aucun paiement intégré à ce stade",
  },
  programExample: { pointsPerVisit: 10, rewardPoints: 80 },
  mockupExample: { cardPoints: 50, visitsThisMonth: 24 },
} as const;

export const landingFeatures = [
  { icon: "▦", title: "Un QR code par commerce", description: "Une page d’inscription à partager en caisse, sur vos supports ou en ligne." },
  { icon: "✳", title: "Une carte toujours accessible", description: "Le client retrouve son solde et sa récompense depuis son espace personnel." },
  { icon: "+", title: "Des points à chaque visite", description: "Validez les passages depuis l’espace commerçant et suivez la progression." },
  { icon: "◫", title: "Un tableau de bord clair", description: "Consultez les adhésions, les visites et les récompenses de votre établissement." },
  { icon: "♡", title: "Un retour client privé", description: "Recueillez un ressenti rapide, sans conditionner le bonus à une note positive." },
  { icon: "↗", title: "Des cartes physiques en option", description: "Préparez un QR unique et gérez le remplacement d’une carte perdue." },
] as const;
