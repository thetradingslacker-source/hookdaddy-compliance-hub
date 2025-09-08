import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Video, BookOpen, Target, TrendingUp, Users, Zap, Download, Star, CheckCircle, Palette, Award, ArrowRight } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="section-padding master-bg relative overflow-hidden">
      {/* Section-specific glow overlay */}
      <div className="section-glow"></div>
      
      <div className="container-width relative z-10">
        <div className="text-center mb-16 sm:mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-medium text-sm font-semibold mb-6 text-white/90">
            <TrendingUp className="w-4 h-4 text-tesla-blue" />
            <span>Enterprise-Grade Solutions</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Everything You Need
            <span className="block bg-gradient-to-r from-tesla-blue via-success to-warning bg-clip-text text-transparent">
              To Dominate
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
            Professional content solutions engineered to capture attention, maximize engagement, 
            and deliver <span className="text-white font-semibold">measurable ROI</span>. 
            Join the elite tier of content creators.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 card-bg tesla-hover group elevated-card">
            <CardContent className="p-0">
              <div className="w-16 h-16 tesla-gradient rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 icon-container">
                <Video className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Viral Hooks Packs</h3>
              <p className="text-white/80 mb-6 leading-relaxed text-lg">
                Ready-to-use video hooks that have generated millions of views. Download instantly and start creating viral content today.
              </p>
              
              <div className="flex items-center gap-2 sm:gap-4 mb-6 flex-wrap">
                <div className="flex items-center gap-1 glass-subtle px-2 py-1 rounded-full">
                  <Download className="h-3 w-3 text-tesla-blue" />
                  <span className="text-white text-[10px] sm:text-xs font-medium whitespace-nowrap">50K+ Downloads</span>
                </div>
                <div className="flex items-center gap-1 glass-subtle px-2 py-1 rounded-full">
                  <Star className="h-3 w-3 text-warning" />
                  <span className="text-white text-[10px] sm:text-xs font-medium whitespace-nowrap">4.9 Rating</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-white/90">
                  <CheckCircle className="h-5 w-5 text-success mr-3" />
                  <span>100+ High-Converting Hooks</span>
                </li>
                <li className="flex items-center text-white/90">
                  <CheckCircle className="h-5 w-5 text-success mr-3" />
                  <span>Instant Download Access</span>
                </li>
                <li className="flex items-center text-white/90">
                  <CheckCircle className="h-5 w-5 text-success mr-3" />
                  <span>Platform-Specific Templates</span>
                </li>
              </ul>
              
              <Button variant="default" size="lg" className="w-full font-bold magnetic-button" asChild>
                <a href="#viral-hooks">Get Hooks Pack</a>
              </Button>
            </CardContent>
          </Card>

          <Card className="p-8 card-bg tesla-hover group elevated-card">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-gradient-to-br from-success to-tesla-green rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 icon-container">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Educational Content</h3>
              <p className="text-white/80 mb-6 leading-relaxed text-lg">
                Comprehensive guides, tutorials, and masterclasses to level up your content creation and marketing strategies.
              </p>
              
              <div className="flex items-center gap-2 sm:gap-4 mb-6 flex-wrap">
                <div className="flex items-center gap-1 glass-subtle px-2 py-1 rounded-full">
                  <Users className="h-3 w-3 text-tesla-blue" />
                  <span className="text-white text-[10px] sm:text-xs font-medium whitespace-nowrap">25K+ Students</span>
                </div>
                <div className="flex items-center gap-1 glass-subtle px-2 py-1 rounded-full">
                  <CheckCircle className="h-3 w-3 text-success" />
                  <span className="text-white text-[10px] sm:text-xs font-medium whitespace-nowrap">Certified</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-white/90">
                  <CheckCircle className="h-5 w-5 text-success mr-3" />
                  <span>Video Creation Mastery</span>
                </li>
                <li className="flex items-center text-white/90">
                  <CheckCircle className="h-5 w-5 text-success mr-3" />
                  <span>Marketing Psychology Course</span>
                </li>
                <li className="flex items-center text-white/90">
                  <CheckCircle className="h-5 w-5 text-success mr-3" />
                  <span>Analytics & Optimization</span>
                </li>
              </ul>
              
              <Button variant="outline" size="lg" className="w-full font-bold magnetic-button" asChild>
                <a href="#about">Learn More</a>
              </Button>
            </CardContent>
          </Card>

          <Card className="p-8 card-bg tesla-hover group elevated-card">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-gradient-to-br from-tesla-purple to-tesla-blue rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 icon-container">
                <Palette className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Custom Solutions</h3>
              <p className="text-white/80 mb-6 leading-relaxed text-lg">
                Bespoke content strategies and done-for-you services tailored to your brand's unique requirements and goals.
              </p>
              
              <div className="flex items-center gap-2 sm:gap-4 mb-6 flex-wrap">
                <div className="flex items-center gap-1 glass-subtle px-2 py-1 rounded-full">
                  <Target className="h-3 w-3 text-tesla-blue" />
                  <span className="text-white text-[10px] sm:text-xs font-medium whitespace-nowrap">100% ROI</span>
                </div>
                <div className="flex items-center gap-1 glass-subtle px-2 py-1 rounded-full">
                  <Award className="h-3 w-3 text-warning" />
                  <span className="text-white text-[10px] sm:text-xs font-medium whitespace-nowrap">Premium</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-white/90">
                  <CheckCircle className="h-5 w-5 text-success mr-3" />
                  <span>1-on-1 Strategy Sessions</span>
                </li>
                <li className="flex items-center text-white/90">
                  <CheckCircle className="h-5 w-5 text-success mr-3" />
                  <span>Custom Hook Creation</span>
                </li>
                <li className="flex items-center text-white/90">
                  <CheckCircle className="h-5 w-5 text-success mr-3" />
                  <span>Performance Guarantee</span>
                </li>
              </ul>
              
              <Button variant="premium" size="lg" className="w-full font-bold magnetic-button" asChild>
                <a href="#contact">Get Quote</a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Final CTA */}
        <div className="text-center glass-strong rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Scale Your Content?
          </h3>
          <p className="text-base sm:text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of creators who have transformed their content and grown their audience with our proven strategies.
          </p>
          <Button size="default" variant="default" className="text-base font-bold px-6 py-3 magnetic-button" asChild>
            <a href="#contact">
              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;