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
      
      <div className="container-width relative z-10 py-20">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 tesla-gradient rounded-2xl flex items-center justify-center shadow-tesla">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-black">HookDaddy</h3>
                <p className="text-white/60 text-lg font-medium">Digital Content Solutions</p>
              </div>
            </div>
            
            <p className="text-white/80 mb-8 max-w-lg text-lg leading-relaxed font-light">
              Premium digital content solutions engineered for modern businesses. 
              We deliver innovative strategies that drive measurable results and sustainable growth worldwide.
            </p>
            
            <div className="glass-effect rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="w-5 h-5 text-tesla-blue" />
                <span className="font-semibold">Professional Support</span>
              </div>
              <p className="text-white/70 text-sm">
                Licensed digital content provider • Fully compliant with international standards
              </p>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold mb-8 text-xl text-white">Company</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="#about" 
                  className="text-white/70 hover:text-tesla-blue transition-all duration-300 text-lg font-medium group flex items-center"
                >
                  About Us
                  <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-white/70 hover:text-tesla-blue transition-all duration-300 text-lg font-medium group flex items-center"
                >
                  Our Services
                  <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-white/70 hover:text-tesla-blue transition-all duration-300 text-lg font-medium group flex items-center"
                >
                  Contact
                  <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a 
                  href="mailto:admin@hookdaddy.store" 
                  className="text-white/70 hover:text-success transition-all duration-300 text-lg font-medium group flex items-center"
                >
                  Careers
                  <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-bold mb-8 text-xl text-white">Legal & Support</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://hookdaddy.store/tc/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-warning transition-all duration-300 text-lg font-medium group flex items-center"
                >
                  Privacy Policy
                  <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a 
                  href="https://hookdaddy.store/tc/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-warning transition-all duration-300 text-lg font-medium group flex items-center"
                >
                  Terms & Conditions
                  <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a 
                  href="https://hookdaddy.store/tc/#refund" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-warning transition-all duration-300 text-lg font-medium group flex items-center"
                >
                  Return & Refund
                  <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a 
                  href="mailto:contact@hookdaddy.store" 
                  className="text-white/70 hover:text-tesla-blue transition-all duration-300 text-lg font-medium group flex items-center"
                >
                  Support Center
                  <Mail className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-12">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="text-center lg:text-left">
              <p className="text-white/60 text-lg mb-2">
                © 2025 HookDaddy. All rights reserved.
              </p>
              <p className="text-white/40 text-sm">
                Professional digital solutions • International compliance • Secure transactions
              </p>
            </div>
            
            <div className="flex items-center gap-8">
              <div className="glass-effect rounded-xl px-6 py-3 border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                  <span className="text-white/80 font-medium">System Status: All Operational</span>
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