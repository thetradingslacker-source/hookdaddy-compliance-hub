import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Building2, Mail, Clock, Shield, Send, TrendingUp } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding tesla-hero-gradient relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
      
      <div className="absolute top-20 left-20 w-72 h-72 bg-tesla-blue/20 rounded-full blur-3xl float-animation"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-success/15 rounded-full blur-3xl float-animation" style={{animationDelay: '3s'}}></div>
      
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
            <Card className="elevated-card border-0 bg-card/80 backdrop-blur-sm overflow-hidden">
              <CardHeader className="pb-6">
                <CardTitle className="text-3xl font-bold text-foreground">Business Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 tesla-gradient rounded-2xl flex items-center justify-center flex-shrink-0 shadow-tesla">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2 text-lg">Company</h4>
                    <p className="text-muted-foreground text-lg">HookDaddy Digital Solutions</p>
                    <p className="text-sm text-muted-foreground/70 mt-1">Premium content strategy experts</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-success to-success/80 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-tesla">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2 text-lg">Email</h4>
                    <p className="text-muted-foreground text-lg">contact@hookdaddy.store</p>
                    <p className="text-sm text-muted-foreground/70 mt-1">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-warning to-warning/80 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-tesla">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2 text-lg">Business Hours</h4>
                    <p className="text-muted-foreground text-lg">Monday - Friday: 9:00 AM - 6:00 PM UTC</p>
                    <p className="text-sm text-muted-foreground/70 mt-1">Extended support available</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0 shadow-tesla">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2 text-lg">Compliance</h4>
                    <p className="text-muted-foreground text-lg">International business standards</p>
                    <p className="text-sm text-muted-foreground/70 mt-1">Fully compliant & secure</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Partnership Card */}
            <Card className="elevated-card border-0 bg-gradient-to-br from-tesla-blue/5 to-success/5 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Enterprise Partnership</h3>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  Scale your business with our enterprise solutions. Custom content strategies, 
                  dedicated support, and proven frameworks for sustainable growth.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full py-4 text-lg font-semibold border-2 hover:border-tesla-blue hover:text-tesla-blue transition-all duration-300"
                >
                  Partnership Inquiries
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="elevated-card border-0 bg-card/80 backdrop-blur-sm overflow-hidden">
            <CardHeader className="pb-6">
              <CardTitle className="text-3xl font-bold text-foreground">Send us a Message</CardTitle>
              <p className="text-muted-foreground text-lg">Get personalized recommendations for your business</p>
            </CardHeader>
            <CardContent>
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-semibold text-foreground mb-3 block">
                      First Name
                    </label>
                    <Input 
                      placeholder="Your first name" 
                      className="py-4 text-lg border-2 focus:border-tesla-blue transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-foreground mb-3 block">
                      Last Name
                    </label>
                    <Input 
                      placeholder="Your last name" 
                      className="py-4 text-lg border-2 focus:border-tesla-blue transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-foreground mb-3 block">
                    Email Address
                  </label>
                  <Input 
                    type="email" 
                    placeholder="your.email@company.com" 
                    className="py-4 text-lg border-2 focus:border-tesla-blue transition-colors"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-foreground mb-3 block">
                    Company (Optional)
                  </label>
                  <Input 
                    placeholder="Your company name" 
                    className="py-4 text-lg border-2 focus:border-tesla-blue transition-colors"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-foreground mb-3 block">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Describe your goals and how we can help you achieve them..."
                    className="min-h-[140px] text-lg border-2 focus:border-tesla-blue transition-colors resize-none"
                  />
                </div>

                <Button 
                  size="lg" 
                  className="w-full magnetic-button tesla-gradient text-white text-xl py-6 font-bold rounded-xl shadow-tesla group"
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