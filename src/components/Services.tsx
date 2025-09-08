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
              Professional digital content solutions designed to meet modern business requirements 
              and compliance standards.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="shadow-medium hover:shadow-strong transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">🎬</span>
                </div>
                <CardTitle className="text-2xl text-foreground">Digital Content Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  Comprehensive viral marketing strategies and content frameworks designed 
                  to maximize engagement across digital platforms. Our solutions include 
                  proven methodologies and data-driven approaches.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-muted-foreground">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    Strategic content planning
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    Viral marketing frameworks
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    Performance analytics
                  </li>
                </ul>
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
                <CardTitle className="text-2xl text-foreground">Educational Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  Professional training materials and educational content for businesses 
                  and individuals looking to enhance their digital marketing capabilities 
                  through structured learning programs.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-muted-foreground">
                    <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                    Digital marketing courses
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                    Business development guides
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                    Industry best practices
                  </li>
                </ul>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 shadow-medium">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Enterprise Solutions
              </h3>
              <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
                Custom solutions tailored for enterprise clients requiring specialized 
                digital content strategies and comprehensive support packages.
              </p>
              <Button size="lg" className="bg-gradient-accent text-accent-foreground hover:opacity-90">
                Contact Us
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;