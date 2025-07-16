import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center">
            <div className="text-primary text-sm uppercase tracking-wider mb-4 font-body font-medium">ABOUT PREFAB HOMES</div>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 p-12 rounded-lg text-center">
              <div className="text-6xl text-gray-400 mb-6">✏️</div>
              <h2 className="text-3xl font-light text-gray-800 mb-6 font-heading font-bold">Content Ready for Customization</h2>
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-800 mb-6 font-heading font-bold">Our Impact</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-body font-normal">
              Numbers that reflect our commitment to quality and innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">A+++</div>
              <div className="text-gray-600">Energy Rating</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;