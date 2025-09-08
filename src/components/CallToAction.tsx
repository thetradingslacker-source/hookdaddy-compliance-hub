import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="section-padding tesla-hero-gradient relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>
      
      <div className="absolute top-20 left-20 w-72 h-72 bg-tesla-blue/20 rounded-full blur-3xl float-animation"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-success/15 rounded-full blur-3xl float-animation" style={{animationDelay: '3s'}}></div>
      
      <div className="container-width relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Premium badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-effect text-sm font-semibold text-white/90 border border-white/20 mb-10">
            <Sparkles className="w-5 h-5 text-warning animate-pulse" />
            <span>Limited Time Offer</span>
            <Zap className="w-4 h-4 text-tesla-blue" />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[0.9] tracking-tighter">
            Ready to
            <span className="block bg-gradient-to-r from-tesla-blue via-success to-warning bg-clip-text text-transparent">
              Transform?
            </span>
          </h2>
          
          <p className="text-2xl md:text-3xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Join the elite tier of content creators who've already boosted their engagement by 
            <span className="text-success font-bold"> 300%</span> using our proven viral hooks system.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Button 
              size="lg" 
              className="magnetic-button tesla-gradient text-white text-2xl px-16 py-10 rounded-2xl font-black shadow-intense group min-w-[320px]"
            >
              Get Started Today
              <ArrowRight className="ml-4 h-7 w-7 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-xl px-12 py-8 rounded-2xl border-2 border-white/30 text-white hover:border-tesla-blue hover:bg-tesla-blue/10 hover:text-tesla-blue transition-all duration-500 font-bold backdrop-blur-sm"
            >
              Learn More
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="glass-effect rounded-xl p-6 text-center border border-white/10">
              <div className="text-2xl font-black text-tesla-blue mb-1">Secure</div>
              <div className="text-white/60 text-sm">Payment Processing</div>
            </div>
            <div className="glass-effect rounded-xl p-6 text-center border border-white/10">
              <div className="text-2xl font-black text-success mb-1">Instant</div>
              <div className="text-white/60 text-sm">Download Access</div>
            </div>
            <div className="glass-effect rounded-xl p-6 text-center border border-white/10">
              <div className="text-2xl font-black text-warning mb-1">30-Day</div>
              <div className="text-white/60 text-sm">Money Back</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;