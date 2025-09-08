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
        {/* Limited Time Badge */}
        <div className="inline-flex items-center px-6 py-3 mb-6 bg-gradient-to-r from-tesla-red to-tesla-purple rounded-full shadow-lg">
          <span className="text-sm text-white font-bold">⚡ Limited Time Offer</span>
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
          
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mb-12">
          <Button size="lg" variant="default" className="text-lg font-bold px-12 py-6">
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="text-lg font-semibold px-12 py-6">
            Learn More
            <ExternalLink className="ml-2 h-5 w-5" />
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