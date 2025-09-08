import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
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
                  <span className="text-2xl">🎬</span>
                </div>
                <CardTitle className="text-2xl text-foreground">Viral Hooks Packs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  Professionally crafted video hooks designed to capture attention fast.
                </p>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-strong transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-gold rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <CardTitle className="text-2xl text-foreground">Educational Content</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  Guides, PDFs, and resources for marketers and business owners.
                </p>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-strong transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-success rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <CardTitle className="text-2xl text-foreground">Custom Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  Tailored strategies for businesses seeking scalable growth.
                </p>
                <Button variant="outline" className="w-full">
                  Learn More
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