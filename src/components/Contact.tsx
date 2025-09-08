import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Building2, Mail, Clock, Shield, Send, TrendingUp } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding tesla-hero-gradient relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-tesla-blue/20 rounded-full blur-3xl float-animation"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-warning/20 rounded-full blur-3xl float-animation" style={{animationDelay: '4s'}}></div>
      
      <div className="container-width relative z-10">
        <div className="text-center mb-16 sm:mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-effect text-sm font-semibold mb-6 border border-white/20 text-white/90">
            <TrendingUp className="w-4 h-4 text-tesla-blue" />
            <span>Professional Support</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
            Get in
            <span className="block bg-gradient-to-r from-tesla-blue via-success to-warning bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
            Questions about our solutions? Our expert team is ready to help you scale your content strategy 
            and achieve measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="elevated-card border-0 bg-black/40 backdrop-blur-xl overflow-hidden border border-white/10">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl sm:text-2xl font-bold text-white">Business Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 tesla-gradient rounded-xl flex items-center justify-center flex-shrink-0 shadow-tesla">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1 text-base">Company</h4>
                    <p className="text-white/80 text-base">HookDaddy Digital Solutions</p>
                    <p className="text-sm text-white/60 mt-1">Premium content strategy experts</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-success to-success/80 rounded-xl flex items-center justify-center flex-shrink-0 shadow-tesla">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1 text-base">Email</h4>
                    <p className="text-white/80 text-base">contact@hookdaddy.store</p>
                    <p className="text-sm text-white/60 mt-1">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-warning to-warning/80 rounded-xl flex items-center justify-center flex-shrink-0 shadow-tesla">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1 text-base">Business Hours</h4>
                    <p className="text-white/80 text-base">Monday - Friday: 9:00 AM - 6:00 PM UTC</p>
                    <p className="text-sm text-white/60 mt-1">Extended support available</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-tesla">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1 text-base">Compliance</h4>
                    <p className="text-white/80 text-base">International business standards</p>
                    <p className="text-sm text-white/60 mt-1">Fully compliant & secure</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Partnership Card */}
            <Card className="elevated-card border-0 bg-black/40 backdrop-blur-xl overflow-hidden border border-white/10">
              <CardContent className="p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Enterprise Partnership</h3>
                <p className="text-white/80 mb-4 text-base leading-relaxed">
                  Scale your business with our enterprise solutions. Custom content strategies, 
                  dedicated support, and proven frameworks for sustainable growth.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full py-3 text-base font-semibold border-2 border-white/30 text-white hover:border-tesla-blue hover:text-tesla-blue hover:bg-tesla-blue/10 transition-all duration-300"
                  asChild
                >
                  <a href="mailto:admin@hookdaddy.store">
                    Partnership Inquiries
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="elevated-card border-0 bg-black/40 backdrop-blur-xl overflow-hidden border border-white/10">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl sm:text-2xl font-bold text-white">Send us a Message</CardTitle>
              <p className="text-white/80 text-base">Get personalized recommendations for your business</p>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-white mb-2 block">
                      First Name
                    </label>
                    <Input 
                      placeholder="Your first name" 
                      className="py-3 text-base border-2 bg-black/20 border-white/20 text-white placeholder:text-white/50 focus:border-tesla-blue transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-white mb-2 block">
                      Last Name
                    </label>
                    <Input 
                      placeholder="Your last name" 
                      className="py-3 text-base border-2 bg-black/20 border-white/20 text-white placeholder:text-white/50 focus:border-tesla-blue transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-white mb-2 block">
                    Email Address
                  </label>
                  <Input 
                    type="email" 
                    placeholder="your.email@company.com" 
                    className="py-3 text-base border-2 bg-black/20 border-white/20 text-white placeholder:text-white/50 focus:border-tesla-blue transition-colors"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-white mb-2 block">
                    Company (Optional)
                  </label>
                  <Input 
                    placeholder="Your company name" 
                    className="py-3 text-base border-2 bg-black/20 border-white/20 text-white placeholder:text-white/50 focus:border-tesla-blue transition-colors"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-white mb-2 block">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Describe your goals and how we can help you achieve them..."
                    className="min-h-[120px] text-base border-2 bg-black/20 border-white/20 text-white placeholder:text-white/50 focus:border-tesla-blue transition-colors resize-none"
                  />
                </div>

                <Button 
                  size="default" 
                  className="w-full magnetic-button bg-white text-black hover:bg-white/90 text-base py-4 font-bold rounded-xl shadow-tesla group"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;