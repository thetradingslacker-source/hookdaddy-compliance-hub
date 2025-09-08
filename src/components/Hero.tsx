import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, TrendingUp, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-hero text-primary-foreground py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center tesla-animate">
          <h1 className="text-mobile-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-6 md:mb-8 leading-tight font-heading tracking-tight">
            Unlock the Power of
            <span className="bg-gradient-accent bg-clip-text text-transparent font-normal"> Viral Content</span>
          </h1>
          
          <p className="text-mobile-lg md:text-xl lg:text-2xl mb-8 md:mb-12 text-primary-foreground/70 max-w-4xl mx-auto leading-relaxed font-light">
            HookDaddy delivers proven digital hooks, video packs, and marketing insights designed to help businesses capture attention, increase engagement, and grow revenue.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 md:mb-20">
            <a href="#viral-hooks">
              <Button size="lg" variant="secondary" className="text-base md:text-lg px-8 md:px-12 py-4 tesla-hover shadow-glow">
                Get Started Today
              </Button>
            </a>
            <a href="#services">
              <Button size="lg" variant="outline" className="text-base md:text-lg px-8 md:px-12 py-4 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 tesla-hover">
                Our Services
              </Button>
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <Card className="bg-card/5 border-primary-foreground/10 backdrop-blur-xl shadow-strong tesla-hover">
              <CardContent className="p-6 lg:p-8 text-center">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-accent rounded-2xl mx-auto mb-4 lg:mb-6 flex items-center justify-center">
                  <Target className="w-6 h-6 lg:w-8 lg:h-8 text-accent-foreground" />
                </div>
                <h3 className="text-mobile-lg md:text-lg lg:text-xl font-semibold mb-2 md:mb-3 text-primary-foreground font-heading">Targeted Solutions</h3>
                <p className="text-mobile-base md:text-base text-primary-foreground/60 leading-relaxed">Custom content strategies tailored to your business needs</p>
              </CardContent>
            </Card>

            <Card className="bg-card/5 border-primary-foreground/10 backdrop-blur-xl shadow-strong tesla-hover">
              <CardContent className="p-6 lg:p-8 text-center">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-gold rounded-2xl mx-auto mb-4 lg:mb-6 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 lg:w-8 lg:h-8 text-gold-foreground" />
                </div>
                <h3 className="text-mobile-lg md:text-lg lg:text-xl font-semibold mb-2 md:mb-3 text-primary-foreground font-heading">Proven Results</h3>
                <p className="text-mobile-base md:text-base text-primary-foreground/60 leading-relaxed">Data-driven approaches with measurable outcomes</p>
              </CardContent>
            </Card>

            <Card className="bg-card/5 border-primary-foreground/10 backdrop-blur-xl shadow-strong tesla-hover">
              <CardContent className="p-6 lg:p-8 text-center">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-success rounded-2xl mx-auto mb-4 lg:mb-6 flex items-center justify-center">
                  <Shield className="w-6 h-6 lg:w-8 lg:h-8 text-success-foreground" />
                </div>
                <h3 className="text-mobile-lg md:text-lg lg:text-xl font-semibold mb-2 md:mb-3 text-primary-foreground font-heading">Secure & Compliant</h3>
                <p className="text-mobile-base md:text-base text-primary-foreground/60 leading-relaxed">Full compliance with international payment standards</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;