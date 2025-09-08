import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Building2, Mail, Clock, Shield } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-heading">
              Get in Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Have questions about our products or services? Reach out today and our team will respond promptly.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card className="shadow-medium mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground font-heading">Business Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1 font-heading">Company</h4>
                      <p className="text-muted-foreground">HookDaddy Digital Solutions</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-gold-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1 font-heading">Email</h4>
                      <p className="text-muted-foreground">contact@hookdaddy.store</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-success-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1 font-heading">Business Hours</h4>
                      <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM UTC</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1 font-heading">Compliance</h4>
                      <p className="text-muted-foreground">Fully compliant with international business standards</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-premium border-accent/20 shadow-medium">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4 font-heading">Professional Partnership</h3>
                  <p className="text-muted-foreground mb-4">
                    We work with businesses of all sizes to deliver comprehensive digital content solutions. 
                    Our team is committed to maintaining the highest standards of professionalism and compliance.
                  </p>
                  <Button variant="outline" className="w-full">
                    Partnership Inquiries
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground font-heading">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        First Name
                      </label>
                      <Input placeholder="Your first name" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Last Name
                      </label>
                      <Input placeholder="Your last name" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email Address
                    </label>
                    <Input type="email" placeholder="your.email@company.com" />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Company (Optional)
                    </label>
                    <Input placeholder="Your company name" />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Please describe your inquiry or how we can help you..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button size="lg" className="w-full bg-gradient-accent text-accent-foreground hover:opacity-90 shadow-glow">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;