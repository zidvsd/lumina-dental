import dynamic from "next/dynamic";
import { FadeIn } from "@/components/FadeIn";
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import PatientJourney from "@/components/sections/PatientJourney";

// Lazy loaded (below fold sections)
const FeaturedTreatments = dynamic(
  () => import("@/components/sections/FeaturedTreatments"),
  { ssr: true },
);

const DentistProfile = dynamic(
  () => import("@/components/sections/DentistProfile"),
  { ssr: true },
);

const SmileStories = dynamic(
  () => import("@/components/sections/SmileStories"),
  { ssr: true },
);

const DesignBreak = dynamic(() => import("@/components/sections/DesignBreak"), {
  ssr: true,
});

const PaymentInsurance = dynamic(
  () => import("@/components/sections/PaymentInsurance"),
  { ssr: true },
);

const Consultation = dynamic(
  () => import("@/components/sections/Consultation"),
  { ssr: true },
);

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Above fold (NO fade for LCP optimization) */}
      <Hero />
      <FadeIn>
        <Experience />
      </FadeIn>
      <FadeIn>
        <PatientJourney />
      </FadeIn>
      {/* Below fold (fade in sections) */}
      <FadeIn>
        <FeaturedTreatments />
      </FadeIn>

      <FadeIn>
        <DentistProfile />
      </FadeIn>

      <FadeIn>
        <SmileStories />
      </FadeIn>

      <FadeIn>
        <DesignBreak />
      </FadeIn>

      <FadeIn>
        <PaymentInsurance />
      </FadeIn>

      <FadeIn>
        <Consultation />
      </FadeIn>
    </div>
  );
}
