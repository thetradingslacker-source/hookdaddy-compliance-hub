import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Hero = () => {
  return (
    <section className="bg-gradient-hero text-primary-foreground py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Professional Digital
            <span className="bg-gradient-accent bg-clip-text text-transparent"> Content Solutions</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
            HookDaddy delivers enterprise-grade digital content services to businesses worldwide, 
            specializing in viral marketing strategies and educational resources.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Learn More
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              Our Services
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <Card className="bg-card/10 border-primary-foreground/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-primary-foreground">Targeted Solutions</h3>
                <p className="text-primary-foreground/70">Custom content strategies tailored to your business needs</p>
              </CardContent>
            </Card>

            <Card className="bg-card/10 border-primary-foreground/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-gold rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-primary-foreground">Proven Results</h3>
                <p className="text-primary-foreground/70">Data-driven approaches with measurable outcomes</p>
              </CardContent>
            </Card>

            <Card className="bg-card/10 border-primary-foreground/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-success rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-primary-foreground">Secure & Compliant</h3>
                <p className="text-primary-foreground/70">Full compliance with international payment standards</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;