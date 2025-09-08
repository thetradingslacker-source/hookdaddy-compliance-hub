import { Zap, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="tesla-hero-gradient text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
      
      <div className="absolute top-0 left-0 w-96 h-96 bg-tesla-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-success/10 rounded-full blur-3xl"></div>
      
      <div className="container-width relative z-10 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-transparent border border-white/20 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black">HookDaddy</h3>
                <p className="text-white/60 text-sm font-medium">Digital Content Solutions</p>
              </div>
            </div>
            
            <p className="text-white/80 mb-6 max-w-lg text-sm sm:text-base leading-relaxed font-light">
              Premium digital content solutions engineered for modern businesses. 
              We deliver innovative strategies that drive measurable results.
            </p>
            
            <div className="glass-effect rounded-xl p-4 border border-white/10">
              <div className="flex items-center gap-3 mb-2">
                <Mail className="w-4 h-4 text-tesla-blue" />
                <span className="font-semibold text-sm">Professional Support</span>
              </div>
              <p className="text-white/70 text-xs">
                Licensed digital content provider • Fully compliant with international standards
              </p>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold mb-6 text-lg text-white">Company</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#about" 
                  className="text-white/70 hover:text-tesla-blue transition-all duration-300 text-sm font-medium group flex items-center"
                >
                  About Us
                  <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-white/70 hover:text-tesla-blue transition-all duration-300 text-sm font-medium group flex items-center"
                >
                  Our Services
                  <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-white/70 hover:text-tesla-blue transition-all duration-300 text-sm font-medium group flex items-center"
                >
                  Contact
                  <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a 
                  href="mailto:admin@hookdaddy.store" 
                  className="text-white/70 hover:text-success transition-all duration-300 text-sm font-medium group flex items-center"
                >
                  Careers
                  <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-bold mb-6 text-lg text-white">Legal & Support</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://hookdaddy.store/tc/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-warning transition-all duration-300 text-sm font-medium group flex items-center"
                >
                  Privacy Policy
                  <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a 
                  href="https://hookdaddy.store/tc/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-warning transition-all duration-300 text-sm font-medium group flex items-center"
                >
                  Terms & Conditions
                  <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a 
                  href="https://hookdaddy.store/tc/#refund" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-warning transition-all duration-300 text-sm font-medium group flex items-center"
                >
                  Return & Refund
                  <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a 
                  href="mailto:contact@hookdaddy.store" 
                  className="text-white/70 hover:text-tesla-blue transition-all duration-300 text-sm font-medium group flex items-center"
                >
                  Support Center
                  <Mail className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="text-center lg:text-left">
              <p className="text-white/60 text-sm mb-2">
                © 2025 HookDaddy. All rights reserved.
              </p>
              <p className="text-white/40 text-xs">
                Professional digital solutions • International compliance • Secure transactions
              </p>
            </div>
            
            <div className="flex items-center">
              <div className="glass-effect rounded-lg px-4 py-2 border border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-pink-500 via-blue-500 to-green-500 rounded-full animate-pulse"></div>
                  <span className="text-white/80 font-medium text-xs">All Operational</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;