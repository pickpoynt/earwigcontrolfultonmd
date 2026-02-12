const faqs = [
  {
    question: "How did mold get into my Haddon Heights attic in the first place?",
    answer: "Most attic mold in Haddon Heights is caused by poor ventilation (blocked soffits), roof leaks, or bathroom exhaust fans venting directly into the attic. These factors create high humidity levels that allow spores to settle and grow on the organic wood decking."
  },
  {
    question: "Do I need to replace all the wood in my attic if there is mold?",
    answer: "Not usually. In most cases, we can use HEPA-vacuuming and dry-ice blasting or specialized antimicrobial cleaning to remove mold from the surface of the wood. We only recommend replacement if the structural integrity of the rafters is compromised by rot."
  },
  {
    question: "Will the mold in my attic move down into my living spaces?",
    answer: "Yes, potentially. Air in your home moves via the 'stack effect.' While attic air usually moves out, temperature fluctuations can cause spore-laden air to drop into your home's living areas, affecting your family's air quality."
  },
  {
    question: "How long does attic mold remediation take?",
    answer: "Most Haddon Heights residential attic projects are completed within 1 to 2 days. This includes the removal of contaminated insulation, biological cleaning of the wood decking, and the application of an antimicrobial sealant."
  },
  {
    question: "Does attic mold affect my home's resale value?",
    answer: "Absolutely. Most home inspectors in Camden County will flag attic mold as a major issue. Professional remediation with a transferrable warranty is often required to successfully close a real estate transaction."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
              Remediation <span className="text-indigo-600">Science FAQ</span>
            </h2>
            <p className="text-xl text-slate-600 font-medium leading-relaxed italic">
              Expert answers to common questions about attic mold remediation and structural restoration in Haddon Heights and Camden County.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl bg-white border border-slate-100 hover:border-indigo-200 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 group"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-indigo-700 transition-colors flex items-start gap-3">
                  <span className="text-indigo-500">Q:</span> {faq.question}
                </h3>
                <p className="text-slate-600 leading-relaxed font-medium pl-8 border-l-2 border-indigo-100">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
