import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Video, BookOpen, Target, TrendingUp, Users, Zap } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="section-padding tesla-hero-gradient relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-tesla-blue/20 rounded-full blur-3xl float-animation"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-success/20 rounded-full blur-3xl float-animation" style={{animationDelay: '3s'}}></div>
      
      <div className="container-width relative z-10">
        <div className="text-center mb-24 animate-fade-in">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-effect text-sm font-semibold mb-8 border border-white/20 text-white/90">
            <TrendingUp className="w-5 h-5 text-tesla-blue" />
            <span>Enterprise-Grade Solutions</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[0.9] tracking-tighter">
            Everything You Need
            <span className="block bg-gradient-to-r from-tesla-blue via-success to-warning bg-clip-text text-transparent">
              To Dominate
            </span>
          </h2>
          
          <p className="text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed font-light">
            Professional content solutions engineered to capture attention, maximize engagement, 
            and deliver <span className="text-white font-semibold">measurable ROI</span>. 
            Join the elite tier of content creators.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Viral Hooks Pack */}
          <Card className="group elevated-card hover:shadow-tesla transition-all duration-500 border-0 bg-black/40 backdrop-blur-xl overflow-hidden relative border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-tesla-blue/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardHeader className="pb-6 relative z-10">
              <div className="w-16 h-16 bg-gradient-blue rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Video className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-white mb-3">
                Viral Hooks Packs
              </CardTitle>
              <div className="flex items-center gap-2 text-sm text-tesla-blue font-medium">
                <Users className="w-4 h-4" />
                <span>10,000+ downloads</span>
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <p className="text-white/70 mb-8 text-lg leading-relaxed">
                Professionally crafted video hooks designed to capture attention within the first 3 seconds.
              </p>
              <div className="space-y-3 mb-8 text-sm">
                <div className="flex items-center gap-2 text-white/80">
                  <div className="w-1.5 h-1.5 bg-tesla-blue rounded-full"></div>
                  <span>50+ proven hook formulas</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <div className="w-1.5 h-1.5 bg-tesla-blue rounded-full"></div>
                  <span>Industry-specific templates</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <div className="w-1.5 h-1.5 bg-tesla-blue rounded-full"></div>
                  <span>Performance analytics</span>
                </div>
              </div>
              <Button variant="outline" className="w-full border-white/30 text-white hover:border-tesla-blue hover:text-tesla-blue hover:bg-tesla-blue/10 transition-colors" asChild>
                <a href="#viral-hooks">Explore Hooks</a>
              </Button>
            </CardContent>
          </Card>

          {/* Educational Content */}
          <Card className="group elevated-card hover:shadow-tesla transition-all duration-500 border-0 bg-black/40 backdrop-blur-xl overflow-hidden relative border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-success/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardHeader className="pb-6 relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-success to-success/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-white mb-3">
                Educational Content
              </CardTitle>
              <div className="flex items-center gap-2 text-sm text-success font-medium">
                <BookOpen className="w-4 h-4" />
                <span>Premium resources</span>
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <p className="text-white/70 mb-8 text-lg leading-relaxed">
                Comprehensive guides, PDFs, and resources for marketers and business owners.
              </p>
              <div className="space-y-3 mb-8 text-sm text-white/80">
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
              <Button variant="outline" className="w-full border-white/30 text-white hover:border-success hover:text-success hover:bg-success/10 transition-colors" asChild>
                <a href="#educational-content">Browse Library</a>
              </Button>
            </CardContent>
          </Card>

          {/* Custom Solutions */}
          <Card className="group elevated-card hover:shadow-tesla transition-all duration-500 border-0 bg-black/40 backdrop-blur-xl overflow-hidden relative border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-warning/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardHeader className="pb-6 relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-warning to-warning/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-white mb-3">
                Custom Solutions
              </CardTitle>
              <div className="flex items-center gap-2 text-sm text-warning font-medium">
                <Zap className="w-4 h-4" />
                <span>Tailored approach</span>
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <p className="text-white/70 mb-8 text-lg leading-relaxed">
                Tailored strategies and content packages for businesses seeking scalable growth.
              </p>
              <div className="space-y-3 mb-8 text-sm text-white/80">
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
              <Button variant="outline" className="w-full border-white/30 text-white hover:border-warning hover:text-warning hover:bg-warning/10 transition-colors" asChild>
                <a href="#custom-solutions">Get Custom Quote</a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Premium bottom CTA */}
        <div className="text-center">
          <div className="glass-effect rounded-3xl p-12 lg:p-16 border border-white/10">
            <h3 className="text-3xl md:text-5xl font-black text-white mb-6">
              Ready to <span className="text-tesla-blue">Scale?</span>
            </h3>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join thousands of successful creators who've transformed their content strategy with our proven systems.
            </p>
            <Button 
              size="lg" 
              className="magnetic-button bg-white text-black hover:bg-white/90 px-16 py-8 text-xl font-bold rounded-2xl shadow-intense hover:shadow-tesla transition-all duration-500"
            >
              Start Your Journey Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;