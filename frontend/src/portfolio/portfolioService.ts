import type {
  Portfolio,
} from "./types";

import {
  defaultPortfolio,
} from "./config";

export function getDefaultPortfolio(): Portfolio {
  return defaultPortfolio;
}
