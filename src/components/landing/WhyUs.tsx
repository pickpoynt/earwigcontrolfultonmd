import { ShieldCheck, MapPin, Activity, Locate, ClipboardCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 mb-6 uppercase tracking-widest text-xs font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>McCook Coyote Control Excellence</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
              Why Red Willow County Trusts <span className="text-indigo-600">Our Predator Pros</span>
            </h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-bold italic">
              When coyotes threaten your livestock and pets, our certified wildlife specialists provide the rugged and reliable solutions McCook owners depend on.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { icon: Activity, title: "24/7 Rapid Response", description: "Coyotes don't follow a schedule. We provide emergency predator mitigation across McCook any time of day or night." },
                { icon: Locate, title: "Southwest NE Local", description: "Based right here in McCook, our team understands the local geography of the Republican River valley and the behavioral patterns of our local packs." },
                { icon: ClipboardCheck, title: "Certified Experts", description: "Our technicians are licensed wildlife damage control professionals, expert in NE state regulations and humane predator management." },
                { icon: Sparkles, title: "Asset Protection", description: "We prioritize the safety of your livestock and domestic animals, using high-tech tracking and exclusion to create a permanent safety zone." }
              ].map((feature, index) => (
                <div key={index} className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-indigo-600 border border-slate-100 shadow-sm">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 uppercase tracking-wide text-sm">{feature.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed italic font-medium">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="aspect-square rounded-[2rem] overflow-hidden border-4 border-indigo-500/20 shadow-2xl relative group">
              <img
                src="/2.jpeg"
                alt="Predator Control Assessment McCook"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
            </div>
            <div className="aspect-square rounded-[2rem] overflow-hidden border-4 border-indigo-500/20 shadow-2xl relative group mt-8 md:mt-16">
              <img
                src="/3.jpeg"
                alt="Wildlife Protection McCook Nebraska"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
                <p className="text-indigo-400 font-bold uppercase tracking-widest text-[10px] mb-2">Predator Problems?</p>
                <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">Call McCook's Best</h4>
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold h-10 px-6 rounded-xl uppercase tracking-widest text-[10px] w-full" asChild>
                  <a href="tel:3238801224">Call Now</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
