
import { Check, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Choose a Voice",
      description: "Select from our library of premium voices across multiple accents and styles."
    },
    {
      number: "02",
      title: "Enter Your Text",
      description: "Type or paste the content you want to convert to natural-sounding speech."
    },
    {
      number: "03",
      title: "Generate Audio",
      description: "Our advanced AI processes your text into lifelike speech in seconds."
    },
    {
      number: "04",
      title: "Download & Use",
      description: "Save your audio file and use it in videos, presentations, or any other project."
    }
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Simple Process
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            How SpeechSync Works
          </h2>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            Transform your text to speech in four simple steps with our intuitive platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex flex-col h-full relative"
            >
              <div className="glass-card rounded-xl p-6 flex flex-col flex-grow hover:shadow-xl transition-all">
                <span className="text-4xl font-bold text-primary/20 mb-4">{step.number}</span>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground flex-grow">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/3 right-0 transform translate-x-1/2 translate-y-2/3 z-10">
                  <ArrowRight className="text-primary/30 h-8 w-8" />
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-20 glass-card rounded-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">Ready to convert your first text?</h3>
              <p className="text-muted-foreground mb-6">
                Start creating natural-sounding voice content in minutes with our easy-to-use platform.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <span>No technical skills required</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <span>Create audio in seconds</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <span>Try it free, no credit card required</span>
                </li>
              </ul>
            </div>
            <div className="flex-1 bg-primary/5 rounded-xl p-8 text-center">
              <span className="block text-lg font-medium mb-2">Start Creating Now</span>
              <span className="block text-3xl font-bold mb-4">Free Trial Available</span>
              <a href="#" className="inline-block bg-primary hover:bg-primary/90 text-white rounded-lg py-3 px-6 font-medium transition-colors">
                Try SpeechSync Free
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
