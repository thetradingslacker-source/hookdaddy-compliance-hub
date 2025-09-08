import { Card, CardContent } from "@/components/ui/card";
import { Target, Zap, Shield, Rocket, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding tesla-hero-gradient relative overflow-hidden">
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
            <span>Industry Leading</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[0.9] tracking-tighter">
            Why Leading Brands
            <span className="block bg-gradient-to-r from-tesla-blue via-success to-warning bg-clip-text text-transparent">
              Choose HookDaddy
            </span>
          </h2>
          
          <p className="text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed font-light">
            We specialize in creating professional, results-driven digital solutions that deliver measurable impact. 
            From viral video hooks to educational resources, our content meets the highest standards of compliance, 
            innovation, and business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
          <Card className="group elevated-card hover:shadow-tesla transition-all duration-500 border-0 bg-card/80 backdrop-blur-sm overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-tesla-blue/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="p-8 text-center relative z-10">
              <div className="w-20 h-20 bg-gradient-blue rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-4">Proven Expertise</h4>
              <p className="text-muted-foreground leading-relaxed">Years of experience delivering viral content strategies that drive measurable results.</p>
            </CardContent>
          </Card>

          <Card className="group elevated-card hover:shadow-tesla transition-all duration-500 border-0 bg-card/80 backdrop-blur-sm overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-warning/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="p-8 text-center relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-warning to-warning/80 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-4">Rapid Results</h4>
              <p className="text-muted-foreground leading-relaxed">Strategies designed for speed, efficiency, and immediate impact on your business growth.</p>
            </CardContent>
          </Card>

          <Card className="group elevated-card hover:shadow-tesla transition-all duration-500 border-0 bg-card/80 backdrop-blur-sm overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-success/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="p-8 text-center relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-success to-success/80 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-4">Secure & Compliant</h4>
              <p className="text-muted-foreground leading-relaxed">Built with international payment standards and business compliance at the forefront.</p>
            </CardContent>
          </Card>

          <Card className="group elevated-card hover:shadow-tesla transition-all duration-500 border-0 bg-card/80 backdrop-blur-sm overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="p-8 text-center relative z-10">
              <div className="w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Rocket className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-4">Innovation First</h4>
              <p className="text-muted-foreground leading-relaxed">Fresh, creative solutions that keep your brand ahead of the competition.</p>
            </CardContent>
          </Card>
        </div>

        {/* Stats section */}
        <div className="glass-effect rounded-3xl p-12 lg:p-16 border border-white/10">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="space-y-2">
              <div className="text-5xl lg:text-6xl font-bold text-tesla-blue">2024</div>
              <div className="text-lg text-white/80 font-semibold">Founded</div>
              <div className="text-sm text-white/60">Innovation driven from day one</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl lg:text-6xl font-bold text-success">Global</div>
              <div className="text-lg text-white/80 font-semibold">Reach</div>
              <div className="text-sm text-white/60">Serving clients worldwide</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl lg:text-6xl font-bold text-warning">100%</div>
              <div className="text-lg text-white/80 font-semibold">Compliant</div>
              <div className="text-sm text-white/60">Meeting all industry standards</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;