import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How do I know if squirrels are in my attic?",
    answer: "Common signs include scurrying or scratching sounds during early morning or evening hours, gnaw marks on wood or wires, small entry holes in fascia boards, and peculiar odors from nesting materials."
  },
  {
    question: "Will professional squirrel control keep them out for good?",
    answer: "Yes, our 'Structural Exclusion' approach focuses on permanent solutions. We identify every potential entry point and seal them with chewing-resistant materials like high-grade steel mesh and industrial sealants."
  },
  {
    question: "Do you provide humane squirrel removal in Fulton MD?",
    answer: "Absolutely. We follow Maryland DNR guidelines for humane wildlife management. Our preferred method is using one-way exclusion doors that allow squirrels to leave safely but prevent them from re-entering."
  },
  {
    question: "Can squirrels cause house fires?",
    answer: "Unfortunately, yes. Squirrels have teeth that never stop growing, so they chew on hard materials—including electrical wiring. Stripped wires in the attic are a significant fire risk if not addressed immediately."
  },
  {
    question: "How long does the mitigation process take?",
    answer: "Most assessments are completed within 24 hours. The full exclusion and removal process usually takes 3 to 7 days, depending on the severity of the infestation and the number of entry points needing reinforcement."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Squirrel pest control <span className="text-indigo-600">in Fulton MD FAQ</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-medium italic">
            Common questions about squirrel behavior, structural risks, and our professional exclusion process in Howard County.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-2xl border border-slate-100 bg-slate-50 overflow-hidden transition-all duration-300">
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-slate-900 uppercase tracking-tight text-sm">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-indigo-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6 bg-white">
                  <p className="text-slate-600 text-sm leading-relaxed border-t border-slate-50 pt-4">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
