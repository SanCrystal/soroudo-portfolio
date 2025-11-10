import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import mockup1 from "@/assets/template-mockup-1.jpg";
import mockup2 from "@/assets/template-mockup-2.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 lg:px-8">
      <div className="max-w-10xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in">
          <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">
            Crafted templates for bold creators
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Turn your idea into a{" "}
            <span className="bg-gradient-to-r from-[hsl(260,80%,55%)] to-[hsl(210,90%,55%)] bg-clip-text text-transparent">
              stunning product
            </span>{" "}
            in weeks.
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Built not only for launch, but for long-term growth.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" variant="accent">
              Book a Call <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Pricing
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto animate-fade-in">
          <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <Image src={mockup1} alt="Dashboard template preview" className="w-full h-auto" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <Image src={mockup2} alt="Landing page template preview" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
