import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import SummarySection from "../components/SummarySection";
import FeaturesSection from "../components/FeaturesSection";
import AuthorSection from "../components/AuthorSection";
import TestimonialsSection from "../components/TestimonialsSection";
import OrderSection from "../components/OrderSection";
import FooterSection from "../components/FooterSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <SummarySection />
      <FeaturesSection />
      <AuthorSection />
      <TestimonialsSection />
      <OrderSection />
      <FooterSection />
    </main>
  );
}
