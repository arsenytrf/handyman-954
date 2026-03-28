import { createMetadata } from "@/lib/metadata";
import { HomeHero } from "@/components/home/HomeHero";
import { ServiceMarquee } from "@/components/home/ServiceMarquee";
import { ServiceGrid } from "@/components/home/ServiceGrid";
import { WhyUs } from "@/components/home/WhyUs";
import { WorkGallery } from "@/components/home/WorkGallery";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { CtaBanner } from "@/components/shared/CtaBanner";

export const metadata = createMetadata({
  title:
    "954 Handyman Services | Professional Handyman — Broward County, FL",
  description:
    "Professional handyman services from Miami to Boca Raton. Painting, plumbing, electrical, mounting, flooring, furniture assembly & more. Starting at $45/hr. Call (954) 445-7471.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ServiceMarquee />
      <ServiceGrid />
      <WhyUs />
      <WorkGallery />
      <ProcessSteps />
      <CtaBanner />
    </>
  );
}
