import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What's included in each template?",
    answer:
      "Each template includes all source files, documentation, and lifetime access to updates. You'll get fully responsive designs, clean code, and comprehensive guides to help you customize everything to your needs.",
  },
  {
    question: "Can I request custom edits?",
    answer:
      "Absolutely! We offer custom modification services for all our templates. Depending on your plan, this may be included or available as an add-on. Contact us to discuss your specific requirements.",
  },
  {
    question: "Do you offer template updates?",
    answer:
      "Yes! All templates come with free lifetime updates. We continuously improve our templates based on user feedback and keep them compatible with the latest technologies.",
  },
  {
    question: "What technologies are the templates built with?",
    answer:
      "Our templates are built with modern web technologies including React, TypeScript, Tailwind CSS, and other industry-standard tools. Each template listing specifies the exact tech stack used.",
  },
  {
    question: "Do you provide support?",
    answer:
      "Yes! All plans include documentation and email support. Premium plans include priority support with faster response times and dedicated assistance for customization.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Got questions?</h2>
          <p className="text-lg text-muted-foreground">We've got answers.</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
