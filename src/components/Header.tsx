import { Button } from "@/components/ui/button";
import { Menu, Zap, ArrowRight, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-xl bg-gradient-to-r from-tesla-blue to-tesla-purple">
            <Zap className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-white tracking-tight">HookDaddy</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-white/80 hover:text-white transition-all duration-300 font-medium hover:-translate-y-0.5">
            About
          </a>
          <a href="#services" className="text-white/80 hover:text-white transition-all duration-300 font-medium hover:-translate-y-0.5">
            Services
          </a>
          <a href="#viral-hooks" className="text-white/80 hover:text-white transition-all duration-300 font-medium hover:-translate-y-0.5">
            Viral Hooks
          </a>
          <a href="#contact" className="text-white/80 hover:text-white transition-all duration-300 font-medium hover:-translate-y-0.5">
            Contact
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="default" size="sm" className="hidden sm:inline-flex font-semibold">
            Get Started
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden text-white hover:bg-white/10"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10">
          <nav className="container mx-auto px-6 py-6 space-y-4">
            <a 
              href="#about" 
              className="block text-white/80 hover:text-white transition-all duration-300 font-medium py-2"
              onClick={toggleMenu}
            >
              About
            </a>
            <a 
              href="#services" 
              className="block text-white/80 hover:text-white transition-all duration-300 font-medium py-2"
              onClick={toggleMenu}
            >
              Services
            </a>
            <a 
              href="#viral-hooks" 
              className="block text-white/80 hover:text-white transition-all duration-300 font-medium py-2"
              onClick={toggleMenu}
            >
              Viral Hooks
            </a>
            <a 
              href="#contact" 
              className="block text-white/80 hover:text-white transition-all duration-300 font-medium py-2"
              onClick={toggleMenu}
            >
              Contact
            </a>
            <Button variant="default" size="sm" className="font-semibold mt-4 w-full">
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;