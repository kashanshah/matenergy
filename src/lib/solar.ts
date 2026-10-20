/** Average monthly yield per installed kW in Karachi, after typical system losses. */
export const KWH_PER_KW_MONTH = 130;
export const PANEL_WATTS = 600;
export const SQFT_PER_KW = 65;
/** Approximate grid emission factor for Pakistan (kg CO₂ per kWh). */
export const CO2_KG_PER_KWH = 0.45;

export const pkr = (n: number) => `PKR ${Math.round(n).toLocaleString("en-PK")}`;

export function estimate(monthlyBill: number, tariff: number, coverage: number) {
  const monthlyUnits = tariff > 0 ? monthlyBill / tariff : 0;
  const targetUnits = (monthlyUnits * coverage) / 100;
  const rawKw = targetUnits / KWH_PER_KW_MONTH;
  const systemKw = rawKw <= 0 ? 0 : Math.max(3, Math.ceil(rawKw * 2) / 2);
  const panels = Math.ceil((systemKw * 1000) / PANEL_WATTS);
  const generated = systemKw * KWH_PER_KW_MONTH;
  const monthlySavings = Math.min(generated, monthlyUnits) * tariff;
  return {
    monthlyUnits,
    systemKw,
    panels,
    roofSqft: systemKw * SQFT_PER_KW,
    monthlySavings,
    annualSavings: monthlySavings * 12,
    co2Tonnes: (generated * 12 * CO2_KG_PER_KWH) / 1000,
  };
}

