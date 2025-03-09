
import { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Mic, Volume2 } from "lucide-react";
import { generateSpeech } from '@/utils/api';
import { useToast } from "@/hooks/use-toast";

interface Voice {
  id: string;
  name: string;
  accent: string;
}

const voices: Voice[] = [
  { id: 'voice-118', name: 'Guy', accent: 'UK' },
  { id: 'voice-30', name: 'Maisie', accent: 'UK' },
  { id: 'voice-33', name: 'Olivia', accent: 'UK' },
];

const TTSConverter = () => {
  const [selectedVoice, setSelectedVoice] = useState<string>(voices[0].id);
  const [text, setText] = useState<string>('');
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { toast } = useToast();

  const handleVoiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedVoice(e.target.value);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleGenerate = async () => {
    if (text.length < 9) {
      toast({
        title: "Text too short",
        description: "Please enter text that is at least 9 characters long.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    try {
      const result = await generateSpeech(text, selectedVoice);
      
      if (typeof result === 'string') {
        setAudioUrl(result);
      } else if (result instanceof Blob) {
        setAudioUrl(URL.createObjectURL(result));
      }
      
      toast({
        title: "Audio generated",
        description: "Your text has been converted to speech.",
      });
    } catch (error) {
      console.error('Error generating speech:', error);
      toast({
        title: "Generation failed",
        description: "Failed to generate audio. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const previewVoice = () => {
    // In a real app, you would have sample audio for each voice
    // This is a placeholder for that functionality
    toast({
      title: "Voice preview",
      description: `This is a sample of the ${voices.find(v => v.id === selectedVoice)?.name} voice.`,
    });
  };

  const handleAudioPlay = () => {
    setIsPlaying(true);
  };

  const handleAudioPause = () => {
    setIsPlaying(false);
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
  };

  return (
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
            <select 
              className="h-10 px-3 py-2 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              value={selectedVoice}
              onChange={handleVoiceChange}
            >
              {voices.map((voice) => (
                <option key={voice.id} value={voice.id}>
                  {voice.name} ({voice.accent})
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-end">
            <Button 
              size="sm" 
              variant="outline" 
              className="gap-2 h-10"
              onClick={previewVoice}
            >
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
            value={text}
            onChange={handleTextChange}
          ></textarea>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="text-sm text-muted-foreground">
            <span className="font-medium">Pro tip:</span> Try different voices for unique results
          </div>
          <Button 
            className="gap-2 bg-primary hover:bg-primary/90"
            onClick={handleGenerate}
            disabled={isGenerating}
          >
            <Mic size={16} />
            {isGenerating ? 'Generating...' : 'Generate Audio'}
          </Button>
        </div>

        {isGenerating && (
          <div className="h-10 flex items-center justify-center space-x-1">
            <div className="w-1 h-6 bg-primary/80 rounded-full animate-wave-1"></div>
            <div className="w-1 h-8 bg-primary/80 rounded-full animate-wave-2"></div>
            <div className="w-1 h-10 bg-primary/80 rounded-full animate-wave-3"></div>
            <div className="w-1 h-8 bg-primary/80 rounded-full animate-wave-4"></div>
            <div className="w-1 h-6 bg-primary/80 rounded-full animate-wave-5"></div>
          </div>
        )}

        {audioUrl && (
          <div className="mt-4">
            <audio 
              ref={audioRef}
              controls
              src={audioUrl}
              className="w-full"
              onPlay={handleAudioPlay}
              onPause={handleAudioPause}
              onEnded={handleAudioEnded}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TTSConverter;
