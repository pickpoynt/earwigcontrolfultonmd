import { Shield, Microscope, MapPin, Building2, ClipboardCheck, Wind, Award, Sparkles, Droplets, Waves } from "lucide-react";

const reasons = [
  {
    icon: Building2,
    title: "Ocean City Condo Experts",
    description: "We are the leading specialists for condo water restoration in Ocean City, serving Maryland beach property owners for over 15 years."
  },
  {
    icon: Microscope,
    title: "Coastal Moisture Analysis",
    description: "Every Ocean City project begins with a professional thermal assessment, identifying the exact migration path of trapped water in condo walls."
  },
  {
    icon: Waves,
    title: "Hurrican & Surge Response",
    description: "We provide specialized extraction and drying for Ocean City beachfront units after major Atlantic storm surges or coastal flooding."
  },
  {
    icon: ClipboardCheck,
    title: "IICRC Certified & Local",
    description: "Our Ocean City team is IICRC certified in water damage restoration and structural drying, meeting the highest industry standards."
  },
  {
    icon: Shield,
    title: "Certified Dry Guarantee",
    description: "We don't just 'air out' your unit; we extract. If any moisture residue is found within 30 days, we'll return to your Ocean City property at zero cost."
  },
  {
    icon: Award,
    title: "HOA Approved Partner",
    description: "Working directly with Ocean City condo associations and property managers to ensure seamless restoration in multi-unit buildings."
  }
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Ocean City's Choice for Condo Restoration
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose the restoration team that Ocean City property owners trust. We specialize in turning a water-damaged unit into a dry, healthy home.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
                <reason.icon className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;




