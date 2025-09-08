import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About HookDaddy
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A professional digital content company committed to delivering innovative solutions 
              for modern businesses and content creators.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">Our Mission</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                HookDaddy operates as a legitimate digital content solutions provider, 
                specializing in viral marketing strategies and educational resources. 
                We maintain full compliance with international business standards and 
                payment gateway requirements.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team consists of experienced professionals in digital marketing, 
                content creation, and business development, ensuring our clients receive 
                top-tier service and results.
              </p>
            </div>

            <Card className="shadow-medium">
              <CardContent className="p-8">
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">🌟</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">Excellence</h4>
                      <p className="text-muted-foreground">Committed to delivering the highest quality solutions</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">🤝</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">Trust</h4>
                      <p className="text-muted-foreground">Building long-term relationships through transparency</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">🚀</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">Innovation</h4>
                      <p className="text-muted-foreground">Staying ahead with cutting-edge strategies</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-br from-accent/5 to-gold/5 rounded-2xl p-8 border border-border">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-accent mb-2">2024</div>
                <div className="text-muted-foreground">Established</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold mb-2">Global</div>
                <div className="text-muted-foreground">Reach</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-success mb-2">100%</div>
                <div className="text-muted-foreground">Compliant</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;