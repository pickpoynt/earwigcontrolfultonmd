import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you work with Ocean City condo associations?",
    answer: "Yes. We are familiar with the specific requirements of OC condo HOAs and can provide the necessary documentation and proof of insurance required for high-rise restoration in Maryland."
  },
  {
    question: "How do you handle water damage that came from the unit above me?",
    answer: "We use infrared cameras and moisture meters to track the exact path of the leak through the shared concrete and utility stacks. We'll document everything for both your insurance and the upstairs owner's insurance."
  },
  {
    question: "Can salt water damage be completely removed from a condo?",
    answer: "Yes, but it requires professional desalinization and specialized cleaning agents. Our Ocean City team is specifically trained to handle salt-water intrusions from coastal storms and Atlantic surges."
  },
  {
    question: "Is mold a risk in Ocean City condos after a water leak?",
    answer: "Absolutely. Ocean City's high humidity and salt air create an ideal environment for mold. We use industrial-strength dehumidifiers and anti-microbial treatments to prevent growth before it starts."
  },
  {
    question: "Do you provide emergency board-up services for beachfront properties?",
    answer: "Yes, we offer 24/7 emergency board-up and window sealing for Ocean City condos affected by hurricane-force winds or large waves on the boardwalk."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Ocean City Condo Restoration FAQ
          </h2>
          <p className="text-lg text-slate-600">
            Professional restoration expertise for Ocean City condo owners and beachfront property managers.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-slate-200 rounded-xl px-4 bg-white shadow-sm overflow-hidden">
              <AccordionTrigger className="text-left font-heading font-bold text-slate-900 hover:text-cyan-600 py-6 transition-colors leading-relaxed">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;




