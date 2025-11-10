import { Lightbulb, Pencil, Code, TestTube, Rocket } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    title: "Discover & Strategy",
    description: "We analyze your needs and define the perfect solution.",
  },
  {
    icon: Pencil,
    title: "Design & Wireframe",
    description: "Creating beautiful, user-centered designs.",
  },
  {
    icon: Code,
    title: "Build & Refine",
    description: "Development with clean, scalable code.",
  },
  {
    icon: TestTube,
    title: "Test & Polish",
    description: "Rigorous testing to ensure quality.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "Deploy and support your success.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-20 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How do we work?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process ensures you get from idea to launch quickly and efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center group">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                    <Icon className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
