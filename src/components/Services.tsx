import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Video, BookOpen, Target } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-heading">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Professional content solutions designed to capture attention, increase engagement, and drive results.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="shadow-medium hover:shadow-strong transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center mb-4">
                  <Video className="w-8 h-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-2xl text-foreground font-heading">Viral Hooks Packs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  Professionally crafted video hooks designed to capture attention fast.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="#viral-hooks">Learn More</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-strong transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-gold rounded-xl flex items-center justify-center mb-4">
                  <BookOpen className="w-8 h-8 text-gold-foreground" />
                </div>
                <CardTitle className="text-2xl text-foreground font-heading">Educational Content</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  Guides, PDFs, and resources for marketers and business owners.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="#educational-content">Learn More</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-strong transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-success rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-success-foreground" />
                </div>
                <CardTitle className="text-2xl text-foreground font-heading">Custom Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  Tailored strategies for businesses seeking scalable growth.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="#custom-solutions">Learn More</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;