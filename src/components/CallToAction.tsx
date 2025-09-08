import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, ExternalLink } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="section-padding master-bg relative overflow-hidden">
      {/* Section-specific glow overlay */}
      <div className="section-glow"></div>
      
      <div className="container-width relative z-10">
        <div className="max-w-5xl mx-auto text-center">
        {/* Limited Time Badge */}
        <div className="inline-flex items-center px-6 py-3 mb-6 tesla-gradient rounded-full shadow-lg">
          <span className="text-sm text-white font-bold">⚡ Limited Time Offer</span>
        </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-[0.9] tracking-tighter">
            Ready to
            <span className="block bg-gradient-to-r from-tesla-blue via-success to-warning bg-clip-text text-transparent">
              Transform?
            </span>
          </h2>
          
          <p className="text-2xl md:text-3xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Join the elite tier of content creators who've already boosted their engagement by 
            <span className="text-success font-semibold"> 300%</span> using our proven viral hook strategies.
          </p>
          
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mb-12 justify-center">
          <Button size="lg" variant="default" className="text-lg font-bold px-12 py-6 magnetic-button" asChild>
            <a href="#contact">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="text-lg font-semibold px-12 py-6 magnetic-button" asChild>
            <a href="#about">
              Learn More
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
          
        {/* Trust indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div className="glass-medium rounded-2xl p-6 text-center tesla-hover">
            <div className="text-3xl font-black text-tesla-blue mb-2">10K+</div>
            <div className="text-white/80 font-medium text-sm">Happy Customers</div>
          </div>
          <div className="glass-medium rounded-2xl p-6 text-center tesla-hover">
            <div className="text-3xl font-black text-success mb-2">4.9★</div>
            <div className="text-white/80 font-medium text-sm">Average Rating</div>
          </div>
          <div className="glass-medium rounded-2xl p-6 text-center tesla-hover">
            <div className="text-3xl font-black text-warning mb-2">30d</div>
            <div className="text-white/80 font-medium text-sm">Money Back</div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;