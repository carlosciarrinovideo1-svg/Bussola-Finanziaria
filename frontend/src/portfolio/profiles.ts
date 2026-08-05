import type { Portfolio } from "./types";

/**
 * Portfolio Profiles Registry
 * Centralizzata per supportare profili diversi di investimento.
 * Ogni profilo ha allocazioni diverse in base al rischio.
 */

export const portfolioProfiles: Record<string, Portfolio> = {
  conservative: {
    name: "Portafoglio Conservativo",
    totalCapital: 100000,
    assets: [
      {
        id: "fixed-income",
        name: "Renda fixa",
        category: "Conservativo",
        allocation: 70,
        expectedAnnualRate: 8,
      },
      {
        id: "government-bonds",
        name: "Titoli governativi",
        category: "Conservativo",
        allocation: 30,
        expectedAnnualRate: 7,
      },
    ],
  },

  balanced: {
    name: "Portafoglio Equilibrato",
    totalCapital: 100000,
    assets: [
      {
        id: "fixed-income",
        name: "Renda fixa",
        category: "Conservativo",
        allocation: 50,
        expectedAnnualRate: 10,
      },
      {
        id: "government-bonds",
        name: "Titoli governativi",
        category: "Moderato",
        allocation: 30,
        expectedAnnualRate: 9,
      },
      {
        id: "variable-income",
        name: "Renda variável",
        category: "Dinamico",
        allocation: 20,
        expectedAnnualRate: 12,
      },
    ],
  },

  dynamic: {
    name: "Portafoglio Dinamico",
    totalCapital: 100000,
    assets: [
      {
        id: "fixed-income",
        name: "Renda fixa",
        category: "Conservativo",
        allocation: 30,
        expectedAnnualRate: 10,
      },
      {
        id: "government-bonds",
        name: "Titoli governativi",
        category: "Moderato",
        allocation: 20,
        expectedAnnualRate: 9,
      },
      {
        id: "variable-income",
        name: "Renda variável",
        category: "Dinamico",
        allocation: 50,
        expectedAnnualRate: 15,
      },
    ],
  },
};

/**
 * Lista dei profili disponibili
 */
export const portfolioProfileIds = Object.keys(portfolioProfiles);

/**
 * Profilo predefinito (equilibrato)
 */
export const defaultProfileId = "balanced";