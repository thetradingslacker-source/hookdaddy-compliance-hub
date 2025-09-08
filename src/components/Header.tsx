import { Button } from "@/components/ui/button";
import { Menu, Zap, ArrowRight } from "lucide-react";

const Header = () => {
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
          
          <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/10">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;