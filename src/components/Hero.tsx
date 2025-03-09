
import { useEffect, useState } from 'react';
import TTSConverter from '@/components/TTSConverter';

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
          
          <div className={`w-full max-w-4xl mx-auto transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
            <div className="p-1 rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-background">
              <TTSConverter />
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
