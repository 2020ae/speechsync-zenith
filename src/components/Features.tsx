
import { Laptop, Mic, Settings, Headphones, Zap, Layers } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Mic className="h-10 w-10 text-primary" />,
      title: "Lifelike Voices",
      description: "Our advanced AI generates human-like speech with natural intonation, emphasis, and emotion."
    },
    {
      icon: <Laptop className="h-10 w-10 text-primary" />,
      title: "Cross-Platform",
      description: "Use SpeechSync seamlessly across all your devices with our cloud-based solution."
    },
    {
      icon: <Settings className="h-10 w-10 text-primary" />,
      title: "Complete Control",
      description: "Adjust pitch, speed, and emphasis to get the perfect voice for your content."
    },
    {
      icon: <Headphones className="h-10 w-10 text-primary" />,
      title: "Premium Voices",
      description: "Choose from a diverse library of professional voice options across multiple languages."
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Instant Generation",
      description: "Generate high-quality audio in seconds, no matter the length of your text."
    },
    {
      icon: <Layers className="h-10 w-10 text-primary" />,
      title: "Format Support",
      description: "Export your audio in multiple formats compatible with any platform or device."
    }
  ];

  return (
    <section id="features" className="py-20 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Everything You Need for Perfect TTS
          </h2>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            SpeechSync combines powerful technology with an intuitive interface to deliver
            exceptional text-to-speech conversion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card rounded-xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
