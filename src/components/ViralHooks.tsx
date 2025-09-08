import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ViralHooks = () => {
  return (
    <section id="viral-hooks" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Upgrade Your Marketing with Viral Hooks
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Get instant access to our <strong>Viral Hooks Pack</strong>—a proven collection of high-performing video hooks designed to capture attention, boost engagement, and drive sales. Trusted by marketers and businesses worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="shadow-medium hover:shadow-strong transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Proven to Convert</h3>
                <p className="text-muted-foreground">Hooks crafted from top-performing campaigns to maximize ROI.</p>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-strong transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Ready-to-Use</h3>
                <p className="text-muted-foreground">Plug directly into your ads and start seeing results immediately.</p>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-strong transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-success rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Instant Download</h3>
                <p className="text-muted-foreground">Secure checkout and immediate access to your hooks pack.</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <a 
              href="https://hookdaddy.store/checkouts/checkout-2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="text-lg px-12 py-4">
                Buy the Viral Hooks Pack Now
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViralHooks;