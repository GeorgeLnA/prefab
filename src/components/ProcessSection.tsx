import React, { useState, useEffect } from 'react';

const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('process-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % 4);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const steps = [
    {
      number: '01',
      title: 'Design & Planning',
      description: 'Work with our architects to customize your perfect home design and finalize all specifications.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      duration: '2-4 weeks'
    },
    {
      number: '02',
      title: 'Factory Production',
      description: 'Your home is precision-built in our controlled factory environment using premium materials.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      duration: '6-8 weeks'
    },
    {
      number: '03',
      title: 'Site Preparation',
      description: 'Foundation and utilities are prepared while your home completes factory production.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      duration: '2-3 weeks'
    },
    {
      number: '04',
      title: 'Assembly & Completion',
      description: 'Your home is delivered and assembled on-site in just 3-5 days, ready for immediate occupancy.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      duration: '3-5 days'
    }
  ];

  return (
    <section id="process-section" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-primary text-sm uppercase tracking-wider mb-4">OUR PROCESS</div>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
            From Vision to Reality
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our streamlined process ensures your dream home becomes reality with precision, 
            quality, and remarkable speed.
          </p>
        </div>
        {/* Building Process Video */}
        <div className="flex flex-col items-center mb-16">
          <h3 className="text-3xl font-light text-white mb-6 drop-shadow-lg">Our Building Process</h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl text-center">
            Simplicity, speed, and quality—see how your prefab home comes together step by step.
          </p>
          <div className="flex justify-center w-full">
            <div className="relative inline-block max-w-4xl w-full">
              <video
                src="/Create_a_timelapse_202506241353.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[60vh] md:h-[70vh] overflow-hidden object-cover bg-white"
                style={{ background: '#fff' }}
              />
              {/* BorderBeam overlay if desired */}
              {/* <BorderBeam size={420} duration={14} delay={7} borderWidth={2} /> */}
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gray-700 z-0">
                  <div 
                    className={`h-full bg-primary transition-all duration-1000 ${
                      activeStep > index ? 'w-full' : 'w-0'
                    }`}
                  ></div>
                </div>
              )}

              {/* Step Card */}
              <div className={`relative z-10 bg-gray-800 p-8 rounded-lg transition-all duration-500 ${
                activeStep === index ? 'bg-primary/10 border-2 border-primary' : 'border-2 border-gray-700'
              }`}>
                {/* Step Number */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 transition-all duration-300 ${
                  activeStep === index ? 'bg-primary text-gray-900' : 'bg-gray-700 text-white'
                }`}>
                  <span className="text-xl font-bold">{step.number}</span>
                </div>

                {/* Icon */}
                <div className={`mb-4 transition-colors duration-300 ${
                  activeStep === index ? 'text-primary' : 'text-gray-400'
                }`}>
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{step.description}</p>
                
                {/* Duration Badge */}
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeStep === index 
                    ? 'bg-primary text-gray-900' 
                    : 'bg-gray-700 text-gray-300'
                }`}>
                  {step.duration}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 mb-12">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeStep === index ? 'bg-primary' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gray-800 p-8 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-gray-400 mb-6">
              Let's discuss your vision and begin the process of creating your perfect prefab home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-primary-hover text-gray-900 px-8 py-3 font-medium transition-colors duration-200 rounded-sm">
                Start Your Project
              </button>
              <button className="border border-gray-600 text-white px-8 py-3 font-medium hover:bg-gray-700 transition-colors duration-200 rounded-sm">
                Download Process Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;