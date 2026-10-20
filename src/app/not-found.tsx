import { ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="container-x flex flex-col items-start py-28 sm:py-40">
      <h1 className="text-head uppercase leading-[0.9]">Page not found</h1>
      <p className="mt-6 max-w-md text-lead leading-[1.35]">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <ButtonLink href="/" variant="primary">
          Back to home
        </ButtonLink>
        <ButtonLink href="/services/" variant="outline">
          Our services
        </ButtonLink>
      </div>
    </section>
  );
}
