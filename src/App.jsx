import { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SocialProofSection from "./components/SocialProofSection";
import FeaturesSection from "./components/FeaturesSection";
import UseCasesSection from "./components/UseCasesSection";
import DeepDiveSection from "./components/DeepDiveSection";
import SpecsSection from "./components/SpecsSection";
import LaunchTimelineSection from "./components/LaunchTimelineSection";
import TrustLogisticsSection from "./components/TrustLogisticsSection";
import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";
import FooterSection from "./components/FooterSection";
import ScrollEnhancements from "./components/ScrollEnhancements";
import ReservationModal from "./components/ReservationModal";

export default function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <ScrollEnhancements />
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />
      <Header />
      <HeroSection />
      <SocialProofSection />
      <FeaturesSection />
      <UseCasesSection />
      <DeepDiveSection />
      <SpecsSection />
      <LaunchTimelineSection />
      <TrustLogisticsSection />
      <PricingSection onReserveClick={() => setIsReservationOpen(true)} />
      <FAQSection />
      <FooterSection />
    </div>
  );
}
