import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-card border-b border-border shadow-soft">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
              <span className="text-xl font-bold text-accent-foreground font-heading">H</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground font-heading">HookDaddy</h1>
              <p className="text-sm text-muted-foreground">Digital Content Solutions</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-foreground hover:text-accent transition-colors font-medium">About</a>
            <a href="#services" className="text-foreground hover:text-accent transition-colors font-medium">Services</a>
            <a href="#viral-hooks" className="text-foreground hover:text-accent transition-colors font-medium">Viral Hooks</a>
            <a href="#contact" className="text-foreground hover:text-accent transition-colors font-medium">Contact</a>
          </nav>

          <Button variant="outline" size="sm" className="md:hidden">
            <Menu className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;