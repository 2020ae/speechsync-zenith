
import { 
  BarChart3, 
  Clock, 
  Code2, 
  Headphones, 
  Languages, 
  MicVocal, 
  Monitor, 
  MoveHorizontal
} from "lucide-react";

const Features = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Advanced Features
          </h2>
          <p className="max-w-[900px] text-muted-foreground text-lg">
            SpeechSync offers cutting-edge text-to-speech capabilities with a focus on quality and ease-of-use.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
          <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-5">
              <MicVocal size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Natural-Sounding Voices</h3>
            <p className="text-muted-foreground">
              Our AI-powered voices sound remarkably human, with natural intonation and emotion.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-5">
              <Languages size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Multiple Voice Options</h3>
            <p className="text-muted-foreground">
              Choose from a variety of voices with different accents and characteristics.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-5">
              <Clock size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Instant Generation</h3>
            <p className="text-muted-foreground">
              Convert your text to speech in seconds, with no lengthy processing times.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-5">
              <MoveHorizontal size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Simple to Use</h3>
            <p className="text-muted-foreground">
              Our intuitive interface makes it easy to create high-quality voice content.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-5">
              <Headphones size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Premium Audio Quality</h3>
            <p className="text-muted-foreground">
              Crystal clear audio output suitable for professional content creation.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-5">
              <Monitor size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Cross-Platform</h3>
            <p className="text-muted-foreground">
              Use SpeechSync on any device with a web browser, no installation required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
