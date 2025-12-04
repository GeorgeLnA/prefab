import React from 'react';

const Interiors: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
              alt="Modern interior design"
              className="w-full h-[600px] object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-light text-gray-800 mb-6">
              Premium house - inviting interiors too!
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our architects have prepared some stunning ready-made interior designs... check them out...
            </p>
            <a 
              href="#interiors" 
              className="inline-block bg-black text-white px-8 py-3 font-medium hover:bg-gray-900 transition-colors duration-200"
            >
              CHECK MORE &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interiors;