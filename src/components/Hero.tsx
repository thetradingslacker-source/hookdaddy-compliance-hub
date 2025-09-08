import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tesla-blue/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container-width relative z-10">
        <div className="max-w-6xl mx-auto text-center space-y-12 animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect text-sm font-medium">
            <Zap className="w-4 h-4 text-tesla-blue" />
            <span>Trusted by 10,000+ creators</span>
          </div>
          
          {/* Main headline */}
          <div className="space-y-6">
            <h1 className="hero-text text-gradient">
              Create Content
              <br />
              <span className="text-tesla-blue">That Converts</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Professional video hooks and marketing strategies that capture attention 
              and drive real business results. Join thousands of creators scaling their impact.
            </p>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button 
              size="lg" 
              className="tesla-gradient text-white text-lg px-10 py-6 rounded-xl shadow-tesla hover:shadow-elevated transition-all duration-300 group font-semibold"
            >
              Start Creating Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-10 py-6 rounded-xl border-2 border-border hover:border-tesla-blue hover:text-tesla-blue transition-all duration-300 group font-semibold"
            >
              <PlayCircle className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
          
          {/* Social proof */}
          <div className="pt-16 flex items-center justify-center gap-8 opacity-60">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">10K+</div>
              <div className="text-sm text-muted-foreground">Creators</div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">50M+</div>
              <div className="text-sm text-muted-foreground">Views Generated</div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">99%</div>
              <div className="text-sm text-muted-foreground">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;