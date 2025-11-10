import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import ProcessSection from "@/components/ProcessSection";
import ComparisonTable from "@/components/ComparisonTable";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-2">
      <div className="min-h-screen">
        <Navigation />
        <Hero />
        <ProductShowcase />
        <ProcessSection />
        <ComparisonTable />
        <PricingSection />
        <FAQSection />
        <FinalCTA />
      </div>
    </div>
  );
}
