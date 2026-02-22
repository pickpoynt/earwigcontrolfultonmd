import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "What are the signs that my Metropolis home needs cricket extermination?",
    answer: "Common signs include hearing constant, loud chirping from walls, basements, or crawl spaces, especially at night. You may also find irregular holes in fabrics (curtains, clothing, rugs) and see small, black, grain-like fecal matter in damp areas of your home. If you see multiple crickets daily, a professional cricket extermination Metropolis Illinois service is highly recommended."
  },
  {
    question: "Can crickets actually damage my property?",
    answer: "Yes. House crickets are necrophagous but also feed on fabrics, particularly those soiled with food or perspiration. They can chew through large areas of wool, cotton, silk, and even synthetic materials, causing permanent damage to your wardrobe and home furnishings."
  },
  {
    question: "Are the treatments safe for my family and pets in Metropolis?",
    answer: "Absolutely. We use clinical-grade, eco-targeted solutions that specifically target the biology of insects like crickets. Our methods are designed to be applied strategically to nesting and entry points, ensuring maximum effectiveness with minimal environmental footprint."
  },
  {
    question: "How long does a cricket extermination treatment last?",
    answer: "Our professional treatments include both immediate knock-down and long-lasting barrier protection. We also provide exclusion services to seal your home, which typically provides protection for an entire season or longer, depending on the environmental conditions in your part of Metropolis."
  }
];

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 mb-6 font-bold uppercase tracking-wider text-sm">
            <HelpCircle className="w-4 h-4" />
            Common Questions
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mt-4 mb-6 uppercase tracking-tight">
            cricket extermination Metropolis Illinois <span className="text-indigo-600">FAQ</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Essential information for Metropolis property owners regarding cricket detection, property damage prevention, and extermination methods.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-slate-200 rounded-2xl px-6">
                <AccordionTrigger className="text-left font-bold text-slate-900 hover:text-indigo-600 py-6 text-lg uppercase tracking-tight" id={`faq-trigger-${index}`}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-6 leading-relaxed font-medium italic">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
