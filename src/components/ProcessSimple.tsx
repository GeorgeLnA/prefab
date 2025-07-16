import React from 'react';

const steps = [
  {
    icon: '📝',
    title: 'Design & Planning',
    desc: 'Customize your perfect home with our architects.',
    duration: '2-4 weeks',
  },
  {
    icon: '🏭',
    title: 'Factory Production',
    desc: 'Precision-built in our controlled factory.',
    duration: '6-8 weeks',
  },
  {
    icon: '🚧',
    title: 'Site Preparation',
    desc: 'Foundation and utilities prepared on your site.',
    duration: '2-3 weeks',
  },
  {
    icon: '🏡',
    title: 'Assembly & Completion',
    desc: 'Delivered and assembled in just days.',
    duration: '3-5 days',
  },
];

const ProcessSimple: React.FC = () => (
  <section className="bg-gray-900 py-24">
    <div className="container mx-auto px-4 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center uppercase tracking-wide">Our Process</h2>
      <p className="text-xl text-primary font-semibold mb-12 text-center">From scratch to built in 7 weeks</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-6xl">
        {steps.map((step, idx) => (
          <div key={idx} className="bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
            <div className="text-5xl mb-4 text-white">{step.icon}</div>
            <div className="text-xl font-bold text-primary mb-2">{step.title}</div>
            <div className="text-gray-200 mb-4">{step.desc}</div>
            <div className="bg-primary/10 text-primary font-semibold px-4 py-1 rounded-full">{step.duration}</div>
          </div>
        ))}
      </div>
      <p className="text-lg text-gray-200 mt-10 text-center max-w-2xl">
        Our streamlined process takes you from your first idea to a finished home in as little as <span className='text-primary font-bold'>7 weeks</span>. Each step is designed for speed, quality, and peace of mind.
      </p>
    </div>
  </section>
);

export default ProcessSimple; 