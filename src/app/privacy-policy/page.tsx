import type { Metadata } from "next";
import { pageMeta } from "@/lib/metadata";
import { PageHero } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Privacy Policy",
  description:
    `How ${site.name} collects and uses information submitted through this website.`,
  path: "/privacy-policy/",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "Privacy Policy", path: "/privacy-policy/" }]} title="Privacy policy" />
      <section className="container-x py-16">
        <div className="prose-mat max-w-3xl">
          <p>
            {site.name} respects your privacy. This policy explains what information we collect through this website
            and how we use it.
          </p>
          <h2>Information we collect</h2>
          <p>
            When you submit a quote request, contact form or solar calculator form, we collect the details you provide,
            such as your name, phone number, email address, location and information about your electricity usage and
            property.
          </p>
          <h2>How we use it</h2>
          <ul>
            <li>To respond to your enquiry and arrange site surveys</li>
            <li>To prepare solar proposals and quotations</li>
            <li>To provide after-sales service and support</li>
          </ul>
          <p>We do not sell your personal information. We share it only with service providers that help us operate this website and deliver email, and only as needed for those purposes.</p>
          <h2>Contact</h2>
          <p>
            For questions about this policy or to request deletion of your data, email{" "}
            <a href={`mailto:${site.email}`} className="font-semibold text-brand-700">
              {site.email}
            </a>{" "}
            or write to us at {site.address.full}.
          </p>
        </div>
      </section>
    </>
  );
}
