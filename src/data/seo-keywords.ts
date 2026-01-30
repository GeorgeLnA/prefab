/**
 * Shared SEO keywords and location terms for meta tags across all pages.
 * Combine with page-specific keywords for rich, localised SEO.
 */

export const SEO_LOCATIONS =
  'Oxford, Oxfordshire, UK, London, England, Thames Valley, Cotswolds, Reading, Cambridge, Berkshire, Buckinghamshire, Midlands, South East England, Surrey, Hampshire, Bristol, Bath, Cheltenham, Gloucester, Wiltshire, Hertfordshire, Essex, Kent, Sussex, UK wide delivery';

export const SEO_BASE_TERMS =
  'prefab homes, prefabricated homes, prefab houses, prefabricated houses UK, modular homes UK, modular houses, SIP homes, energy efficient homes, sustainable construction, modern prefab homes, contemporary prefab, rapid build homes, 7 day house, turnkey homes, eco homes UK, low energy homes, precision engineered homes';

export const SEO_SERVICES =
  'prefab home builder UK, modular home manufacturer, custom prefab homes, design and build prefab, prefab home delivery UK, prefab installation, new build prefab';

/** Build full keywords string: page-specific terms + locations + base terms (optional services). */
export function buildKeywords(
  pageTerms: string,
  options?: { includeServices?: boolean }
): string {
  const parts = [pageTerms, SEO_LOCATIONS, SEO_BASE_TERMS];
  if (options?.includeServices) parts.push(SEO_SERVICES);
  return parts.join(', ');
}
