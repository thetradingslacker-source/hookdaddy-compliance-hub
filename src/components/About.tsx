import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Who We Are
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              At HookDaddy, we specialize in creating professional, results-driven digital solutions. From viral video hooks to educational resources, our content is crafted to meet the highest standards of compliance, innovation, and business impact. With a focus on global accessibility and secure transactions, we're trusted by entrepreneurs, marketers, and brands worldwide.
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-bold text-foreground mb-12 text-center">Why Choose HookDaddy</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="shadow-medium text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Proven Expertise</h4>
                  <p className="text-muted-foreground">Years of experience in digital marketing and viral content creation.</p>
                </CardContent>
              </Card>

              <Card className="shadow-medium text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-gold rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Rapid Results</h4>
                  <p className="text-muted-foreground">Strategies designed for speed, efficiency, and measurable growth.</p>
                </CardContent>
              </Card>

              <Card className="shadow-medium text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-success rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Secure & Compliant</h4>
                  <p className="text-muted-foreground">Built with international payment and business standards in mind.</p>
                </CardContent>
              </Card>

              <Card className="shadow-medium text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-primary-foreground">🚀</span>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Innovation First</h4>
                  <p className="text-muted-foreground">Fresh, creative solutions that keep your brand ahead of the curve.</p>
                </CardContent>
              </Card>
            </div>
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