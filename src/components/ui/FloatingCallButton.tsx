import { Phone } from "lucide-react";

const FloatingCallButton = () => {
    return (
        <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3">
            {/* Main Floating Button */}
            <a
                href="tel:8777921410"
                className="group relative flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white p-4 pr-6 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
                aria-label="Call Turbeville Slab Leak Pros"
            >
                {/* Glowing Background Pulse */}
                <div className="absolute inset-0 rounded-full bg-indigo-500 animate-ping opacity-20 group-hover:opacity-40"></div>

                {/* Icon Container */}
                <div className="relative w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-inner group-hover:rotate-12 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-indigo-600 fill-indigo-600/10" />
                </div>

                {/* Text Content */}
                <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-200 leading-none mb-1">Emergency Help</span>
                    <span className="text-lg font-black tracking-tight leading-none italic">
                        (877) 792-1410
                    </span>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
            </a>

            {/* Status Indicator */}
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full border border-slate-200 shadow-sm animate-pulse">
                <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>
                <span className="text-[10px] font-bold text-slate-600 uppercase tracking-tighter">Technicians On Call - Turbeville</span>
            </div>
        </div>
    );
};

export default FloatingCallButton;
