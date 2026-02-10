import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, Waves, Building2 } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Condo Restoration", href: "#condo-restoration-info" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isScrolled ? "bg-cyan-600" : "bg-white"}`}>
              <Building2 className={`w-6 h-6 ${isScrolled ? "text-white" : "text-cyan-600"}`} />
            </div>
            <div>
              <span className={`font-heading font-bold text-xl block leading-none ${isScrolled ? "text-slate-900" : "text-white"}`}>
                Ocean City
              </span>
              <span className={`text-sm font-medium ${isScrolled ? "text-cyan-600" : "text-cyan-100"}`}>
                Condo Restoration Pros
              </span>
            </div>
          </div>



          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-cyan-400 ${isScrolled ? "text-slate-600" : "text-white/90"
                  }`}
              >
                {link.name}
              </a>
            ))}
            <Button
              className={`${isScrolled
                ? "bg-cyan-600 text-white hover:bg-cyan-700"
                : "bg-white text-cyan-900 hover:bg-cyan-50"
                }`}
            >
              <a href="tel:3802660944" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                (380) 266-0944
              </a>
            </Button>
          </nav>



          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-slate-900" : "text-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-slate-900" : "text-white"}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-100 animate-fade-in bg-white max-h-[80vh] overflow-y-auto">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-600 hover:text-cyan-600 transition-colors font-medium py-2 px-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white" size="lg" asChild>
                <a href="tel:3802660944" className="flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  (380) 266-0944
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header >
  );
};

export default Header;
