
import { Helmet } from 'react-helmet';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | SpeechSync</title>
        <meta name="description" content="Learn how SpeechSync collects, uses, and protects your personal information." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>
              <p className="text-muted-foreground mb-8">Last updated: June 10, 2023</p>
              
              <div className="prose prose-lg max-w-none space-y-6">
                <p className="text-lg text-muted-foreground">
                  At SpeechSync, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
                  disclose, and safeguard your information when you use our text-to-speech platform.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
                <p className="text-lg text-muted-foreground">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
                  <li>Account information (name, email address, password)</li>
                  <li>Billing information (credit card details, billing address)</li>
                  <li>Text content you submit for speech synthesis</li>
                  <li>User preferences and settings</li>
                  <li>Communications with us</li>
                </ul>
                <p className="text-lg text-muted-foreground">
                  We also automatically collect certain information when you use our platform, including:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
                  <li>Log data (IP address, browser type, pages visited)</li>
                  <li>Device information (hardware model, operating system)</li>
                  <li>Usage information (features used, interactions with the platform)</li>
                  <li>Cookies and similar technologies</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
                <p className="text-lg text-muted-foreground">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
                  <li>Provide, maintain, and improve our platform</li>
                  <li>Process transactions and send related information</li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>Send technical notices, updates, security alerts, and support messages</li>
                  <li>Monitor and analyze trends, usage, and activities</li>
                  <li>Detect, prevent, and address technical issues</li>
                  <li>Improve our platform, products, services, and customer communications</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Share Your Information</h2>
                <p className="text-lg text-muted-foreground">
                  We may share your information in the following circumstances:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
                  <li>With service providers who perform services on our behalf</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect and defend our rights and property</li>
                  <li>With your consent or at your direction</li>
                </ul>
                <p className="text-lg text-muted-foreground">
                  We do not sell your personal information to third parties.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Security</h2>
                <p className="text-lg text-muted-foreground">
                  We implement appropriate technical and organizational measures to protect the security of your 
                  personal information. However, no method of transmission or storage is 100% secure, and we cannot 
                  guarantee absolute security.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">5. Your Rights and Choices</h2>
                <p className="text-lg text-muted-foreground">
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
                  <li>Access to the personal information we have about you</li>
                  <li>Correction of inaccurate or incomplete information</li>
                  <li>Deletion of your personal information</li>
                  <li>Restriction of processing of your personal information</li>
                  <li>Data portability</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">6. Children's Privacy</h2>
                <p className="text-lg text-muted-foreground">
                  Our platform is not intended for children under 13 years of age. We do not knowingly collect 
                  personal information from children under 13.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">7. Changes to this Privacy Policy</h2>
                <p className="text-lg text-muted-foreground">
                  We may update this Privacy Policy from time to time. If we make material changes, we will notify 
                  you by updating the date at the top of this policy and, in some cases, by providing additional notice.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact Us</h2>
                <p className="text-lg text-muted-foreground">
                  If you have any questions about this Privacy Policy, please contact us at privacy@speechsync.com.
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

export default Privacy;
