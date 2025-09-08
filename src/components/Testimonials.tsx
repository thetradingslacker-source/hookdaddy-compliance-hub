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

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-10 bg-white/5 border-white/10 backdrop-blur-xl glass-effect tesla-hover group">
            <CardContent className="p-0">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl text-white/90 mb-8 italic leading-relaxed font-medium">
                "HookDaddy's viral hooks transformed our content strategy. We saw a 300% increase in engagement within the first month of using their templates."
              </blockquote>
              <div className="flex items-center">
                <div className="w-14 h-14 bg-gradient-to-r from-tesla-blue to-tesla-purple rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">SM</span>
                </div>
                <div>
                  <p className="font-bold text-white text-lg">Sarah Martinez</p>
                  <p className="text-white/80 text-sm">Content Creator, 2M+ followers</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="p-10 bg-white/5 border-white/10 backdrop-blur-xl glass-effect tesla-hover group">
            <CardContent className="p-0">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl text-white/90 mb-8 italic leading-relaxed font-medium">
                "The educational content and custom solutions helped our agency scale to 7 figures. The ROI has been incredible - highly recommend!"
              </blockquote>
              <div className="flex items-center">
                <div className="w-14 h-14 bg-gradient-to-r from-tesla-green to-tesla-electric rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">MJ</span>
                </div>
                <div>
                  <p className="font-bold text-white text-lg">Marcus Johnson</p>
                  <p className="text-white/80 text-sm">Agency Owner, Digital Marketing</p>
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