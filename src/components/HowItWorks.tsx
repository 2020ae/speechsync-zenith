
import { ArrowRight } from "lucide-react";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            How SpeechSync Works
          </h2>
          <p className="max-w-[900px] text-muted-foreground text-lg">
            Converting your text to speech is simple and fast with our advanced platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-background rounded-xl p-6 relative">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
              1
            </div>
            <h3 className="text-xl font-semibold mt-4 mb-3 text-center">Enter Your Text</h3>
            <p className="text-muted-foreground text-center">
              Paste or type the content you want to convert into the text area.
            </p>
          </div>

          <div className="bg-background rounded-xl p-6 relative">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
              2
            </div>
            <h3 className="text-xl font-semibold mt-4 mb-3 text-center">Select a Voice</h3>
            <p className="text-muted-foreground text-center">
              Choose from our selection of natural-sounding voice options.
            </p>
          </div>

          <div className="bg-background rounded-xl p-6 relative">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
              3
            </div>
            <h3 className="text-xl font-semibold mt-4 mb-3 text-center">Generate & Download</h3>
            <p className="text-muted-foreground text-center">
              Click generate and download your high-quality audio file instantly.
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-2">
            Start creating natural speech from text instantly
          </p>
          <p className="text-lg font-medium">
            No credit card required. Unlimited access.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
