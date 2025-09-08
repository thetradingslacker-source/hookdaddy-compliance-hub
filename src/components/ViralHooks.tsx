import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, TrendingUp, Zap, ArrowRight, Download, Star, CheckCircle, Rocket } from "lucide-react";

const ViralHooks = () => {
  return (
    <section id="viral-hooks" className="section-padding master-bg relative overflow-hidden">
      {/* Section-specific glow overlay */}
      <div className="section-glow"></div>
      
      <div className="container-width relative z-10">
        <div className="text-center mb-20 animate-fade-in">
        {/* Bestseller Badge */}
        <div className="inline-flex items-center px-6 py-3 mb-6 tesla-gradient rounded-full shadow-lg">
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
          <Card className="p-8 card-bg tesla-hover group elevated-card">
            <CardContent className="p-0">
              <div className="w-16 h-16 tesla-electric rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 icon-container">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Proven to Convert</h3>
              <p className="text-white/80 mb-6 leading-relaxed text-lg">
                Every hook in our collection has been tested and proven to drive engagement across multiple platforms and niches.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-center text-white/90">
                  <CheckCircle className="h-5 w-5 text-tesla-blue mr-3" />
                  <span>Data-driven hook formulas</span>
                </li>
                <li className="flex items-center text-white/90">
                  <CheckCircle className="h-5 w-5 text-tesla-blue mr-3" />
                  <span>A/B tested for maximum impact</span>
                </li>
                <li className="flex items-center text-white/90">
                  <CheckCircle className="h-5 w-5 text-tesla-blue mr-3" />
                  <span>Cross-platform optimization</span>
                </li>
                <li className="flex items-center text-white/90">
                  <CheckCircle className="h-5 w-5 text-tesla-blue mr-3" />
                  <span>Conversion rate optimization</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="p-8 card-bg tesla-hover group elevated-card">
            <CardContent className="p-0">
              <div className="w-16 h-16 tesla-gradient rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 icon-container">
                <Rocket className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Ready-to-Use</h3>
              <p className="text-white/80 mb-6 leading-relaxed text-lg">
                Copy, paste, and customize these hooks for your content. No guesswork, just proven templates that work immediately.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-center text-white/90">
                  <CheckCircle className="h-5 w-5 text-tesla-blue mr-3" />
                  <span>Instant implementation</span>
                </li>
                <li className="flex items-center text-white/90">
                  <CheckCircle className="h-5 w-5 text-tesla-blue mr-3" />
                  <span>Easy customization guide</span>
                </li>
                <li className="flex items-center text-white/90">
                  <CheckCircle className="h-5 w-5 text-tesla-blue mr-3" />
                  <span>Multiple format options</span>
                </li>
                <li className="flex items-center text-white/90">
                  <CheckCircle className="h-5 w-5 text-tesla-blue mr-3" />
                  <span>Platform-specific versions</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="p-8 card-bg tesla-hover group elevated-card">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-gradient-to-r from-tesla-electric to-tesla-blue rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 icon-container">
                <Download className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Instant Access</h3>
              <p className="text-white/80 mb-6 leading-relaxed text-lg">
                Download immediately after purchase. Start creating viral content within minutes of your order.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-center text-white/90">
                  <CheckCircle className="h-5 w-5 text-tesla-blue mr-3" />
                  <span>Immediate download</span>
                </li>
                <li className="flex items-center text-white/90">
                  <CheckCircle className="h-5 w-5 text-tesla-blue mr-3" />
                  <span>Lifetime access</span>
                </li>
                <li className="flex items-center text-white/90">
                  <CheckCircle className="h-5 w-5 text-tesla-blue mr-3" />
                  <span>Free updates included</span>
                </li>
                <li className="flex items-center text-white/90">
                  <CheckCircle className="h-5 w-5 text-tesla-blue mr-3" />
                  <span>Money-back guarantee</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default ViralHooks;