import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle, Zap, Sparkles, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-8 sm:pt-18 px-4 sm:px-6 lg:px-8">
      {/* Enhanced floating background orbs */}
      <div className="bg-orb w-96 h-96 -top-40 -left-40"></div>
      <div className="bg-orb-secondary w-80 h-80 -bottom-40 -right-40"></div>
      <div className="bg-orb-tertiary w-[500px] h-[500px] top-10 right-10"></div>
      <div className="bg-orb w-[600px] h-[600px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 float-delayed"></div>
      
      <div className="w-full max-w-7xl mx-auto relative z-10">
        <div className="text-center animate-slide-up">
          {/* Trusted Badge */}
          <div className="inline-flex items-center px-3 py-1.5 mb-4 glass-medium rounded-full">
            <span className="text-sm text-white font-medium">
              ✨ Trusted by 10,000+ Creators Worldwide
            </span>
          </div>
            
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-6">
            <span className="bg-gradient-to-r from-white via-tesla-electric to-white bg-clip-text text-transparent">
              Create Content 
            </span>
            <br />
            <span className="bg-gradient-to-r from-tesla-blue via-tesla-purple to-tesla-electric bg-clip-text text-transparent">
              That Converts
            </span>
          </h1>
              
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light mb-10">
            Professional video hooks and marketing strategies engineered to capture attention in 
            <span className="text-tesla-blue font-semibold"> 3 seconds</span>, boost engagement by 
            <span className="text-success font-semibold"> 300%</span>, and drive real business results.
          </p>
            
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center max-w-md sm:max-w-none mx-auto">
            <Button size="default" variant="default" className="text-base font-bold px-8 py-4 h-auto magnetic-button" asChild>
              <a href="#viral-hooks">
                Start Creating Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="default" variant="outline" className="text-base font-semibold px-8 py-4 h-auto magnetic-button" asChild>
              <a href="#about">
                <PlayCircle className="mr-2 h-4 w-4" />
                Watch Demo
              </a>
            </Button>
          </div>
            
          {/* Enhanced social proof */}
          <div className="pt-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="glass-medium rounded-xl p-5 text-center tesla-hover">
                <div className="text-3xl font-black text-tesla-blue mb-2">10K+</div>
                <div className="text-white/80 font-medium">Active Creators</div>
                <div className="text-sm text-white/60 mt-1">Using our hooks daily</div>
              </div>
              <div className="glass-medium rounded-xl p-5 text-center tesla-hover">
                <div className="text-3xl font-black text-success mb-2">50M+</div>
                <div className="text-white/80 font-medium">Views Generated</div>
                <div className="text-sm text-white/60 mt-1">Across all platforms</div>
              </div>
              <div className="glass-medium rounded-xl p-5 text-center tesla-hover">
                <div className="text-3xl font-black text-warning mb-2">300%</div>
                <div className="text-white/80 font-medium">Avg. Boost</div>
                <div className="text-sm text-white/60 mt-1">In engagement rates</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;