import { Button } from "@/components/ui/button";
import { Menu, Zap, ArrowRight } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
      <div className="container-width">
        <div className="flex items-center justify-between py-6">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 tesla-gradient rounded-2xl flex items-center justify-center shadow-tesla group">
              <Zap className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div>
              <h1 className="text-2xl font-black text-white">HookDaddy</h1>
              <p className="text-sm text-white/60 font-medium">Digital Content Solutions</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-10">
            <a 
              href="#about" 
              className="text-white/80 hover:text-tesla-blue transition-all duration-300 font-semibold text-lg relative group"
            >
              About
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tesla-blue transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a 
              href="#services" 
              className="text-white/80 hover:text-tesla-blue transition-all duration-300 font-semibold text-lg relative group"
            >
              Services
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tesla-blue transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a 
              href="#viral-hooks" 
              className="text-white/80 hover:text-tesla-blue transition-all duration-300 font-semibold text-lg relative group"
            >
              Viral Hooks
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tesla-blue transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a 
              href="#contact" 
              className="text-white/80 hover:text-tesla-blue transition-all duration-300 font-semibold text-lg relative group"
            >
              Contact
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tesla-blue transition-all duration-300 group-hover:w-full"></div>
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Button 
              size="sm" 
              className="hidden sm:flex magnetic-button tesla-gradient text-white shadow-tesla font-bold px-6 py-3 rounded-xl"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <Button 
              variant="outline" 
              size="sm" 
              className="md:hidden border-white/30 text-white hover:border-tesla-blue hover:bg-tesla-blue/10 backdrop-blur-sm"
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;