import { Card, CardContent } from "@/components/ui/card";
import { Target, Zap, Shield, Rocket } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto tesla-animate">
          <div className="text-center mb-16 md:mb-20 lg:mb-24">
            <h2 className="text-mobile-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-foreground mb-6 md:mb-8 font-heading tracking-tight">
              Who We Are
            </h2>
            <p className="text-mobile-base md:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
              At HookDaddy, we specialize in creating professional, results-driven digital solutions. From viral video hooks to educational resources, our content is crafted to meet the highest standards of compliance, innovation, and business impact. With a focus on global accessibility and secure transactions, we're trusted by entrepreneurs, marketers, and brands worldwide.
            </p>
          </div>

          <div className="mb-16 md:mb-20 lg:mb-24">
            <h3 className="text-mobile-2xl md:text-3xl lg:text-4xl font-light text-foreground mb-12 md:mb-16 text-center font-heading tracking-tight">Why Choose HookDaddy</h3>
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
              <Card className="shadow-medium text-center tesla-hover border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 lg:p-8">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-accent rounded-3xl flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8 lg:w-10 lg:h-10 text-accent-foreground" />
                  </div>
                  <h4 className="text-mobile-lg md:text-lg lg:text-xl font-medium text-foreground mb-3 font-heading">Proven Expertise</h4>
                  <p className="text-mobile-sm md:text-base text-muted-foreground leading-relaxed">Years of experience in digital marketing and viral content creation.</p>
                </CardContent>
              </Card>

              <Card className="shadow-medium text-center tesla-hover border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 lg:p-8">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-gold rounded-3xl flex items-center justify-center mx-auto mb-6">
                    <Zap className="w-8 h-8 lg:w-10 lg:h-10 text-gold-foreground" />
                  </div>
                  <h4 className="text-mobile-lg md:text-lg lg:text-xl font-medium text-foreground mb-3 font-heading">Rapid Results</h4>
                  <p className="text-mobile-sm md:text-base text-muted-foreground leading-relaxed">Strategies designed for speed, efficiency, and measurable growth.</p>
                </CardContent>
              </Card>

              <Card className="shadow-medium text-center tesla-hover border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 lg:p-8">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-success rounded-3xl flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-8 h-8 lg:w-10 lg:h-10 text-success-foreground" />
                  </div>
                  <h4 className="text-mobile-lg md:text-lg lg:text-xl font-medium text-foreground mb-3 font-heading">Secure & Compliant</h4>
                  <p className="text-mobile-sm md:text-base text-muted-foreground leading-relaxed">Built with international payment and business standards in mind.</p>
                </CardContent>
              </Card>

              <Card className="shadow-medium text-center tesla-hover border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 lg:p-8">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-primary rounded-3xl flex items-center justify-center mx-auto mb-6">
                    <Rocket className="w-8 h-8 lg:w-10 lg:h-10 text-primary-foreground" />
                  </div>
                  <h4 className="text-mobile-lg md:text-lg lg:text-xl font-medium text-foreground mb-3 font-heading">Innovation First</h4>
                  <p className="text-mobile-sm md:text-base text-muted-foreground leading-relaxed">Fresh, creative solutions that keep your brand ahead of the curve.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-premium rounded-3xl lg:rounded-[2rem] p-8 md:p-12 lg:p-16 border-0 shadow-strong">
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12 text-center">
              <div>
                <div className="text-mobile-3xl md:text-4xl lg:text-5xl font-light text-accent mb-2 font-heading">2024</div>
                <div className="text-mobile-base md:text-lg text-muted-foreground font-light">Established</div>
              </div>
              <div>
                <div className="text-mobile-3xl md:text-4xl lg:text-5xl font-light text-gold mb-2 font-heading">Global</div>
                <div className="text-mobile-base md:text-lg text-muted-foreground font-light">Reach</div>
              </div>
              <div>
                <div className="text-mobile-3xl md:text-4xl lg:text-5xl font-light text-success mb-2 font-heading">100%</div>
                <div className="text-mobile-base md:text-lg text-muted-foreground font-light">Compliant</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;