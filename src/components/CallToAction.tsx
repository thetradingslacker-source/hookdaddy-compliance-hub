import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Upgrade Your Marketing Today
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Get the latest Viral Hooks Pack and stay ahead in the fast-moving world of digital marketing.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-12 py-4">
            Buy Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;