import { Check, X } from "lucide-react";

const features = [
  { name: "Delivery Time", temmora: "2-4 weeks", others: "2-3 months" },
  { name: "Premium Support", temmora: true, others: false },
  { name: "Customization", temmora: "Full flexibility", others: "Limited options" },
  { name: "Updates", temmora: "Free lifetime", others: "Paid add-ons" },
];

const ComparisonTable = () => {
  return (
    <section className="py-20 px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why we are different</h2>
          <p className="text-lg text-muted-foreground">See how Temmora stands out from the competition</p>
        </div>

        <div className="bg-card rounded-2xl shadow-lg overflow-hidden border border-border">
          <div className="grid grid-cols-3 gap-4 p-6 bg-secondary/50 font-semibold">
            <div></div>
            <div className="text-center">Temmora</div>
            <div className="text-center text-muted-foreground">Other Companies</div>
          </div>

          {features.map((feature, index) => (
            <div
              key={index}
              className="grid grid-cols-3 gap-4 p-6 border-t border-border hover:bg-secondary/20 transition-colors"
            >
              <div className="font-medium">{feature.name}</div>
              <div className="text-center">
                {typeof feature.temmora === "boolean" ? (
                  feature.temmora ? (
                    <Check className="h-5 w-5 text-accent mx-auto" />
                  ) : (
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  )
                ) : (
                  <span className="text-accent font-medium">{feature.temmora}</span>
                )}
              </div>
              <div className="text-center">
                {typeof feature.others === "boolean" ? (
                  feature.others ? (
                    <Check className="h-5 w-5 text-accent mx-auto" />
                  ) : (
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  )
                ) : (
                  <span className="text-muted-foreground">{feature.others}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
