import { Button } from "@/components/ui/button";
import { Menu, Zap } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/20">
      <div className="container-width">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 tesla-gradient rounded-xl flex items-center justify-center shadow-tesla">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">HookDaddy</h1>
              <p className="text-xs text-muted-foreground">Digital Content Solutions</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#about" 
              className="text-foreground hover:text-tesla-blue transition-colors font-medium relative group"
            >
              About
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-tesla-blue transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a 
              href="#services" 
              className="text-foreground hover:text-tesla-blue transition-colors font-medium relative group"
            >
              Services
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-tesla-blue transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a 
              href="#viral-hooks" 
              className="text-foreground hover:text-tesla-blue transition-colors font-medium relative group"
            >
              Viral Hooks
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-tesla-blue transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a 
              href="#contact" 
              className="text-foreground hover:text-tesla-blue transition-colors font-medium relative group"
            >
              Contact
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-tesla-blue transition-all duration-300 group-hover:w-full"></div>
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Button 
              size="sm" 
              className="hidden sm:flex tesla-gradient text-white shadow-tesla hover:shadow-elevated transition-all duration-300"
            >
              Get Started
            </Button>
            
            <Button variant="outline" size="sm" className="md:hidden border-border hover:border-tesla-blue">
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;