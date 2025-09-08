const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                  <span className="text-xl font-bold text-accent-foreground">H</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">HookDaddy</h3>
                  <p className="text-primary-foreground/70 text-sm">Digital Content Solutions</p>
                </div>
              </div>
              <p className="text-primary-foreground/80 mb-4 max-w-md">
                Professional digital content solutions provider committed to delivering 
                innovative strategies for modern businesses worldwide.
              </p>
              <p className="text-primary-foreground/60 text-sm">
                © 2024 HookDaddy. All rights reserved.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <a href="#about" className="hover:text-accent transition-colors">About Us</a>
                </li>
                <li>
                  <a href="#services" className="hover:text-accent transition-colors">Our Services</a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">Careers</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">Cookie Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">Compliance</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-primary-foreground/60 text-sm mb-4 md:mb-0">
                Licensed digital content solutions provider. Fully compliant with international business standards.
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors text-sm">
                  Business License
                </a>
                <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors text-sm">
                  Payment Security
                </a>
                <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors text-sm">
                  Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;