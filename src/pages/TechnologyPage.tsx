import React from 'react';
import { AnimatedButton } from '../components/ui/animated-button';
import SEO from '../components/SEO';

const TechnologyPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Technology & Innovation"
        description="Advanced prefab home technology: highly energy efficient design, precision CNC manufacturing, smart home integration, and sustainable materials. Built for performance."
        url="/technology"
      />
      <div>
      {/* Hero Section */}
      <section className="py-24 sm:py-32 bg-gray-900 relative overflow-hidden">
        
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="text-primary text-sm uppercase tracking-wider mb-4 font-body font-medium">TECHNOLOGY</div>
            <h1 className="text-5xl md:text-6xl font-heading font-light text-white mb-6 leading-tight">
              Built for Performance
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed font-body font-normal">
              Advanced systems and precision engineering that deliver exceptional quality, efficiency, and comfort.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Energy Efficiency */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <div className="text-primary text-sm uppercase tracking-wider mb-4 font-body font-medium">ENERGY EFFICIENCY</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-light text-gray-900 mb-4 sm:mb-6">Highly Energy Efficient Performance</h2>
            <p className="text-lg sm:text-xl font-body font-normal text-gray-900 mb-6 sm:mb-8 leading-relaxed">
              Our homes achieve the highest energy ratings through superior insulation, triple-glazed windows, and integrated renewable energy systems. Annual heating costs are typically under £600.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="border-l-4 border-primary pl-6">
                <div className="text-2xl font-bold text-gray-900 mb-2">90%</div>
                <div className="text-gray-900 font-body font-normal">Energy Savings</div>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <div className="text-2xl font-bold text-gray-900 mb-2">Solar Ready</div>
                <div className="text-gray-900 font-body font-normal">Pre-wired Integration</div>
              </div>
            </div>
          </div>

          {/* Manufacturing */}
          <div className="mb-20">
            <div className="text-primary text-sm uppercase tracking-wider mb-4 font-body font-medium">MANUFACTURING</div>
            <h2 className="text-3xl md:text-4xl font-heading font-light text-gray-900 mb-6">Precision Engineering</h2>
            <p className="text-lg text-gray-900 mb-8 leading-relaxed font-body font-normal">
              Every component is manufactured in our controlled factory environment using advanced CNC machinery and automated systems. This ensures consistent quality, reduced waste, and faster assembly.
            </p>
            <div className="bg-white p-8 rounded-lg">
              <ul className="space-y-4 text-gray-900 font-body font-normal">
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>CNC precision cutting for perfect fit and structural integrity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Automated assembly systems for consistent quality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Quality control at every stage of production</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Reduced construction waste by up to 50%</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Smart Systems */}
          <div className="mb-20">
            <div className="text-primary text-sm uppercase tracking-wider mb-4 font-body font-medium">SMART SYSTEMS</div>
            <h2 className="text-3xl md:text-4xl font-heading font-light text-gray-900 mb-6">Integrated Technology</h2>
            <p className="text-lg text-gray-900 mb-8 leading-relaxed font-body font-normal">
              Every home includes pre-wired infrastructure for smart home automation, allowing complete control of lighting, climate, security, and energy management through your phone or voice assistant.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
              <div className="rounded-lg p-6">
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">Home Automation</h3>
                <p className="text-gray-900 font-body font-normal">
                  Control lighting, climate, and appliances from anywhere. Compatible with Alexa, Google Home, and Apple HomeKit.
                </p>
              </div>
              <div className="rounded-lg p-6">
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">Security & Monitoring</h3>
                <p className="text-gray-900 font-body font-normal">
                  Integrated smart locks, cameras, and sensors provide comprehensive security and peace of mind.
                </p>
              </div>
            </div>
          </div>

          {/* Materials */}
          <div className="mb-20">
            <div className="text-primary text-sm uppercase tracking-wider mb-4 font-body font-medium">MATERIALS</div>
            <h2 className="text-3xl md:text-4xl font-heading font-light text-gray-900 mb-6">Sustainable Construction</h2>
            <p className="text-lg text-gray-900 mb-8 leading-relaxed font-body font-normal">
              We use responsibly sourced materials and eco-friendly construction methods. Our homes are built to last with minimal environmental impact.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">Structural Components</h3>
                <ul className="space-y-2 text-gray-900 font-body font-normal">
                  <li>• Engineered timber frames</li>
                  <li>• Structural insulated panels (SIPs)</li>
                  <li>• Recycled steel components</li>
                  <li>• Low-carbon concrete alternatives</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">Finishes & Insulation</h3>
                <ul className="space-y-2 text-gray-900 font-body font-normal">
                  <li>• Natural and recycled insulation materials</li>
                  <li>• Sustainable timber cladding</li>
                  <li>• Low-VOC paints and finishes</li>
                  <li>• Energy-efficient triple-glazed windows</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Assembly */}
          <div>
            <div className="text-primary text-sm uppercase tracking-wider mb-4 font-body font-medium">ASSEMBLY</div>
            <h2 className="text-3xl md:text-4xl font-heading font-light text-gray-900 mb-6">Rapid Installation</h2>
            <p className="text-lg text-gray-900 mb-8 leading-relaxed font-body font-normal">
              Our modular design enables on-site assembly in just 3-5 days. This minimizes disruption, reduces construction time by up to 70%, and ensures consistent quality regardless of weather conditions.
            </p>
            <div className="bg-white p-8 rounded-lg">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">6-8</div>
                  <div className="text-gray-900 font-body font-normal">Weeks Manufacturing</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">3-5</div>
                  <div className="text-gray-900 font-body font-normal">Days On-Site Assembly</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">10-12</div>
                  <div className="text-gray-900 font-body font-normal">Weeks Total Timeline</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-black mb-4 sm:mb-6 leading-tight">
              Experience the Difference
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-black/90 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
              See how our technology and engineering create homes that are more efficient, faster to build, and built to last.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <AnimatedButton
                asLink={true}
            href="/contact" 
                variant="whiteOnYellow"
                className="px-6 sm:px-8 py-3 sm:py-4 font-thin text-sm sm:text-base md:text-lg w-full sm:w-auto text-center"
              >
                Schedule Consultation
              </AnimatedButton>
              <AnimatedButton
                asLink={true}
                href="/designs"
                variant="whiteOnYellow"
                className="px-6 sm:px-8 py-3 sm:py-4 font-thin text-sm sm:text-base md:text-lg"
              >
                View Designs
              </AnimatedButton>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default TechnologyPage; 
