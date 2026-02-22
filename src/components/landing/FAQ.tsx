import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "How do I know if I have a coyote problem in McCook?",
    answer: "Regular group howling, sightings of coyotes near property lines during the day, or evidence of livestock distress/injury are primary indicators. You may also find livestock losses that occur during the night. If coyotes are shadowing you or your pets while walking, it's a critical sign of habituation that requires immediate coyote control McCook NE intervention."
  },
  {
    question: "Are your coyote control methods humane?",
    answer: "Yes. We prioritize humane, non-lethal hazing and exclusion methods whenever possible. When removal is necessary, we follow all Nebraska Game and Parks Commission regulations and use humane, professional wildlife management techniques to ensure the most ethical outcome."
  },
  {
    question: "Can you protect my pets from residential coyotes?",
    answer: "Absolutely. Residential coyote issues in McCook are often caused by accessible food sources and lack of pet security. We provide property audits to identify attractants and consult on pet-safe enclosures and hazing tools to keep the coyotes away from your family home."
  },
  {
    question: "Do you provide emergency response for livestock attacks?",
    answer: "Yes, we are available 24/7 for emergency predator mitigation. If you are experiencing an active threat to your livestock in McCook or Red Willow County, call us immediately for rapid thermal tracking and intervention."
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
            coyote control McCook NE <span className="text-indigo-600">FAQ</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Essential information for McCook ranchers and property owners regarding predator behavior, livestock safety, and ethical control methods.
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
