import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, TrendingUp, Zap, ArrowRight, Download, Star } from "lucide-react";

const ViralHooks = () => {
  return (
    <section id="viral-hooks" className="section-padding tesla-hero-gradient relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-tesla-blue/20 rounded-full blur-3xl float-animation"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-success/20 rounded-full blur-3xl float-animation" style={{animationDelay: '2s'}}></div>
      
      <div className="container-width relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect text-sm font-medium mb-6 text-white/90 border border-white/20">
            <Star className="w-4 h-4 text-warning" />
            <span>Bestseller Pack</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Viral Hooks Pack
            <span className="block text-tesla-blue">That Actually Convert</span>
          </h2>
          
          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8">
            Get instant access to our <strong className="text-white font-semibold">Viral Hooks Pack</strong>—a proven collection 
            of high-performing video hooks designed to capture attention within 3 seconds, boost engagement, 
            and drive sales. Trusted by 10,000+ marketers worldwide.
          </p>

          <div className="flex items-center justify-center gap-8 text-sm text-white/70 mb-12">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                ))}
              </div>
              <span>4.9/5 Rating</span>
            </div>
            <div className="w-px h-4 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              <span>10,000+ Downloads</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="group elevated-card hover:shadow-tesla transition-all duration-500 border-0 bg-black/40 backdrop-blur-xl overflow-hidden relative border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-tesla-blue/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="p-8 text-center relative z-10">
              <div className="w-20 h-20 bg-gradient-blue rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Proven to Convert</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                Hooks crafted from analyzing 10,000+ top-performing campaigns across all industries to maximize your ROI.
              </p>
              <div className="space-y-2 text-sm text-left text-white/80">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-tesla-blue rounded-full"></div>
                  <span>50+ proven hook formulas</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-tesla-blue rounded-full"></div>
                  <span>3-second attention capture</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-tesla-blue rounded-full"></div>
                  <span>Cross-platform optimized</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group elevated-card hover:shadow-tesla transition-all duration-500 border-0 bg-card/80 backdrop-blur-sm overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-success/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="p-8 text-center relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-success to-success/80 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Ready-to-Use</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Copy, paste, and start seeing results immediately. No editing required—just plug directly into your campaigns.
              </p>
              <div className="space-y-2 text-sm text-left">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-success rounded-full"></div>
                  <span>Industry-specific templates</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-success rounded-full"></div>
                  <span>Multiple format variations</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-success rounded-full"></div>
                  <span>Performance guidelines included</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group elevated-card hover:shadow-tesla transition-all duration-500 border-0 bg-card/80 backdrop-blur-sm overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-warning/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="p-8 text-center relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-warning to-warning/80 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Instant Access</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Secure checkout with immediate download. Start transforming your content marketing in minutes, not days.
              </p>
              <div className="space-y-2 text-sm text-left">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-warning rounded-full"></div>
                  <span>Instant PDF download</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-warning rounded-full"></div>
                  <span>Lifetime access guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-warning rounded-full"></div>
                  <span>30-day money-back guarantee</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center glass-effect rounded-3xl p-12 lg:p-16 border border-white/10">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Content?
            </h3>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Join 10,000+ successful marketers who've already boosted their engagement rates by 300% 
              using our proven viral hooks system.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-tesla-blue">300%</div>
                <div className="text-sm text-white/70">Avg. Engagement Boost</div>
              </div>
              <div className="w-px h-8 bg-white/20 hidden sm:block"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-success">10K+</div>
                <div className="text-sm text-white/70">Happy Customers</div>
              </div>
              <div className="w-px h-8 bg-white/20 hidden sm:block"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-warning">4.9★</div>
                <div className="text-sm text-white/70">Customer Rating</div>
              </div>
            </div>
            
            <a 
              href="https://hookdaddy.store/checkouts/checkout-2/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                size="lg" 
                className="magnetic-button bg-white text-black hover:bg-white/90 text-xl px-12 py-6 rounded-xl shadow-tesla hover:shadow-elevated transition-all duration-300 group font-semibold"
              >
                Get Viral Hooks Pack Now
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            
            <p className="text-sm text-white/70 mt-4">
              Secure payment • Instant download • 30-day guarantee
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViralHooks;