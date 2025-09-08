import { Card, CardContent } from "@/components/ui/card";
import { Target, Zap, Shield, Rocket } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-heading">
              Who We Are
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              At HookDaddy, we specialize in creating professional, results-driven digital solutions. From viral video hooks to educational resources, our content is crafted to meet the highest standards of compliance, innovation, and business impact. With a focus on global accessibility and secure transactions, we're trusted by entrepreneurs, marketers, and brands worldwide.
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-bold text-foreground mb-12 text-center font-heading">Why Choose HookDaddy</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="shadow-medium text-center hover:shadow-strong transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-3 font-heading">Proven Expertise</h4>
                  <p className="text-muted-foreground">Years of experience in digital marketing and viral content creation.</p>
                </CardContent>
              </Card>

              <Card className="shadow-medium text-center hover:shadow-strong transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-gold rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-gold-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-3 font-heading">Rapid Results</h4>
                  <p className="text-muted-foreground">Strategies designed for speed, efficiency, and measurable growth.</p>
                </CardContent>
              </Card>

              <Card className="shadow-medium text-center hover:shadow-strong transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-success rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-success-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-3 font-heading">Secure & Compliant</h4>
                  <p className="text-muted-foreground">Built with international payment and business standards in mind.</p>
                </CardContent>
              </Card>

              <Card className="shadow-medium text-center hover:shadow-strong transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Rocket className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-3 font-heading">Innovation First</h4>
                  <p className="text-muted-foreground">Fresh, creative solutions that keep your brand ahead of the curve.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-premium rounded-2xl p-8 border border-border shadow-medium">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-accent mb-2 font-heading">2024</div>
                <div className="text-muted-foreground">Established</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold mb-2 font-heading">Global</div>
                <div className="text-muted-foreground">Reach</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-success mb-2 font-heading">100%</div>
                <div className="text-muted-foreground">Compliant</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;