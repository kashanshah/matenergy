import { z } from "zod";

const phone = z
  .string()
  .trim()
  .min(7, "Please enter a valid phone number")
  .max(20, "Please enter a valid phone number")
  .regex(/^[+()\d\s-]+$/, "Please enter a valid phone number");

const optionalEmail = z
  .union([z.literal(""), z.email("Please enter a valid email")])
  .optional()
  .transform((v) => v || undefined);

const base = {
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone,
  email: optionalEmail,
  // Honeypot: real users never see or fill this.
  website: z.string().max(0).optional(),
  page: z.string().max(300).optional(),
};

export const segments = ["Residential", "Commercial", "Industrial"] as const;
export const systemTypes = ["On-grid", "Hybrid (with batteries)", "Off-grid", "Not sure"] as const;
export const roofTypes = ["RCC (concrete)", "Steel shed", "Ground mount", "Other / not sure"] as const;

export const quoteSchema = z.object({
  formType: z.literal("quote"),
  ...base,
  segment: z.enum(segments),
  systemType: z.enum(systemTypes),
  roofType: z.enum(roofTypes).optional(),
  monthlyBill: z.string().trim().max(30).optional(),
  location: z.string().trim().max(120).optional(),
  message: z.string().trim().max(3000).optional(),
});

export const contactSchema = z.object({
  formType: z.literal("contact"),
  ...base,
  subject: z.string().trim().max(150).optional(),
  message: z.string().trim().min(5, "Please write a short message").max(5000),
});

export const calculatorSchema = z.object({
  formType: z.literal("calculator"),
  ...base,
  location: z.string().trim().max(120).optional(),
  estimate: z.object({
    monthlyBill: z.number().nonnegative().max(1e9),
    tariff: z.number().positive().max(1000),
    monthlyUnits: z.number().nonnegative(),
    coverage: z.number().min(0).max(100),
    systemKw: z.number().nonnegative(),
    panels: z.number().int().nonnegative(),
    roofSqft: z.number().nonnegative(),
    monthlySavings: z.number().nonnegative(),
    backup: z.boolean(),
  }),
});

export const leadSchema = z.discriminatedUnion("formType", [quoteSchema, contactSchema, calculatorSchema]);

export type Lead = z.infer<typeof leadSchema>;
export type LeadInput = z.input<typeof leadSchema>;
