import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle, Zap, Sparkles, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center tesla-hero-gradient overflow-hidden pt-32">
      {/* Sophisticated background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_35%,rgba(59,130,246,0.05)_50%,transparent_65%)]"></div>
      </div>
      
      {/* Premium floating orbs */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-tesla-blue/30 rounded-full blur-3xl float-animation"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-success/20 rounded-full blur-3xl float-animation" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-warning/10 rounded-full blur-3xl float-animation" style={{animationDelay: '4s'}}></div>
      
      <div className="container-width relative z-10">
        <div className="max-w-7xl mx-auto text-center space-y-16 animate-slide-up">
          {/* Premium badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-effect text-sm font-semibold text-white/90 border border-white/20">
            <Sparkles className="w-5 h-5 text-tesla-blue animate-pulse" />
            <span>Trusted by 10,000+ Creators Worldwide</span>
            <TrendingUp className="w-4 h-4 text-success" />
          </div>
          
          {/* Epic headline */}
          <div className="space-y-8">
            <h1 className="hero-text text-white font-black leading-[0.85]">
              Create Content
              <br />
              <span className="bg-gradient-to-r from-tesla-blue via-success to-warning bg-clip-text text-transparent">
                That Converts
              </span>
            </h1>
            
            <p className="text-xl md:text-3xl text-white/80 max-w-5xl mx-auto leading-relaxed font-light">
              Professional video hooks and marketing strategies engineered to capture attention in 
              <span className="text-tesla-blue font-semibold"> 3 seconds</span>, boost engagement by 
              <span className="text-success font-semibold"> 300%</span>, and drive real business results.
            </p>
          </div>
          
          {/* Premium CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Button 
              size="lg" 
              className="magnetic-button tesla-gradient text-white text-xl px-12 py-8 rounded-2xl font-bold text-shadow-lg group min-w-[280px]"
            >
              Start Creating Now
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-xl px-12 py-8 rounded-2xl border-2 border-white/30 text-white hover:border-tesla-blue hover:bg-tesla-blue/10 hover:text-tesla-blue transition-all duration-500 group font-bold backdrop-blur-sm min-w-[280px]"
            >
              <PlayCircle className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
              Watch Demo
            </Button>
          </div>
          
          {/* Enhanced social proof */}
          <div className="pt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="glass-effect rounded-2xl p-6 text-center border border-white/10">
                <div className="text-4xl font-black text-tesla-blue mb-2">10K+</div>
                <div className="text-white/70 font-medium">Active Creators</div>
                <div className="text-sm text-white/50 mt-1">Using our hooks daily</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 text-center border border-white/10">
                <div className="text-4xl font-black text-success mb-2">50M+</div>
                <div className="text-white/70 font-medium">Views Generated</div>
                <div className="text-sm text-white/50 mt-1">Across all platforms</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 text-center border border-white/10">
                <div className="text-4xl font-black text-warning mb-2">300%</div>
                <div className="text-white/70 font-medium">Avg. Boost</div>
                <div className="text-sm text-white/50 mt-1">In engagement rates</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;