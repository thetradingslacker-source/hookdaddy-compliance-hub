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
        <div className="text-center mb-24 animate-fade-in">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-effect text-sm font-semibold mb-8 border border-white/20 text-white/90">
            <TrendingUp className="w-5 h-5 text-tesla-blue" />
            <span>Professional Support</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[0.9] tracking-tighter">
            Get in
            <span className="block bg-gradient-to-r from-tesla-blue via-success to-warning bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          
          <p className="text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed font-light">
            Questions about our solutions? Our expert team is ready to help you scale your content strategy 
            and achieve measurable results.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="elevated-card border-0 bg-black/40 backdrop-blur-xl overflow-hidden border border-white/10">
              <CardHeader className="pb-6">
                <CardTitle className="text-3xl font-bold text-white">Business Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 tesla-gradient rounded-2xl flex items-center justify-center flex-shrink-0 shadow-tesla">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2 text-lg">Company</h4>
                    <p className="text-white/80 text-lg">HookDaddy Digital Solutions</p>
                    <p className="text-sm text-white/60 mt-1">Premium content strategy experts</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-success to-success/80 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-tesla">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2 text-lg">Email</h4>
                    <p className="text-white/80 text-lg">contact@hookdaddy.store</p>
                    <p className="text-sm text-white/60 mt-1">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-warning to-warning/80 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-tesla">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2 text-lg">Business Hours</h4>
                    <p className="text-white/80 text-lg">Monday - Friday: 9:00 AM - 6:00 PM UTC</p>
                    <p className="text-sm text-white/60 mt-1">Extended support available</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0 shadow-tesla">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2 text-lg">Compliance</h4>
                    <p className="text-white/80 text-lg">International business standards</p>
                    <p className="text-sm text-white/60 mt-1">Fully compliant & secure</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Partnership Card */}
            <Card className="elevated-card border-0 bg-black/40 backdrop-blur-xl overflow-hidden border border-white/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise Partnership</h3>
                <p className="text-white/80 mb-6 text-lg leading-relaxed">
                  Scale your business with our enterprise solutions. Custom content strategies, 
                  dedicated support, and proven frameworks for sustainable growth.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full py-4 text-lg font-semibold border-2 border-white/30 text-white hover:border-tesla-blue hover:text-tesla-blue hover:bg-tesla-blue/10 transition-all duration-300"
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
            <CardHeader className="pb-6">
              <CardTitle className="text-3xl font-bold text-white">Send us a Message</CardTitle>
              <p className="text-white/80 text-lg">Get personalized recommendations for your business</p>
            </CardHeader>
            <CardContent>
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-semibold text-white mb-3 block">
                      First Name
                    </label>
                    <Input 
                      placeholder="Your first name" 
                      className="py-4 text-lg border-2 bg-black/20 border-white/20 text-white placeholder:text-white/50 focus:border-tesla-blue transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-white mb-3 block">
                      Last Name
                    </label>
                    <Input 
                      placeholder="Your last name" 
                      className="py-4 text-lg border-2 bg-black/20 border-white/20 text-white placeholder:text-white/50 focus:border-tesla-blue transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-white mb-3 block">
                    Email Address
                  </label>
                  <Input 
                    type="email" 
                    placeholder="your.email@company.com" 
                    className="py-4 text-lg border-2 bg-black/20 border-white/20 text-white placeholder:text-white/50 focus:border-tesla-blue transition-colors"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-white mb-3 block">
                    Company (Optional)
                  </label>
                  <Input 
                    placeholder="Your company name" 
                    className="py-4 text-lg border-2 bg-black/20 border-white/20 text-white placeholder:text-white/50 focus:border-tesla-blue transition-colors"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-white mb-3 block">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Describe your goals and how we can help you achieve them..."
                    className="min-h-[140px] text-lg border-2 bg-black/20 border-white/20 text-white placeholder:text-white/50 focus:border-tesla-blue transition-colors resize-none"
                  />
                </div>

                <Button 
                  size="lg" 
                  className="w-full magnetic-button bg-white text-black hover:bg-white/90 text-xl py-6 font-bold rounded-xl shadow-tesla group"
                >
                  Send Message
                  <Send className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
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