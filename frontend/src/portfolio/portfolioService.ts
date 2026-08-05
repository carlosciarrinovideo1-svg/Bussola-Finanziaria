import type {
  Portfolio,
} from "./types";

import {
  portfolioProfiles,
  defaultProfileId,
} from "./profiles";

/**
 * Ottiene un portafoglio per il profilo specificato.
 * Se il profilo non esiste, restituisce il profilo predefinito.
 */
export function getPortfolio(profileId: string = defaultProfileId): Portfolio {
  return portfolioProfiles[profileId] || portfolioProfiles[defaultProfileId];
}

/**
 * Ottiene il portafoglio predefinito (equilibrato).
 * Mantenuta per retrocompatibilità.
 */
export function getDefaultPortfolio(): Portfolio {
  return getPortfolio(defaultProfileId);
}
