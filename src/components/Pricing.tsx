
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for trying out SpeechSync",
      features: [
        "10 minutes of audio per month",
        "3 voice options",
        "Standard quality audio",
        "MP3 download format",
        "Email support"
      ],
      cta: "Start Free",
      popular: false
    },
    {
      name: "Pro",
      price: "$19",
      period: "per month",
      description: "Ideal for content creators and small businesses",
      features: [
        "3 hours of audio per month",
        "All 20+ voice options",
        "High quality audio",
        "Multiple export formats",
        "Priority email support",
        "Commercial usage rights"
      ],
      cta: "Go Pro",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For organizations with advanced needs",
      features: [
        "Unlimited audio generation",
        "All voices + custom voice options",
        "Ultra-high quality audio",
        "API access",
        "Dedicated account manager",
        "Volume discount",
        "Custom integration support"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Pricing
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            Choose the perfect plan for your needs. No hidden fees or complicated tiers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`glass-card rounded-xl overflow-hidden transition-all ${
                plan.popular 
                  ? 'ring-2 ring-primary shadow-lg relative'
                  : 'hover:shadow-xl hover:-translate-y-1'
              }`}
            >
              {plan.popular && (
                <div className="bg-primary text-white text-xs font-medium py-1.5 px-3 absolute top-4 right-4 rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl md:text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground ml-1 text-sm">{plan.period}</span>
                  )}
                </div>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-primary hover:bg-primary/90'
                      : 'bg-secondary hover:bg-secondary/80 text-foreground'
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
              
              <div className="border-t border-border p-6 md:p-8">
                <p className="font-medium mb-4">What's included:</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center mt-0.5">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Need a custom solution? <a href="#" className="text-primary hover:underline">Contact our sales team</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
