import React from 'react';

const stats = [
  { value: '130', label: 'house designs' },
  { value: '18,000', label: 'realisations' },
  { value: '30', label: 'years on the market' },
  { value: '1,600', label: 'specialists employed' },
];

const StatsSection: React.FC = () => (
  <section className="bg-white py-24">
    <div className="container mx-auto px-4 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">Houses created with passion and respect for tradition</h2>
      <p className="text-xl text-gray-700 mb-12 text-center">The numbers speak for themselves.</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 w-full max-w-5xl">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center justify-center bg-gray-100 rounded-xl shadow p-8">
            <div className="text-5xl font-extrabold text-primary mb-2">{stat.value}</div>
            <div className="text-lg text-gray-700 font-medium text-center uppercase tracking-wide">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection; 