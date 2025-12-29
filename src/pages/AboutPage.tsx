import React from 'react';
import SEO from '../components/SEO';

const AboutPage: React.FC = () => {
  return (
    <>
      <SEO
        title="About Prefab Homes"
        description="Learn about Prefab Homes - building the future of housing with innovative prefab technology, sustainable construction, and exceptional quality."
        url="/about"
      />
      <div className="bg-white">
      <div className="pt-20">
      {/* Hero Section */}
      <section 
        className="py-20 bg-gray-900 relative overflow-hidden"
        style={{ width: '100vw', marginLeft: '50%', transform: 'translateX(-50%)', maxWidth: 'none' }}
      >
        
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="text-primary text-sm uppercase tracking-wider mb-4 font-body font-medium">ABOUT PREFAB HOMES</div>
            <h1 className="text-5xl md:text-6xl font-heading font-light text-white mb-6 leading-tight">
              Building the Future of Housing
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-body font-normal">
              [This section is ready for your custom content. Please provide the specific 
              information you'd like to include about your company, mission, and values.]
            </p>
          </div>
        </div>
      </section>

      {/* Placeholder Content Section */}
      <section className="pt-8 md:pt-20 pb-20 bg-white">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 p-12 rounded-lg text-center">
              <div className="text-6xl text-gray-400 mb-6">✏️</div>
              <h2 className="text-3xl font-light text-gray-800 mb-6 font-heading">Content Ready for Customization</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed font-body font-normal">
                This About Us page is prepared and waiting for your unique company story, 
                mission statement, team information, and values. Please provide the content 
                you'd like to showcase here.
              </p>
              <div className="bg-white p-6 rounded-lg border-l-4 border-primary">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 font-heading font-bold">Suggested Content Sections:</h3>
                <ul className="text-left text-gray-600 space-y-2 font-body font-normal">
                  <li>• Company history and founding story</li>
                  <li>• Mission and vision statements</li>
                  <li>• Core values and principles</li>
                  <li>• Team members and expertise</li>
                  <li>• Awards and certifications</li>
                  <li>• Sustainability commitments</li>
                  <li>• Quality standards and processes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section (Generic) */}
      <section className="pt-8 md:pt-20 pb-20 bg-gray-50">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-800 mb-6 font-heading">Our Impact</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-body font-normal">
              Numbers that reflect our commitment to quality and innovation
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-gray-600">Homes Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
    </>
  );
};

export default AboutPage;