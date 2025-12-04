import React from 'react';

const SmartHouse: React.FC = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-blue-300 text-sm uppercase tracking-wider mb-2">SMART TECHNOLOGY</div>
        <h2 className="text-3xl md:text-4xl font-light text-white mb-2 leading-tight text-center">
          Smart <span className="text-blue-400 font-bold">Connected Homes</span>
        </h2>
        <p className="text-blue-200 text-base mb-6 text-center max-w-2xl mx-auto">
          Experience the future of living with our <span className="text-blue-400 font-semibold">smart home technology</span> integrated into every prefab home.
        </p>
        
        {/* Smart Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div className="bg-blue-800/50 rounded-xl p-4 backdrop-blur-sm border border-blue-700/30">
            <div className="text-3xl mb-2">🏠</div>
            <h3 className="text-lg font-semibold mb-2 text-blue-300">Smart Security</h3>
            <p className="text-blue-200 text-sm">Advanced security systems with remote monitoring, smart locks, and motion sensors for complete peace of mind.</p>
          </div>
          
          <div className="bg-blue-800/50 rounded-xl p-4 backdrop-blur-sm border border-blue-700/30">
            <div className="text-3xl mb-2">🌡️</div>
            <h3 className="text-lg font-semibold mb-2 text-blue-300">Climate Control</h3>
            <p className="text-blue-200 text-sm">Intelligent HVAC systems that learn your preferences and optimize energy usage automatically.</p>
          </div>
          
          <div className="bg-blue-800/50 rounded-xl p-4 backdrop-blur-sm border border-blue-700/30">
            <div className="text-3xl mb-2">💡</div>
            <h3 className="text-lg font-semibold mb-2 text-blue-300">Smart Lighting</h3>
            <p className="text-blue-200 text-sm">Automated lighting systems that adapt to your schedule and create the perfect ambiance.</p>
          </div>
          
          <div className="bg-blue-800/50 rounded-xl p-4 backdrop-blur-sm border border-blue-700/30">
            <div className="text-3xl mb-2">📱</div>
            <h3 className="text-lg font-semibold mb-2 text-blue-300">Mobile Control</h3>
            <p className="text-blue-200 text-sm">Control every aspect of your home from anywhere with our intuitive mobile app.</p>
          </div>
          
          <div className="bg-blue-800/50 rounded-xl p-4 backdrop-blur-sm border border-blue-700/30">
            <div className="text-3xl mb-2">⚡</div>
            <h3 className="text-lg font-semibold mb-2 text-blue-300">Energy Management</h3>
            <p className="text-blue-200 text-sm">Smart energy monitoring and optimization to reduce costs and environmental impact.</p>
          </div>
        </div>
        
        {/* Technology Showcase */}
        <div className="bg-blue-800/30 rounded-2xl p-6 backdrop-blur-sm border border-blue-700/20">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold text-blue-300 mb-2">Cutting-Edge Technology</h3>
            <p className="text-blue-200 text-base">Every home comes with the latest smart home technology pre-installed and ready to use.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <span className="text-blue-200 text-sm">Wi-Fi 6 mesh network throughout</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <span className="text-blue-200 text-sm">Voice-controlled assistants</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <span className="text-blue-200 text-sm">Smart thermostats and sensors</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <span className="text-blue-200 text-sm">Automated blinds and curtains</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <span className="text-blue-200 text-sm">Smart door locks and cameras</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <span className="text-blue-200 text-sm">Energy monitoring dashboard</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <span className="text-blue-200 text-sm">Automated irrigation systems</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <span className="text-blue-200 text-sm">24/7 remote monitoring</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-8">
          <div className="inline-block bg-blue-400/20 text-blue-300 font-bold text-lg px-6 py-3 rounded-lg border border-blue-400/30">
            Experience the future of living today
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartHouse; 