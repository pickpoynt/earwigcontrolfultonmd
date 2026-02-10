import { Waves, Shield, Building2, Wind, Droplets, Zap } from "lucide-react";

const CondoRestorationInfo = () => {
    return (
        <section id="condo-restoration-info" className="py-20 bg-gradient-to-br from-slate-50 via-cyan-50 to-slate-100">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                            Beachfront Condo Water Extraction in Ocean City, Maryland
                        </h2>
                        <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                            Ocean City's coastal environment and high-rise architecture present unique challenges for water damage. From storm surges to pipe bursts in multi-story buildings, we specialize in protecting your investment with surgical precision.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                        <div className="relative group overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                            <img
                                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80"
                                alt="Condo water damage Ocean City"
                                className="w-full h-full object-cover aspect-video brightness-90 group-hover:brightness-100 transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/40 to-transparent" />
                        </div>
                        <div className="space-y-8">
                            <h3 className="text-3xl font-bold text-slate-900 leading-tight">
                                Specialized High-Rise Water Mitigation
                            </h3>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Water damage in a condo isn't just your problem—it can affect neighbors above and below. Our Ocean City team uses advanced moisture mapping to track water migration through structural concrete and shared utility stacks.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { icon: Building2, text: "High-Rise Specialists" },
                                    { icon: Waves, text: "Ocean Surge Response" },
                                    { icon: Shield, text: "Mold Prevention" },
                                    { icon: Zap, text: "24/7 Rapid Response" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm border border-cyan-100/50">
                                        <item.icon className="w-6 h-6 text-cyan-600" />
                                        <span className="font-semibold text-slate-800">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Hurricane & Storm Response",
                                desc: "Ocean City is no stranger to severe weather. We provide emergency board-ups, roof tarping, and immediate water extraction after major coastal storms.",
                                icon: Wind
                            },
                            {
                                title: "Structural Drying",
                                desc: "Using high-velocity air movers and LGR dehumidifiers to pull moisture from drywall, insulation, and multi-layered flooring systems common in OC condos.",
                                icon: Droplets
                            },
                            {
                                title: "Insurance Liaison",
                                desc: "We work directly with condo associations and major insurance carriers in Maryland, providing digital documentation to streamline your claim.",
                                icon: Shield
                            }
                        ].map((card, i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 flex flex-col items-center text-center group hover:border-cyan-200 transition-all duration-300">
                                <div className="w-16 h-16 rounded-2xl bg-cyan-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <card.icon className="w-8 h-8 text-cyan-600" />
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 mb-4">{card.title}</h4>
                                <p className="text-slate-600 leading-relaxed">{card.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 p-10 rounded-[40px] bg-slate-900 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                            <div className="max-w-xl">
                                <h3 className="text-3xl font-bold mb-4">Protect Your Beachfront Investment</h3>
                                <p className="text-cyan-100 text-lg opacity-80 leading-relaxed">
                                    Don't let a small leak turn into a structural disaster. Our Ocean City experts are trained specifically for the unique architectural and environmental conditions of beachfront properties.
                                </p>
                            </div>
                            <div className="flex flex-col gap-4 w-full md:w-auto">
                                <a
                                    href="tel:3802660944"
                                    className="bg-cyan-500 hover:bg-cyan-400 text-white px-10 py-5 rounded-2xl font-bold text-xl text-center transition-all duration-300 shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:-translate-y-1"
                                >
                                    Call (380) 266-0944 Now
                                </a>
                                <p className="text-center text-sm text-cyan-200/60 font-medium tracking-wide flex items-center justify-center gap-2 italic">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                    Live Dispatchers Ready 24/7
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CondoRestorationInfo;
