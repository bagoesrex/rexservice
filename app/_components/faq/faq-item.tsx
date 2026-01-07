import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQ } from "@/types/faq";

interface FAQItemProps {
  index: number;
  faq: FAQ;
}

export default function FAQItem({ faq, index }: FAQItemProps) {
  const { question, answer } = faq;

  return (
    <AccordionItem
      value={`item-${index}`}
      className="border-border bg-card/30 data-[state=open]:border-primary/50 rounded-xl border px-5 backdrop-blur-sm transition-colors duration-300"
    >
      <AccordionTrigger className="font-display text-foreground hover:text-primary py-5 text-left font-medium transition-colors">
        {question}
      </AccordionTrigger>
      <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">{answer}</AccordionContent>
    </AccordionItem>
  );
}
