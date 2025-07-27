import Hero from "@/components/Hero";
import ElevatorPitchSection from "@/components/ElevatorPitchSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import TrustedByExpertsSection from "@/components/TrustedByExpertsSection";
import CallToActionPage from "@/components/CallToActionPage";

// Server Component - rendered on the server
export default function Home() {
  return (
    <main
      id="main-content"
      className="bg-[#020d02]"
      role="main"
      aria-label="U-Pro Soccer homepage"
    >
      <Hero />
      <ElevatorPitchSection />
      <TrustedByExpertsSection />
      <TestimonialSection />
      <CallToActionPage />
    </main>
  );
}
