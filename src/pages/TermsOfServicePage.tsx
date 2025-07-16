import React from 'react';

const TermsOfServicePage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-light text-white mb-6">Terms of Service</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These terms govern your use of our services and establish the legal 
              framework for our business relationship.
            </p>
            <p className="text-gray-400 mt-4">Last updated: January 2025</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            <h2 className="text-2xl font-heading font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-6 font-body font-normal">
              By accessing and using our website and services, you accept and agree to be bound by 
              these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>

            <h2 className="text-2xl font-heading font-semibold text-gray-800 mb-4">2. Description of Services</h2>
            <p className="text-gray-700 mb-6 font-body font-normal">
              Prefab Homes provides design, manufacturing, and construction services for prefabricated 
              homes. Our services include:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 font-body font-normal">
              <li>Custom home design and consultation</li>
              <li>Factory manufacturing of prefab home components</li>
              <li>On-site assembly and installation</li>
              <li>Project management and coordination</li>
              <li>After-sales support and warranty services</li>
            </ul>

            <h2 className="text-2xl font-heading font-semibold text-gray-800 mb-4">3. Ordering and Contracts</h2>
            <p className="text-gray-700 mb-6 font-body font-normal">
              All orders are subject to acceptance by Prefab Homes. A separate construction contract 
              will be executed for each project, which will include:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 font-body font-normal">
              <li>Detailed project specifications</li>
              <li>Timeline and delivery schedule</li>
              <li>Payment terms and schedule</li>
              <li>Warranty provisions</li>
              <li>Change order procedures</li>
            </ul>

            <h2 className="text-2xl font-heading font-semibold text-gray-800 mb-4">4. Pricing and Payment</h2>
            <p className="text-gray-700 mb-6">
              Prices are subject to change without notice. Payment terms will be specified in your 
              construction contract. Typical payment schedule includes:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>10% deposit upon contract signing</li>
              <li>40% at manufacturing commencement</li>
              <li>40% upon delivery to site</li>
              <li>10% upon project completion</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Delivery and Installation</h2>
            <p className="text-gray-700 mb-6">
              Delivery dates are estimates and may be subject to change due to weather, site conditions, 
              or other factors beyond our control. Customer is responsible for:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Site preparation and access</li>
              <li>Utility connections</li>
              <li>Required permits and approvals</li>
              <li>Site safety and security</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Warranties</h2>
            <p className="text-gray-700 mb-6">
              We provide the following warranties:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>10-year structural warranty</li>
              <li>2-year mechanical systems warranty</li>
              <li>1-year finishes and fixtures warranty</li>
              <li>Manufacturer warranties on appliances and equipment</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-700 mb-6">
              Our liability is limited to the contract price of your project. We are not liable for 
              indirect, consequential, or punitive damages. Some jurisdictions do not allow limitation 
              of liability, so these limitations may not apply to you.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Force Majeure</h2>
            <p className="text-gray-700 mb-6">
              We are not liable for delays or failures due to circumstances beyond our reasonable control, 
              including but not limited to natural disasters, government actions, labor disputes, or 
              material shortages.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Intellectual Property</h2>
            <p className="text-gray-700 mb-6">
              All designs, plans, and proprietary information remain the intellectual property of 
              Prefab Homes. Customers receive a license to use designs for their specific project only.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Dispute Resolution</h2>
            <p className="text-gray-700 mb-6">
              Any disputes will be resolved through binding arbitration in accordance with UK law. 
              The prevailing party may be entitled to attorney fees and costs.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Termination</h2>
            <p className="text-gray-700 mb-6">
              Either party may terminate the agreement under certain conditions as specified in the 
              construction contract. Termination procedures and penalties will be detailed in your 
              specific contract.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">12. Governing Law</h2>
            <p className="text-gray-700 mb-6">
              These terms are governed by the laws of England and Wales. Any legal proceedings will 
              be conducted in the appropriate courts of England and Wales.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">13. Changes to Terms</h2>
            <p className="text-gray-700 mb-6">
              We reserve the right to modify these terms at any time. Changes will be posted on our 
              website and will be effective immediately upon posting.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">14. Contact Information</h2>
            <p className="text-gray-700 mb-6">
              For questions about these terms, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>Email:</strong> legal@prefabhomes.co.uk</p>
              <p className="text-gray-700 mb-2"><strong>Phone:</strong> +44-798-5602627</p>
              <p className="text-gray-700"><strong>Address:</strong> 123 Construction Avenue, London, UK SW1A 1AA</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfServicePage;