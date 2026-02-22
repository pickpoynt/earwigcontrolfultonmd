import { ArrowRight, Search, ShieldCheck, Target, Activity, Home } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Expert <span className="text-indigo-600">coyote control McCook NE</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Southwest Nebraska ranchers and property owners trust our specialized team for strategic coyote removal, livestock defense, and property securing. We manage predator threats with precision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Target,
              title: "Livestock Defense",
              description: "Specialized predator management plans for calving, lambing, and poultry operations in McCook — ensuring your livestock remains safe from pack predation.",
            },
            {
              icon: Search,
              title: "Thermal Mapping",
              description: "Advanced nocturnal surveillance using thermal imaging to track coyote movements and identify denning sites near your property lines.",
            },
            {
              icon: ShieldCheck,
              title: "Property Securing",
              description: "Installation of predator-proof fencing, motion deterrents, and property hardening techniques to discourage coyotes from entering residential zones.",
            },
            {
              icon: Activity,
              title: "Humane Removal",
              description: "Professional, licensed removal of problem individuals and aggressive packs using humane and regulated wildlife management protocols.",
            }
          ].map((service, index) => (
            <div key={index} className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300">
              <a href="tel:3238801224">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                  <service.icon className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-700 uppercase tracking-tight">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium mb-6">{service.description}</p>
                <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                  Call Now <ArrowRight className="w-4 h-4" />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
