import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle, Zap, Sparkles, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center master-bg overflow-hidden pt-20">
      {/* Enhanced floating background orbs */}
      <div className="bg-orb w-96 h-96 -top-40 -left-40"></div>
      <div className="bg-orb-secondary w-80 h-80 -bottom-40 -right-40"></div>
      <div className="bg-orb-tertiary w-[500px] h-[500px] top-10 right-10"></div>
      <div className="bg-orb w-[600px] h-[600px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 float-delayed"></div>
      
      <div className="container-width relative z-10">
        <div className="max-w-7xl mx-auto text-center animate-slide-up">
          {/* Trusted Badge */}
          <div className="inline-flex items-center px-6 py-3 mb-8 glass-medium rounded-full">
            <span className="text-sm text-white font-medium">
              ✨ Trusted by 10,000+ Creators Worldwide
            </span>
          </div>
            
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tighter mb-6">
            <span className="bg-gradient-to-r from-white via-tesla-electric to-white bg-clip-text text-transparent">
              Create Content 
            </span>
            <br />
            <span className="bg-gradient-to-r from-tesla-blue via-tesla-purple to-tesla-electric bg-clip-text text-transparent">
              That Converts
            </span>
          </h1>
              
          <p className="text-xl md:text-3xl text-white/90 max-w-5xl mx-auto leading-relaxed font-light mb-12">
            Professional video hooks and marketing strategies engineered to capture attention in 
            <span className="text-tesla-blue font-semibold"> 3 seconds</span>, boost engagement by 
            <span className="text-success font-semibold"> 300%</span>, and drive real business results.
          </p>
            
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 mb-16 justify-center">
            <Button size="lg" variant="default" className="text-lg font-bold px-10 py-5 h-auto magnetic-button" asChild>
              <a href="#viral-hooks">
                Start Creating Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg font-semibold px-10 py-5 h-auto magnetic-button" asChild>
              <a href="#about">
                <PlayCircle className="mr-2 h-5 w-5" />
                Watch Demo
              </a>
            </Button>
          </div>
            
          {/* Enhanced social proof */}
          <div className="pt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="glass-medium rounded-2xl p-6 text-center tesla-hover">
                <div className="text-4xl font-black text-tesla-blue mb-2">10K+</div>
                <div className="text-white/80 font-medium">Active Creators</div>
                <div className="text-sm text-white/60 mt-1">Using our hooks daily</div>
              </div>
              <div className="glass-medium rounded-2xl p-6 text-center tesla-hover">
                <div className="text-4xl font-black text-success mb-2">50M+</div>
                <div className="text-white/80 font-medium">Views Generated</div>
                <div className="text-sm text-white/60 mt-1">Across all platforms</div>
              </div>
              <div className="glass-medium rounded-2xl p-6 text-center tesla-hover">
                <div className="text-4xl font-black text-warning mb-2">300%</div>
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