
import { Helmet } from 'react-helmet';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';
import TTSConverter from '@/components/TTSConverter';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>SpeechSync | Transform Text to Realistic Speech</title>
        <meta name="description" content="SpeechSync converts your text to natural-sounding speech in seconds. Choose from multiple premium voices for content creation, education, and more." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Hero />
          <Features />
          <section className="py-20">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center text-center mb-16">
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  Try It Now
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  Experience SpeechSync
                </h2>
                <p className="max-w-[700px] text-lg text-muted-foreground">
                  Convert your text to natural-sounding speech with our powerful text-to-speech engine.
                </p>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <TTSConverter />
              </div>
            </div>
          </section>
          <HowItWorks />
          <Pricing />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
