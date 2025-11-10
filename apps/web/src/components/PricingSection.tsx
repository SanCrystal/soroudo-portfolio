import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Landing Page Template",
    price: "$49",
    description: "Perfect for getting started quickly",
    features: [
      "5+ pre-built sections",
      "Responsive design",
      "Basic customization",
      "Documentation included",
    ],
  },
  {
    name: "Full UI Kit",
    price: "$99",
    description: "Complete design system for your app",
    features: [
      "50+ components",
      "Dark mode support",
      "Full customization",
      "Lifetime updates",
      "Premium support",
    ],
    popular: true,
  },
  {
    name: "Custom Dashboard Template",
    price: "$299",
    description: "Tailored to your specific needs",
    features: [
      "Custom components",
      "Advanced features",
      "Priority support",
      "Source files included",
      "Free consultations",
    ],
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How much does it cost?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Flexible pricing to match your project needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 relative ${
                plan.popular
                  ? "border-accent shadow-lg scale-105 bg-accent/5"
                  : "border-border hover:border-accent/50 transition-colors"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="text-4xl font-bold mb-4">{plan.price}</div>
              </div>
              <Button className="w-full mb-6" variant={plan.popular ? "accent" : "default"}>
                Get Started
              </Button>
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
