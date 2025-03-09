
import { Helmet } from 'react-helmet';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | SpeechSync</title>
        <meta name="description" content="SpeechSync Terms of Service - Please read these terms carefully before using our text-to-speech platform." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">Terms of Service</h1>
              <p className="text-muted-foreground mb-8">Last updated: June 10, 2023</p>
              
              <div className="prose prose-lg max-w-none space-y-6">
                <p className="text-lg text-muted-foreground">
                  Welcome to SpeechSync. Please read these Terms of Service ("Terms") carefully as they contain important 
                  information about your legal rights, remedies, and obligations. By accessing or using the SpeechSync 
                  platform, you agree to comply with and be bound by these Terms.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
                <p className="text-lg text-muted-foreground">
                  By accessing or using the SpeechSync platform, you agree to be bound by these Terms and our Privacy Policy. 
                  If you do not agree to these Terms, you may not access or use the platform.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">2. Changes to Terms</h2>
                <p className="text-lg text-muted-foreground">
                  We may modify these Terms at any time. If we make changes, we will provide notice by updating the date at 
                  the top of these Terms and by maintaining a current version of the Terms at speechsync.com/terms. Your 
                  continued use of the platform after the changes are made will constitute your acceptance of the changes.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">3. Platform Use and Restrictions</h2>
                <p className="text-lg text-muted-foreground">
                  SpeechSync grants you a limited, non-exclusive, non-transferable, revocable license to access and use 
                  the platform. You may not use the platform for any illegal purpose or in violation of any local, state, 
                  national, or international law. Specifically, you agree not to:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
                  <li>Use the platform to generate speech that is defamatory, obscene, harassing, or otherwise objectionable</li>
                  <li>Infringe the intellectual property rights of any third party</li>
                  <li>Attempt to gain unauthorized access to the platform or its related systems</li>
                  <li>Interfere with or disrupt the integrity or performance of the platform</li>
                  <li>Reverse engineer, decompile, or disassemble any portion of the platform</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">4. Intellectual Property Rights</h2>
                <p className="text-lg text-muted-foreground">
                  All content, features, and functionality of the platform, including but not limited to text, graphics, 
                  logos, and software, are owned by SpeechSync and are protected by copyright, trademark, and other 
                  intellectual property laws.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">5. User Content</h2>
                <p className="text-lg text-muted-foreground">
                  You retain all rights to the text you submit to the platform for speech synthesis. However, by 
                  submitting content, you grant SpeechSync a non-exclusive, royalty-free license to use, modify, and 
                  process your content solely for the purpose of providing the speech synthesis service.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">6. Disclaimer of Warranties</h2>
                <p className="text-lg text-muted-foreground">
                  THE PLATFORM IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. 
                  SPEECHSYNC DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED 
                  WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">7. Limitation of Liability</h2>
                <p className="text-lg text-muted-foreground">
                  SPEECHSYNC SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE 
                  DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR USE, ARISING OUT OF OR IN CONNECTION 
                  WITH THE PLATFORM OR THESE TERMS.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">8. Termination</h2>
                <p className="text-lg text-muted-foreground">
                  We may terminate or suspend your access to the platform at any time, with or without cause, without 
                  prior notice or liability.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">9. Governing Law</h2>
                <p className="text-lg text-muted-foreground">
                  These Terms shall be governed by and construed in accordance with the laws of the United States, 
                  without regard to its conflict of law provisions.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact Us</h2>
                <p className="text-lg text-muted-foreground">
                  If you have any questions about these Terms, please contact us at legal@speechsync.com.
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

export default Terms;
