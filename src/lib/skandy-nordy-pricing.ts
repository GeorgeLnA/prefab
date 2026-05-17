import { getHouseTotalAreaSqm, houseData, type HouseType } from '../data/houses';
import { usdToUah } from './utils';

/**
 * Nordy (NORDY): {@link getHouseTotalAreaSqm} (номер моделі) × USD/м² (780 → 750 лінійно в серії).
 * Skandy (MOBILE): загальна площа × USD/м² — SKANDY 70 і 80: 850; решта: 820.
 * Modular (MODULAR): загальна площа × USD/м² — 1 поверх: 800; 2 поверхи: 750.
 * Modern (MODERN): загальна площа × USD/м² — MODERN 20 і 30: 1230; решта: 1100.
 */

/** Nordy: USD/м² для найменшого будинку в каталозі. */
export const NORDY_USD_PER_SQM_AT_MIN_AREA = 780;

/** Nordy: USD/м² для найбільшого будинку в каталозі. */
export const NORDY_USD_PER_SQM_AT_MAX_AREA = 750;

/** Skandy: USD/м² для SKANDY 70 та SKANDY 80. */
export const SKANDY_USD_PER_SQM_70_80 = 850;

/** Skandy: USD/м² для SKANDY 96, 100, 120, 130. */
export const SKANDY_USD_PER_SQM_OTHER = 820;

/** Modular: USD/м² для одноповерхових. */
export const MODULAR_USD_PER_SQM_ONE_STOREY = 800;

/** Modular: USD/м² для двоповерхових (включно з 1,5 поверхи та антресоллю). */
export const MODULAR_USD_PER_SQM_TWO_STOREY = 750;

/** Modern: USD/м² для MODERN 20 та MODERN 30. */
export const MODERN_USD_PER_SQM_20_30 = 1230;

/** Modern: USD/м² для MODERN 60, 95, 120. */
export const MODERN_USD_PER_SQM_OTHER = 1100;

const boundsCache: Partial<Record<'NORDY', { minSqm: number; maxSqm: number }>> = {};

function getSqmBoundsNordy(): { minSqm: number; maxSqm: number } {
  const cached = boundsCache.NORDY;
  if (cached) return cached;
  const sqms = houseData
    .filter((h) => h.category === 'NORDY')
    .map(getHouseTotalAreaSqm);
  const next = { minSqm: Math.min(...sqms), maxSqm: Math.max(...sqms) };
  boundsCache.NORDY = next;
  return next;
}

function linearPricePerSqm(
  squareMeters: number,
  minSqm: number,
  maxSqm: number,
  rateAtMinSqm: number,
  rateAtMaxSqm: number
): number {
  if (maxSqm <= minSqm) {
    return (rateAtMinSqm + rateAtMaxSqm) / 2;
  }
  const t = Math.max(0, Math.min(1, (squareMeters - minSqm) / (maxSqm - minSqm)));
  return rateAtMinSqm + t * (rateAtMaxSqm - rateAtMinSqm);
}

function isSkandy70Or80(house: HouseType): boolean {
  if (house.category !== 'MOBILE') return false;
  if (/^SKANDY\s*(70|80)\s*$/i.test(house.name.trim())) return true;
  return /^skandy-(70|80)$/i.test(house.slug);
}

/** Modular: одноповерховий (лише `ОДНОПОВЕРХОВИЙ`). */
export function isModularOneStorey(house: HouseType): boolean {
  return house.category === 'MODULAR' && house.type === 'ОДНОПОВЕРХОВИЙ';
}

/** Modular: два поверхи, мансарда 1,5 або антресоль. */
export function isModularTwoStorey(house: HouseType): boolean {
  if (house.category !== 'MODULAR') return false;
  const t = house.type ?? '';
  return t === 'ДВОПОВЕРХОВИЙ' || t === '1,5 ПОВЕРХИ' || t === 'АНТРЕСОЛЬ';
}

/** Ставка USD/м² для Modular за кількістю поверхів. */
export function pricePerSqmModularUsd(house: HouseType): number {
  if (isModularTwoStorey(house)) return MODULAR_USD_PER_SQM_TWO_STOREY;
  return MODULAR_USD_PER_SQM_ONE_STOREY;
}

function isModern20Or30(house: HouseType): boolean {
  if (house.category !== 'MODERN') return false;
  if (/^MODERN\s*(20|30)\s*$/i.test(house.name.trim())) return true;
  return /^modern-(20|30)$/i.test(house.slug);
}

/** Ставка USD/м² для Modern за моделлю. */
export function pricePerSqmModernUsd(house: HouseType): number {
  return isModern20Or30(house) ? MODERN_USD_PER_SQM_20_30 : MODERN_USD_PER_SQM_OTHER;
}

/** Ставка USD/м² для Nordy (лінійно між 780 і 750 у межах серії). */
export function pricePerSqmNordyUsd(squareMeters: number): number {
  const { minSqm, maxSqm } = getSqmBoundsNordy();
  return linearPricePerSqm(
    squareMeters,
    minSqm,
    maxSqm,
    NORDY_USD_PER_SQM_AT_MIN_AREA,
    NORDY_USD_PER_SQM_AT_MAX_AREA
  );
}

/** Ставка USD/м² для Skandy за моделлю. */
export function pricePerSqmSkandyUsd(house: HouseType): number {
  return isSkandy70Or80(house) ? SKANDY_USD_PER_SQM_70_80 : SKANDY_USD_PER_SQM_OTHER;
}

/** Повна ціна: Skandy/Nordy — за формулою серії; інші — `price` з даних. */
export function getHousePrice(house: HouseType): number {
  if (house.category === 'NORDY') {
    const sqm = getHouseTotalAreaSqm(house);
    return usdToUah(sqm * pricePerSqmNordyUsd(sqm));
  }
  if (house.category === 'MOBILE') {
    const sqm = getHouseTotalAreaSqm(house);
    return usdToUah(sqm * pricePerSqmSkandyUsd(house));
  }
  if (house.category === 'MODULAR') {
    const sqm = getHouseTotalAreaSqm(house);
    return usdToUah(sqm * pricePerSqmModularUsd(house));
  }
  if (house.category === 'MODERN') {
    const sqm = getHouseTotalAreaSqm(house);
    return usdToUah(sqm * pricePerSqmModernUsd(house));
  }
  return house.price;
}

export function getLowestPriceForModern(): number {
  const prices = houseData.filter((h) => h.category === 'MODERN').map(getHousePrice);
  return Math.min(...prices);
}

export function getLowestPriceForModular(): number {
  const prices = houseData.filter((h) => h.category === 'MODULAR').map(getHousePrice);
  return Math.min(...prices);
}

export function getLowestPriceForCategory(category: 'MOBILE' | 'NORDY'): number {
  const prices = houseData.filter((h) => h.category === category).map(getHousePrice);
  return Math.min(...prices);
}
