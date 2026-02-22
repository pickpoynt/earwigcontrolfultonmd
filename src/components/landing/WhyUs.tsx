import { ShieldCheck, Clock, Award, Hammer } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "24/7 Rapid Response",
    description: "Squirrel emergencies don't wait. Our Fulton team provides round-the-clock assessment and mitigation to stop attic damage immediately."
  },
  {
    icon: Hammer,
    title: "Structural Exclusion",
    description: "We focus on permanent solutions. Our certified techs use heavy-duty steel and sealants to ensure squirrels can't chew their way back in."
  },
  {
    icon: Award,
    title: "Maryland Licensed",
    description: "Fully licensed and insured specifically for wildlife control in Howard County. We follow strict DNR protocols for humane removal."
  },
  {
    icon: ShieldCheck,
    title: "Home Integrity",
    description: "Beyond removal, we protect your wiring, insulation, and structural components from the hidden threats of rodent behavior."
  }
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl" />
            <img
              src="/3.jpeg"
              alt="Professional Squirrel Control Specialist"
              className="rounded-[3rem] shadow-2xl relative z-10 border border-white"
            />
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-xl z-20 border border-slate-100 max-w-[240px]">
              <p className="text-3xl font-bold text-indigo-600 mb-1">100%</p>
              <p className="text-sm font-bold text-slate-900 uppercase tracking-tight leading-tight">Exclusion Success Rate in Fulton</p>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 text-white mb-6 uppercase tracking-widest text-[10px] font-bold">
              <ShieldCheck className="w-4 h-4" />
              Fulton Squirrel Control Excellence
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-8 uppercase tracking-tight leading-tight">
              Why Howard County Trusts Our Squirrel Pros
            </h2>
            <p className="text-slate-600 text-lg mb-12 leading-relaxed italic font-medium">
              We specialize in the intersection of Fulton's residential architecture and the local squirrel population. Our methods are persistent, structural, and designed for long-term peace of mind.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-lg flex items-center justify-center shrink-0 border border-slate-100">
                    <feature.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 uppercase tracking-tight text-sm">{feature.title}</h4>
                    <p className="text-slate-600 text-xs leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-12 border-t border-slate-200">
              <div className="flex items-center gap-6">
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Ready to protect your home?</p>
                  <h4 className="text-2xl font-bold text-slate-900 uppercase tracking-tight leading-none">Call Fulton's Best</h4>
                </div>
                <a
                  href="tel:3238801224"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-sm transition-all shadow-lg shadow-indigo-900/20 hover:-translate-y-1 inline-flex items-center justify-center"
                >
                  (323) 880-1224
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
