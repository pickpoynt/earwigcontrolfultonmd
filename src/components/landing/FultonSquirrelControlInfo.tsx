import { ShieldCheck, Target, Activity, ClipboardCheck, MapPin, Locate, Search, Zap, AlertTriangle, Home, Shield, Volume2, Sparkles, Sprout, Hammer } from "lucide-react";

const FultonSquirrelControlInfo = () => {
    return (
        <section id="squirrel-info" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/1.jpeg')] opacity-[0.03] bg-cover bg-center" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 mb-6 uppercase tracking-widest text-xs font-bold">
                            <Locate className="w-4 h-4" />
                            <span>Fulton Maryland Wildlife Elite</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
                            Expert <span className="text-indigo-600">Squirrel pest control in Fulton MD</span>
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed italic font-medium">
                            Protecting your attic, roofline, and electrical systems from destructive hoarding and nesting behavior. Our Fulton-based squirrel control specialists deploy exclusionary tactics and advanced removal methods to ensure the structural integrity of your Howard County property.
                        </p>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
                                    <AlertTriangle className="w-7 h-7 text-rose-500" />
                                    The Squirrel Threat in Howard County
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <Search className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Attic Invasion Analysis</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                In Maryland, Eastern Gray Squirrels are notorious for exploiting roof gaps and attic vents. Once inside, they compress insulation and chew through wiring, creating significant fire hazards. Our Squirrel pest control in Fulton MD team performs comprehensive attic audits to identify every entry point and hidden damage.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <Hammer className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Structural Exclusion</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                We don't just trap squirrels; we keep them out. We use industrial-grade steel mesh and poly-sealants to reinforce soffits, ridge vents, and gable louvers. Our exclusion techniques are designed to withstand the persistent gnawing of determined Maryland wildlife.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <ShieldCheck className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Wiring & Insulation Safety</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                Squirrels constantly gnaw to keep their teeth sharp. This often results in stripped electrical wires and damaged HVAC ducts. We provide restoration services to repair the sub-layers of your home and ensure your attic is clean, safe, and energy-efficient.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
                                    <MapPin className="w-7 h-7 text-indigo-600" />
                                    Serving Fulton & Howard County
                                </h3>
                                <p className="text-slate-600 mb-6 leading-relaxed font-medium">
                                    Rapid response for Squirrel pest control in Fulton MD in:
                                </p>
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        "Fulton",
                                        "Scaggsville",
                                        "Maple Lawn",
                                        "North Laurel",
                                        "Columbia",
                                        "Highland",
                                        "Clarksville",
                                        "West Laurel"
                                    ].map((area, index) => (
                                        <div key={index} className="flex items-center gap-2 p-3 bg-white rounded-lg border border-slate-100 shadow-sm">
                                            <div className="w-2 h-2 rounded-full bg-indigo-500" />
                                            <span className="text-sm font-bold text-slate-700 uppercase tracking-tight">{area}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-8 bg-indigo-600 rounded-3xl text-white shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                                <img src="/3.jpeg" alt="Squirrel Control Mitigation" className="absolute bottom-0 right-0 w-40 h-40 object-cover opacity-20 rounded-tl-full" />
                                <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">The Fulton Standard</h4>
                                <p className="text-indigo-50 text-sm leading-relaxed italic">
                                    In Fulton, we live in close proximity to beautiful wooded areas. Our Squirrel pest control in Fulton MD experts are deeply familiar with the urban-to-forest intersection of Howard County. We provide high-efficiency management plans that respect the local ecosystem while providing absolute security for your home.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Signs Section */}
                    <div className="bg-slate-50 rounded-3xl p-8 md:p-12 mb-12 border border-slate-200">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight text-center">
                            Signs You Need <span className="text-indigo-600">Squirrel pest control in Fulton MD</span>
                        </h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { icon: Volume2, title: "Nocturnal Scratching", desc: "Scurrying and scratching sounds in the attic during early morning or sunset hours are primary indicators that squirrels have established a nesting site." },
                                { icon: Activity, title: "Fascia Board Damage", desc: "Gnaw marks on corners of fascia boards or around utility penetrations often mean squirrels are enlarging holes to gain access to your attic." },
                                { icon: Zap, title: "Electrical Issues", desc: "Flickering lights or tripped breakers can sometimes be traced back to squirrels chewing through wire jackets and insulation in crawl spaces." }
                            ].map((item, i) => (
                                <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4">
                                        <item.icon className="w-6 h-6 text-indigo-600" />
                                    </div>
                                    <h4 className="font-bold text-slate-900 mb-2 uppercase tracking-tight text-sm">{item.title}</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Technical CTA Box */}
                    <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden border border-indigo-500/20">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl" />
                        <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                            <div>
                                <h3 className="text-3xl font-bold mb-4 uppercase tracking-tight">
                                    Evict Your Unwanted Tenants Today
                                </h3>
                                <p className="text-slate-400 leading-relaxed mb-6 italic font-medium">
                                    Don't wait for a fire or structural damage to occur. Our Fulton squirrel control team provides immediate assessment and intervention to remove pests and seal your property.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">Wildlife Certified</div>
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">Home Safety</div>
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">24/7 Response</div>
                                </div>
                            </div>
                            <div className="bg-indigo-600 rounded-2xl p-8 text-center transform hover:scale-105 transition-transform border border-indigo-400/30 shadow-2xl">
                                <p className="text-indigo-100 text-sm font-bold uppercase tracking-widest mb-2">Squirrel pest control in Fulton MD</p>
                                <a href="tel:3238801224" className="text-4xl font-bold transition-colors block mb-4 hover:text-white">
                                    (323) 880-1224
                                </a>
                                <p className="text-indigo-100 text-sm italic font-medium">
                                    Squirrel pest control in Fulton MD
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FultonSquirrelControlInfo;
