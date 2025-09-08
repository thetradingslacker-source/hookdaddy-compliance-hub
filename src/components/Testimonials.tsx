import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-medium">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="flex text-gold mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-xl">⭐</span>
                    ))}
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    "HookDaddy transformed our marketing campaigns and boosted engagement beyond expectations."
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mr-4">
                    <span className="text-accent-foreground font-bold">JD</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Jane D.</p>
                    <p className="text-muted-foreground text-sm">CEO</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-medium">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="flex text-gold mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-xl">⭐</span>
                    ))}
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    "Professional, innovative, and compliant. Exactly what we needed."
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center mr-4">
                    <span className="text-gold-foreground font-bold">JS</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">John S.</p>
                    <p className="text-muted-foreground text-sm">Marketing Director</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;