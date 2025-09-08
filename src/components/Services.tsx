import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Video, BookOpen, Target, TrendingUp, Users, Zap } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="section-padding tesla-hero-gradient relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-tesla-blue/20 rounded-full blur-3xl float-animation"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-success/20 rounded-full blur-3xl float-animation" style={{animationDelay: '3s'}}></div>
      
      <div className="container-width relative z-10">
        <div className="text-center mb-24 animate-fade-in">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-effect text-sm font-semibold mb-8 border border-white/20 text-white/90">
            <TrendingUp className="w-5 h-5 text-tesla-blue" />
            <span>Enterprise-Grade Solutions</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[0.9] tracking-tighter">
            Everything You Need
            <span className="block bg-gradient-to-r from-tesla-blue via-success to-warning bg-clip-text text-transparent">
              To Dominate
            </span>
          </h2>
          
          <p className="text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed font-light">
            Professional content solutions engineered to capture attention, maximize engagement, 
            and deliver <span className="text-white font-semibold">measurable ROI</span>. 
            Join the elite tier of content creators.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 bg-white/5 border-white/10 backdrop-blur-xl glass-effect tesla-hover group">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-gradient-to-r from-tesla-blue to-tesla-purple rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Video className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Viral Hooks Packs</h3>
              <p className="text-white/80 mb-6 leading-relaxed text-lg">
                Ready-to-use video hooks that have generated millions of views. Download instantly and start creating viral content today.
              </p>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1 bg-white/5 px-3 py-1 rounded-full">
                  <Download className="h-4 w-4 text-tesla-blue" />
                  <span className="text-white text-sm font-medium">50K+ Downloads</span>
                </div>
                <div className="flex items-center gap-1 bg-white/5 px-3 py-1 rounded-full">
                  <Star className="h-4 w-4 text-yellow-400" />
                  <span className="text-white text-sm font-medium">4.9/5</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-white/90">
                  <CheckCircle className="h-5 w-5 text-tesla-green mr-3" />
                  <span>100+ Proven Hook Templates</span>
                </li>
                <li className="flex items-center text-white/90">
                  <CheckCircle className="h-5 w-5 text-tesla-green mr-3" />
                  <span>Category-Specific Hooks</span>
                </li>
                <li className="flex items-center text-white/90">
                  <CheckCircle className="h-5 w-5 text-tesla-green mr-3" />
                  <span>Performance Analytics Included</span>
                </li>
              </ul>

              <Button className="w-full" variant="premium">
                Download Now - $29
              </Button>
            </CardContent>
          </Card>

          <Card className="p-8 bg-white/5 border-white/10 backdrop-blur-xl glass-effect tesla-hover group">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-gradient-to-r from-tesla-electric to-tesla-blue rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Educational Content</h3>
              <p className="text-white/80 mb-6 leading-relaxed text-lg">
                Comprehensive guides, courses, and resources to master content creation and grow your audience organically.
              </p>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1 bg-white/5 px-3 py-1 rounded-full">
                  <Users className="h-4 w-4 text-tesla-electric" />
                  <span className="text-white text-sm font-medium">25K+ Students</span>
                </div>
                <div className="flex items-center gap-1 bg-white/5 px-3 py-1 rounded-full">
                  <BookOpen className="h-4 w-4 text-tesla-electric" />
                  <span className="text-white text-sm font-medium">50+ Courses</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-white/90">
                  <CheckCircle className="h-5 w-5 text-tesla-green mr-3" />
                  <span>Step-by-Step Video Tutorials</span>
                </li>
                <li className="flex items-center text-white/90">
                  <CheckCircle className="h-5 w-5 text-tesla-green mr-3" />
                  <span>Downloadable Resources</span>
                </li>
                <li className="flex items-center text-white/90">
                  <CheckCircle className="h-5 w-5 text-tesla-green mr-3" />
                  <span>Community Access</span>
                </li>
              </ul>

              <Button className="w-full" variant="electric">
                Browse Library
              </Button>
            </CardContent>
          </Card>

          <Card className="p-8 bg-white/5 border-white/10 backdrop-blur-xl glass-effect tesla-hover group">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-gradient-to-r from-tesla-green to-tesla-blue rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Palette className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Custom Solutions</h3>
              <p className="text-white/80 mb-6 leading-relaxed text-lg">
                Tailored content strategies and done-for-you solutions for brands and creators who want premium results.
              </p>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1 bg-white/5 px-3 py-1 rounded-full">
                  <Award className="h-4 w-4 text-tesla-green" />
                  <span className="text-white text-sm font-medium">Premium Service</span>
                </div>
                <div className="flex items-center gap-1 bg-white/5 px-3 py-1 rounded-full">
                  <Zap className="h-4 w-4 text-tesla-green" />
                  <span className="text-white text-sm font-medium">Fast Delivery</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-white/90">
                  <CheckCircle className="h-5 w-5 text-tesla-green mr-3" />
                  <span>1-on-1 Strategy Sessions</span>
                </li>
                <li className="flex items-center text-white/90">
                  <CheckCircle className="h-5 w-5 text-tesla-green mr-3" />
                  <span>Custom Content Creation</span>
                </li>
                <li className="flex items-center text-white/90">
                  <CheckCircle className="h-5 w-5 text-tesla-green mr-3" />
                  <span>Ongoing Support & Analytics</span>
                </li>
              </ul>

              <Button className="w-full" variant="success">
                Get Custom Quote
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white/5 rounded-3xl p-12 border border-white/10 backdrop-blur-xl glass-effect">
          <h3 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Content Journey?
          </h3>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of creators who have transformed their content and grown their audience with our proven strategies.
          </p>
          <Button size="lg" variant="default" className="text-lg font-bold px-12 py-6">
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;