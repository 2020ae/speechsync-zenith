
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Mic, Volume2 } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="pt-28 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-10">
          <div className={`space-y-4 transition-all duration-700 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fade-in">
              Introducing SpeechSync
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              Transform Text to Realistic Speech
              <span className="block text-primary">in Seconds</span>
            </h1>
            <p className="max-w-[700px] mx-auto text-xl text-muted-foreground animate-fade-in animate-in-delay-1">
              Premium quality voices that sound indistinguishable from human speech.
              Perfect for content creators, educators, and businesses.
            </p>
          </div>

          <div className={`flex flex-col sm:flex-row items-center gap-4 w-full max-w-md mx-auto transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
            <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 gap-2 h-12 px-6">
              Get Started <ArrowRight size={16} />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2 h-12 px-6">
              Live Demo
            </Button>
          </div>
          
          <div className={`w-full max-w-4xl mx-auto transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
            <div className="p-1 rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-background">
              <div className="glass-card rounded-xl overflow-hidden">
                <div className="bg-secondary/50 p-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-destructive"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                    <div className="h-3 w-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="text-sm font-medium">SpeechSync Converter</div>
                  <div className="w-20"></div>
                </div>
                
                <div className="p-6 md:p-10 space-y-6">
                  <div className="flex flex-col md:flex-row gap-4 items-stretch">
                    <div className="flex-1 flex flex-col gap-2">
                      <label className="text-sm font-medium text-muted-foreground">Voice Selection</label>
                      <select className="h-10 px-3 py-2 rounded-md border border-input bg-background text-sm">
                        <option value="voice-118">Guy (UK)</option>
                        <option value="voice-30">Maisie (UK)</option>
                        <option value="voice-33">Olivia (UK)</option>
                      </select>
                    </div>
                    <div className="flex items-end">
                      <Button size="sm" variant="outline" className="gap-2 h-10">
                        <Volume2 size={16} />
                        Preview Voice
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">Your Text</label>
                    <textarea 
                      className="w-full min-h-[100px] px-3 py-2 rounded-md border border-input bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Enter your text here..."
                    ></textarea>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-muted-foreground">
                      <span className="font-medium">Pro tip:</span> Try different voices for unique results
                    </div>
                    <Button className="gap-2 bg-primary hover:bg-primary/90">
                      <Mic size={16} />
                      Generate Audio
                    </Button>
                  </div>

                  <div className="h-10 flex items-center justify-center space-x-1">
                    <div className="w-1 h-6 bg-primary/80 rounded-full animate-wave-1"></div>
                    <div className="w-1 h-8 bg-primary/80 rounded-full animate-wave-2"></div>
                    <div className="w-1 h-10 bg-primary/80 rounded-full animate-wave-3"></div>
                    <div className="w-1 h-8 bg-primary/80 rounded-full animate-wave-4"></div>
                    <div className="w-1 h-6 bg-primary/80 rounded-full animate-wave-5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`flex flex-wrap justify-center gap-x-8 gap-y-4 pt-6 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
              <span className="text-muted-foreground">Natural-sounding voices</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
              <span className="text-muted-foreground">Multiple voice options</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
              <span className="text-muted-foreground">Instant generation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
              <span className="text-muted-foreground">Simple to use</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
