import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Layout, Palette, ArrowRight } from "lucide-react";
import previewCard from "@/assets/template-preview-card.jpg";
import Image from "next/image";

const ProductShowcase = () => {
  return (
    <section id="templates" className="py-20 px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Template Design & Development</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready-to-use UI templates built with modern design principles and best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          <Card className="p-8 hover:shadow-lg transition-shadow border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Layout className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold">UI Templates</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Complete UI kits with components, layouts, and design systems ready to customize for your brand.
            </p>
            <Button variant="ghost" className="group">
              All Templates <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-shadow border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Palette className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold">Custom Design</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Bespoke templates tailored to your specific needs with premium support and customization.
            </p>
            <Button variant="ghost" className="group">
              Dashboard Kits <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Card>
        </div>

        <div className="text-center">
          <Image src={previewCard} alt="Template preview" className="rounded-2xl shadow-xl max-w-2xl mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
