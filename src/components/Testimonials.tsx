import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  return (
    <section className="py-20 tesla-hero-gradient relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-tesla-blue/20 rounded-full blur-3xl float-animation"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-warning/20 rounded-full blur-3xl float-animation" style={{animationDelay: '3s'}}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-tesla bg-black/40 backdrop-blur-xl border border-white/10">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="flex text-gold mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-xl">⭐</span>
                    ))}
                  </div>
                  <p className="text-lg text-white/80 leading-relaxed mb-4">
                    "HookDaddy transformed our marketing campaigns and boosted engagement beyond expectations."
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mr-4">
                    <span className="text-accent-foreground font-bold">JD</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Jane D.</p>
                    <p className="text-white/70 text-sm">CEO</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-tesla bg-black/40 backdrop-blur-xl border border-white/10">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="flex text-gold mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-xl">⭐</span>
                    ))}
                  </div>
                  <p className="text-lg text-white/80 leading-relaxed mb-4">
                    "Professional, innovative, and compliant. Exactly what we needed."
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-warning to-warning/80 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">JS</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">John S.</p>
                    <p className="text-white/70 text-sm">Marketing Director</p>
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