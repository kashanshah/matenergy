"use client";

import { useMemo, useState, type FormEvent } from "react";
import { BatteryCharging, Leaf, LayoutGrid, Ruler, Sun, Wallet } from "lucide-react";
import { Field, FormError, FormSuccess, Honeypot, SubmitButton } from "./fields";
import { formString, useLeadSubmit } from "./use-lead-submit";
import { KWH_PER_KW_MONTH, PANEL_WATTS, estimate, pkr } from "@/lib/solar";

export function SolarCalculator() {
  const [bill, setBill] = useState(40000);
  const [tariff, setTariff] = useState(60);
  const [coverage, setCoverage] = useState(90);
  const [backup, setBackup] = useState(false);
  const result = useMemo(() => estimate(bill, tariff, coverage), [bill, tariff, coverage]);
  const { status, error, fieldErrors, submit, reset } = useLeadSubmit();

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    await submit({
      formType: "calculator",
      name: formString(fd, "name"),
      phone: formString(fd, "phone"),
      email: formString(fd, "email"),
      website: formString(fd, "website"),
      location: formString(fd, "location"),
      estimate: {
        monthlyBill: bill,
        tariff,
        monthlyUnits: result.monthlyUnits,
        coverage,
        systemKw: result.systemKw,
        panels: result.panels,
        roofSqft: result.roofSqft,
        monthlySavings: result.monthlySavings,
        backup,
      },
    });
  }

  const stats = [
    { icon: Sun, label: "Recommended system", value: `${result.systemKw} kW`, accent: true },
    { icon: Wallet, label: "Est. monthly savings", value: pkr(result.monthlySavings) },
    { icon: LayoutGrid, label: `Panels (~${PANEL_WATTS} W)`, value: String(result.panels) },
    { icon: Ruler, label: "Roof space needed", value: `~${Math.round(result.roofSqft).toLocaleString()} sq ft` },
    { icon: Wallet, label: "Est. yearly savings", value: pkr(result.annualSavings) },
    { icon: Leaf, label: "CO₂ avoided / year", value: `${result.co2Tonnes.toFixed(1)} t` },
  ];

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
      <div className="rounded-4xl bg-white lg:self-start p-6 ring-1 ring-ink-100 sm:p-8">
        <h2 className="text-2xl font-bold">Your electricity usage</h2>
        <div className="mt-8 space-y-8">
          <div>
            <div className="flex items-baseline justify-between gap-4">
              <label htmlFor="bill" className="label">
                Average monthly bill
              </label>
              <span className="font-display text-lg font-bold text-ink-900">{pkr(bill)}</span>
            </div>
            <input
              id="bill"
              type="range"
              min={5000}
              max={1000000}
              step={1000}
              value={bill}
              onChange={(e) => setBill(Number(e.target.value))}
              className="mt-3 w-full accent-brand-500"
            />
            <div className="mt-3 flex items-center gap-2">
              <span className="text-sm text-ink-500">or type it:</span>
              <input
                type="number"
                inputMode="numeric"
                min={0}
                aria-label="Monthly bill in PKR"
                value={bill || ""}
                onChange={(e) => setBill(Math.max(0, Number(e.target.value)))}
                className="field max-w-44 py-2"
              />
            </div>
          </div>
          <div>
            <label htmlFor="tariff" className="label">
              Average cost per unit (PKR / kWh)
            </label>
            <input
              id="tariff"
              type="number"
              min={1}
              step={1}
              value={tariff || ""}
              onChange={(e) => setTariff(Math.max(0, Number(e.target.value)))}
              className="field max-w-44 py-2"
            />
            <p className="mt-1.5 text-xs text-ink-400">
              Your bill total ÷ units consumed, including taxes. Check a recent K-Electric bill.
            </p>
          </div>
          <div>
            <div className="flex items-baseline justify-between gap-4">
              <label htmlFor="coverage" className="label">
                How much of your usage should solar cover?
              </label>
              <span className="font-display text-lg font-bold text-ink-900">{coverage}%</span>
            </div>
            <input
              id="coverage"
              type="range"
              min={30}
              max={100}
              step={5}
              value={coverage}
              onChange={(e) => setCoverage(Number(e.target.value))}
              className="mt-3 w-full accent-brand-500"
            />
          </div>
          <label className="flex cursor-pointer items-start gap-3 rounded-2xl bg-ink-50 p-4 ring-1 ring-ink-100">
            <input
              type="checkbox"
              checked={backup}
              onChange={(e) => setBackup(e.target.checked)}
              className="mt-1 size-4 accent-brand-500"
            />
            <span>
              <span className="flex items-center gap-2 font-semibold text-ink-900">
                <BatteryCharging className="size-4 text-brand-600" aria-hidden /> I want battery backup for load-shedding
              </span>
              <span className="mt-1 block text-sm text-ink-500">We&apos;ll size a lithium battery bank during your survey.</span>
            </span>
          </label>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="rounded-4xl bg-gradient-to-br from-brand-600 to-brand-800 p-6 text-white sm:p-8" aria-live="polite">
          <p className="text-sm font-medium uppercase tracking-wider text-brand-100">Your solar estimate</p>
          <dl className="mt-6 grid grid-cols-2 gap-4">
            {stats.map(({ icon: Icon, label, value, accent }) => (
              <div
                key={label}
                className={`rounded-2xl p-4 ${accent ? "col-span-2 bg-white text-ink-900" : "bg-white/10 ring-1 ring-white/15"}`}
              >
                <dt className={`flex items-center gap-2 text-xs font-medium ${accent ? "text-ink-500" : "text-brand-100"}`}>
                  <Icon className={`size-4 ${accent ? "text-sun-500" : ""}`} aria-hidden />
                  {label}
                </dt>
                <dd className={`mt-1 font-display font-extrabold ${accent ? "text-4xl text-ink-900" : "text-xl"}`}>
                  {value}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-5 text-xs leading-5 text-brand-100">
            Indicative only. Based on ~{Math.round(result.monthlyUnits).toLocaleString()} units/month and an average
            Karachi yield of {KWH_PER_KW_MONTH} kWh per kW per month. Actual results depend on roof orientation,
            shading, tariff and net-metering rules.
          </p>
        </div>

        <div className="rounded-4xl bg-white p-6 ring-1 ring-ink-100 sm:p-8">
          {status === "success" ? (
            <FormSuccess title="We'll send your detailed proposal" onReset={reset} />
          ) : (
            <>
              <h2 className="text-xl font-bold">Get an exact quote for this system</h2>
              <p className="mt-2 text-sm text-ink-500">We&apos;ll confirm sizing with a free site survey.</p>
              <form onSubmit={onSubmit} className="relative mt-6 grid gap-4 sm:grid-cols-2">
                <Honeypot />
                <Field label="Name" name="calc-name" required error={fieldErrors.name}>
                  <input id="calc-name" name="name" required autoComplete="name" className="field" />
                </Field>
                <Field label="Phone / WhatsApp" name="calc-phone" required error={fieldErrors.phone}>
                  <input id="calc-phone" name="phone" type="tel" required autoComplete="tel" className="field" />
                </Field>
                <Field label="Email" name="calc-email" error={fieldErrors.email}>
                  <input id="calc-email" name="email" type="email" autoComplete="email" className="field" />
                </Field>
                <Field label="Area in Karachi" name="calc-location">
                  <input id="calc-location" name="location" className="field" />
                </Field>
                <div className="sm:col-span-2">
                  <SubmitButton submitting={status === "submitting"}>Send me a quote</SubmitButton>
                </div>
                <div className="sm:col-span-2">
                  <FormError message={error} />
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
