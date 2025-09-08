import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Video, BookOpen, Target, TrendingUp, Users, Zap } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="section-padding bg-secondary/50">
      <div className="container-width">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4 text-tesla-blue" />
            <span>Solutions That Scale</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Everything You Need
            <span className="block text-tesla-blue">To Go Viral</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Professional content solutions designed to capture attention, increase engagement, and drive measurable results.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Viral Hooks Pack */}
          <Card className="group elevated-card hover:shadow-tesla transition-all duration-500 border-0 bg-card/80 backdrop-blur-sm overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-tesla-blue/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardHeader className="pb-6 relative z-10">
              <div className="w-16 h-16 bg-gradient-blue rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Video className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-foreground mb-3">
                Viral Hooks Packs
              </CardTitle>
              <div className="flex items-center gap-2 text-sm text-tesla-blue font-medium">
                <Users className="w-4 h-4" />
                <span>10,000+ downloads</span>
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Professionally crafted video hooks designed to capture attention within the first 3 seconds.
              </p>
              <div className="space-y-3 mb-8 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-tesla-blue rounded-full"></div>
                  <span>50+ proven hook formulas</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-tesla-blue rounded-full"></div>
                  <span>Industry-specific templates</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-tesla-blue rounded-full"></div>
                  <span>Performance analytics</span>
                </div>
              </div>
              <Button variant="outline" className="w-full group-hover:border-tesla-blue group-hover:text-tesla-blue transition-colors" asChild>
                <a href="#viral-hooks">Explore Hooks</a>
              </Button>
            </CardContent>
          </Card>

          {/* Educational Content */}
          <Card className="group elevated-card hover:shadow-tesla transition-all duration-500 border-0 bg-card/80 backdrop-blur-sm overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-success/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardHeader className="pb-6 relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-success to-success/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-foreground mb-3">
                Educational Content
              </CardTitle>
              <div className="flex items-center gap-2 text-sm text-success font-medium">
                <BookOpen className="w-4 h-4" />
                <span>Premium resources</span>
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Comprehensive guides, PDFs, and resources for marketers and business owners.
              </p>
              <div className="space-y-3 mb-8 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-success rounded-full"></div>
                  <span>Step-by-step tutorials</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-success rounded-full"></div>
                  <span>Case study breakdowns</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-success rounded-full"></div>
                  <span>Marketing playbooks</span>
                </div>
              </div>
              <Button variant="outline" className="w-full group-hover:border-success group-hover:text-success transition-colors" asChild>
                <a href="#educational-content">Browse Library</a>
              </Button>
            </CardContent>
          </Card>

          {/* Custom Solutions */}
          <Card className="group elevated-card hover:shadow-tesla transition-all duration-500 border-0 bg-card/80 backdrop-blur-sm overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-warning/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardHeader className="pb-6 relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-warning to-warning/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-foreground mb-3">
                Custom Solutions
              </CardTitle>
              <div className="flex items-center gap-2 text-sm text-warning font-medium">
                <Zap className="w-4 h-4" />
                <span>Tailored approach</span>
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Tailored strategies and content packages for businesses seeking scalable growth.
              </p>
              <div className="space-y-3 mb-8 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-warning rounded-full"></div>
                  <span>1-on-1 strategy sessions</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-warning rounded-full"></div>
                  <span>Custom content creation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-warning rounded-full"></div>
                  <span>Performance optimization</span>
                </div>
              </div>
              <Button variant="outline" className="w-full group-hover:border-warning group-hover:text-warning transition-colors" asChild>
                <a href="#custom-solutions">Get Custom Quote</a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Button size="lg" className="tesla-gradient text-white px-12 py-6 text-lg font-semibold rounded-xl shadow-tesla hover:shadow-elevated transition-all duration-300">
            Start Your Journey Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;