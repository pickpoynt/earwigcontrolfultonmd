const faqs = [
  {
    question: "Are Hawaiian centipedes dangerous to my family?",
    answer: "Yes — Hawaii is home to the Scolopendra subspinipes, one of the world's most venomous centipedes. Their bites cause intense pain, swelling, and can trigger allergic reactions. Small children and pets are most at risk. Our centipede repellent hawaii team eliminates them before anyone gets stung."
  },
  {
    question: "How quickly can you respond to a centipede problem in Hawaii?",
    answer: "We offer same-day service for active centipede issues across Hawaii, including Oahu, Maui, the Big Island, and Kauai. Call (323) 880-1224 and we'll dispatch immediately to protect your household."
  },
  {
    question: "Why do I keep finding centipedes inside my Hawaii home?",
    answer: "Hawaii's warm, humid tropical climate is paradise for centipedes year-round. Dense vegetation, rock walls, mulched garden beds, and moisture-rich spaces near foundations invite centipedes indoors. Our centipede repellent hawaii specialists identify all entry points and root causes — not just the visible bugs."
  },
  {
    question: "What centipede repellent treatments do you use and are they safe?",
    answer: "We use Hawaii-approved, EPA-registered pest control products with targeted application methods that are safe for families, pets, and Hawaii's unique ecosystem. Our technicians use eco-smart IPM techniques and will brief you on any precautions before treatment begins."
  },
  {
    question: "Do you offer a guarantee on your centipede repellent services?",
    answer: "Yes. We stand behind our work with a satisfaction guarantee. If centipedes return within the treatment period, we re-treat at no additional charge. Hawaii homeowners count on us for long-lasting, island-proven results."
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
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm">Centipede Expert Answers</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mt-4 mb-6 uppercase tracking-tight">
            Centipede Repellent Hawaii <span className="text-indigo-600">FAQ</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Key answers for Hawaii property owners dealing with dangerous centipede problems.
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
