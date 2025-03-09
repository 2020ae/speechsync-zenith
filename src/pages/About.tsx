
import { Helmet } from 'react-helmet';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | SpeechSync</title>
        <meta name="description" content="Learn about SpeechSync, our mission, and the team behind our AI-powered text-to-speech technology." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">About SpeechSync</h1>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground mb-6">
                  SpeechSync is a cutting-edge text-to-speech platform designed to transform written content into natural, 
                  human-like speech. Founded in 2022, we're passionate about making communication more accessible 
                  and engaging through advanced AI technology.
                </p>
                
                <h2 className="text-2xl font-semibold mt-10 mb-4">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  At SpeechSync, our mission is to break down barriers between written and spoken communication. 
                  We believe that everyone should have access to high-quality voice synthesis technology, whether you're 
                  a content creator, educator, business professional, or someone with accessibility needs.
                </p>
                
                <h2 className="text-2xl font-semibold mt-10 mb-4">Our Technology</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Our voice synthesis engine is built on the latest advancements in deep learning and natural language 
                  processing. We've trained our models on thousands of hours of human speech to create voices that 
                  sound amazingly natural, with appropriate intonation, rhythm, and emotional context.
                </p>
                
                <h2 className="text-2xl font-semibold mt-10 mb-4">The Team</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  SpeechSync was founded by a team of AI researchers, linguists, and software engineers who share a 
                  passion for voice technology. Our diverse team brings expertise from leading technology companies 
                  and research institutions, united by the goal of creating the most natural-sounding synthetic voices 
                  in the industry.
                </p>
                
                <h2 className="text-2xl font-semibold mt-10 mb-4">Our Values</h2>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
                  <li>
                    <span className="font-medium text-foreground">Innovation:</span> We constantly push the boundaries of what's possible in voice synthesis.
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Accessibility:</span> We believe voice technology should be available to everyone.
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Quality:</span> We're committed to creating the most natural-sounding voices available.
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Privacy:</span> We respect user data and maintain stringent privacy standards.
                  </li>
                </ul>
                
                <p className="text-lg text-muted-foreground mt-10">
                  Thank you for choosing SpeechSync. We're excited to be part of your journey in bringing your content to life.
                </p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default About;
