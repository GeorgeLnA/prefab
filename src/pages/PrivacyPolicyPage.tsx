import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-light text-white mb-6">Privacy Policy</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, 
              use, and protect your personal information.
            </p>
            <p className="text-gray-400 mt-4">Last updated: January 2025</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 mb-6">
              We collect information you provide directly to us, such as when you create an account, 
              request a consultation, fill out a form, or communicate with us. This may include:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Name, email address, and phone number</li>
              <li>Project details and preferences</li>
              <li>Budget and timeline information</li>
              <li>Communication preferences</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 mb-6">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Provide, maintain, and improve our services</li>
              <li>Process and fulfill your requests</li>
              <li>Send you technical notices and support messages</li>
              <li>Communicate with you about products, services, and events</li>
              <li>Monitor and analyze trends and usage</li>
              <li>Detect, investigate, and prevent fraudulent transactions</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Information Sharing</h2>
            <p className="text-gray-700 mb-6">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy. We may share your information:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>With trusted service providers who assist in our operations</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and safety</li>
              <li>In connection with a business transfer or merger</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Data Security</h2>
            <p className="text-gray-700 mb-6">
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. However, no method of 
              transmission over the internet is 100% secure.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Your Rights</h2>
            <p className="text-gray-700 mb-6">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Access and update your personal information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to processing of your personal information</li>
              <li>Request restriction of processing</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Cookies and Tracking</h2>
            <p className="text-gray-700 mb-6">
              We use cookies and similar tracking technologies to enhance your experience on our website. 
              You can control cookie settings through your browser preferences.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Third-Party Links</h2>
            <p className="text-gray-700 mb-6">
              Our website may contain links to third-party websites. We are not responsible for the 
              privacy practices of these external sites.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Children's Privacy</h2>
            <p className="text-gray-700 mb-6">
              Our services are not intended for children under 16. We do not knowingly collect 
              personal information from children under 16.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Changes to This Policy</h2>
            <p className="text-gray-700 mb-6">
              We may update this privacy policy from time to time. We will notify you of any 
              significant changes by posting the new policy on our website.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Contact Us</h2>
            <p className="text-gray-700 mb-6">
              If you have any questions about this privacy policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>Email:</strong> privacy@prefabhomes.co.uk</p>
              <p className="text-gray-700 mb-2"><strong>Phone:</strong> +44-798-5602627</p>
              <p className="text-gray-700"><strong>Address:</strong> 123 Construction Avenue, London, UK SW1A 1AA</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;