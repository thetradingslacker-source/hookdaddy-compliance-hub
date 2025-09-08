import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, TrendingUp, Zap, ArrowRight, Download, Star, CheckCircle, Rocket } from "lucide-react";

const ViralHooks = () => {
  return (
    <section id="viral-hooks" className="section-padding tesla-hero-gradient relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-tesla-blue/20 rounded-full blur-3xl float-animation"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-success/20 rounded-full blur-3xl float-animation" style={{animationDelay: '2s'}}></div>
      
      <div className="container-width relative z-10">
        <div className="text-center mb-20 animate-fade-in">
        {/* Bestseller Badge */}
        <div className="inline-flex items-center px-6 py-3 mb-6 bg-gradient-to-r from-tesla-orange to-tesla-red rounded-full shadow-lg">
          <span className="text-sm text-white font-bold">🏆 Bestseller Pack</span>
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
          <Card className="p-8 bg-white/5 border-white/10 backdrop-blur-xl glass-effect tesla-hover group">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-gradient-to-r from-tesla-green to-tesla-blue rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Proven to Convert</h3>
              <p className="text-white/80 mb-6 leading-relaxed text-lg">
                Every hook in our collection has been tested and proven to drive engagement across multiple platforms and niches.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-center text-white/90">
                  <CheckCircle className="h-5 w-5 text-tesla-green mr-3" />
                  <span>Data-driven hook formulas</span>
                </li>
                <li className="flex items-center text-white/90">
                  <CheckCircle className="h-5 w-5 text-tesla-green mr-3" />
                  <span>A/B tested for maximum impact</span>
                </li>
                <li className="flex items-center text-white/90">
                  <CheckCircle className="h-5 w-5 text-tesla-green mr-3" />
                  <span>Cross-platform optimization</span>
                </li>
                <li className="flex items-center text-white/90">
                  <CheckCircle className="h-5 w-5 text-tesla-green mr-3" />
                  <span>Conversion rate optimization</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="p-8 bg-white/5 border-white/10 backdrop-blur-xl glass-effect tesla-hover group">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-gradient-to-r from-tesla-blue to-tesla-purple rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Rocket className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Ready-to-Use</h3>
              <p className="text-white/80 mb-6 leading-relaxed text-lg">
                Copy, paste, and customize these hooks for your content. No guesswork, just proven templates that work immediately.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-center text-white/90">
                  <CheckCircle className="h-5 w-5 text-tesla-green mr-3" />
                  <span>Instant implementation</span>
                </li>
                <li className="flex items-center text-white/90">
                  <CheckCircle className="h-5 w-5 text-tesla-green mr-3" />
                  <span>Easy customization guide</span>
                </li>
                <li className="flex items-center text-white/90">
                  <CheckCircle className="h-5 w-5 text-tesla-green mr-3" />
                  <span>Multiple format options</span>
                </li>
                <li className="flex items-center text-white/90">
                  <CheckCircle className="h-5 w-5 text-tesla-green mr-3" />
                  <span>Platform-specific versions</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="p-8 bg-white/5 border-white/10 backdrop-blur-xl glass-effect tesla-hover group">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-gradient-to-r from-tesla-electric to-tesla-blue rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Download className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Instant Access</h3>
              <p className="text-white/80 mb-6 leading-relaxed text-lg">
                Download immediately after purchase. Start creating viral content within minutes of your order.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-center text-white/90">
                  <CheckCircle className="h-5 w-5 text-tesla-green mr-3" />
                  <span>Immediate download</span>
                </li>
                <li className="flex items-center text-white/90">
                  <CheckCircle className="h-5 w-5 text-tesla-green mr-3" />
                  <span>Lifetime access</span>
                </li>
                <li className="flex items-center text-white/90">
                  <CheckCircle className="h-5 w-5 text-tesla-green mr-3" />
                  <span>Free updates included</span>
                </li>
                <li className="flex items-center text-white/90">
                  <CheckCircle className="h-5 w-5 text-tesla-green mr-3" />
                  <span>Money-back guarantee</span>
                </li>
              </ul>
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
          <Button size="lg" variant="default" className="text-lg font-bold px-12 py-6" asChild>
            <a href="/checkout">Get Viral Hooks Pack Now</a>
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