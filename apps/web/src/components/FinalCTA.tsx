import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-32 px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <div className="text-[20rem] font-bold select-none">temmora</div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-bold mb-6">
          Let's build something{" "}
          <span className="bg-gradient-to-r from-[hsl(260,80%,55%)] to-[hsl(210,90%,55%)] bg-clip-text text-transparent">
            incredible
          </span>
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          Ready to get started with your next beautiful project?
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button size="lg" variant="accent">
            Book a Call <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline">
            View Templates
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
