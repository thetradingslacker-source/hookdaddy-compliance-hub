import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, ExternalLink } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-8 md:py-16 master-bg relative overflow-hidden">
      {/* Section-specific glow overlay */}
      <div className="section-glow"></div>
      
      <div className="container-width relative z-10">
        <div className="max-w-5xl mx-auto text-center">
        {/* Limited Time Badge */}
        <div className="inline-flex items-center px-6 py-3 mb-6 tesla-gradient rounded-full shadow-lg">
          <span className="text-sm text-white font-bold">⚡ Limited Time Offer</span>
        </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Ready to
            <span className="block text-gradient">
              Transform Your Content?
            </span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join 10,000+ successful marketers who've already boosted their engagement by 
            <span className="text-tesla-blue font-semibold"> 300%</span> using our proven viral hooks system.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mb-12">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-tesla-blue">300%</div>
              <div className="text-xs sm:text-sm text-white/70">Avg. Engagement Boost</div>
            </div>
            <div className="w-px h-6 bg-white/20 hidden sm:block"></div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-tesla-electric">10K+</div>
              <div className="text-xs sm:text-sm text-white/70">Happy Customers</div>
            </div>
            <div className="w-px h-6 bg-white/20 hidden sm:block"></div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-warning">4.9★</div>
              <div className="text-xs sm:text-sm text-white/70">Customer Rating</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center max-w-md sm:max-w-none mx-auto">
            <a 
              href="https://hookdaddy.store/checkouts/checkout-2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="default" variant="default" className="text-base font-bold px-6 py-3 magnetic-button w-full sm:w-auto">
                Get Viral Hooks Pack Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <Button size="default" variant="outline" className="text-base font-semibold px-6 py-3 magnetic-button w-full sm:w-auto" asChild>
              <a href="#about">
                Learn More
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
          
          <p className="text-sm text-white/70 mb-8">
            Secure payment • Instant download • 30-day guarantee
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;