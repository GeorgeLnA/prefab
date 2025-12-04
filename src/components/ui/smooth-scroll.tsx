// component.tsx
'use client';
import { ReactLenis } from 'lenis/react';
import React, { forwardRef } from 'react';

const Component = forwardRef<HTMLElement>((props, ref) => {
  return (
    <ReactLenis root>
      <main ref={ref}>
        <article>
          {/* First slide: video background with overlay text */}
          <section className='relative text-white h-screen w-full bg-slate-950 grid place-content-center sticky top-0 overflow-hidden'>
            <video
              src="/Begin_with_an_202507080107.mp4"
              autoPlay
              playsInline
              muted
              loop
              className="absolute inset-0 w-full h-full object-cover z-0"
              poster="/prefab_homes_modern_b_80_front_perspective.jpg"
            />
            <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-10'></div>
          </section>

          <section className='text-black grid place-content-center h-screen sticky top-0 rounded-tr-2xl rounded-tl-2xl overflow-hidden'>
            <div className="relative z-10 max-w-3xl mx-auto px-8 py-12 rounded-xl bg-white shadow-lg backdrop-blur-md">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-center">Technology</h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-primary text-center">Revolutionizing Prefab Construction</h2>
              <p className="text-lg text-gray-700 mb-4 text-center">
                Our prefab homes are built using cutting-edge technology that combines precision engineering, sustainable materials, and rapid on-site assembly. This approach delivers homes that are not only beautiful and comfortable, but also energy-efficient, durable, and environmentally responsible.
              </p>
              <p className="text-gray-600 mb-6 text-center">
                By leveraging advanced manufacturing processes and modular design, we minimize waste, reduce construction time, and ensure consistent quality in every home we build. Our technology is the result of years of research and innovation, setting a new standard for modern living.
              </p>
              <h3 className="text-xl md:text-2xl font-semibold mb-2 text-primary text-center">Precision Manufacturing Process</h3>
              <p className="text-gray-700 mb-4 text-center">
                Every component of your home is manufactured in a controlled factory environment using state-of-the-art machinery. This ensures millimeter-perfect accuracy, superior fit and finish, and eliminates the risks of weather delays or on-site errors.
              </p>
              <p className="text-gray-600 mb-2 text-center">Our process includes:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 mx-auto max-w-xl">
                <li>3D modeling and digital fabrication for custom designs</li>
                <li>Automated cutting and assembly for structural elements</li>
                <li>Rigorous quality control at every stage</li>
              </ul>
              <p className="text-gray-600 text-center">
                Once complete, modules are transported to your site and assembled in a matter of days, not months.
              </p>
            </div>
          </section>
          <section className='text-white h-screen w-full grid place-content-center sticky top-0'>
            <div className="relative z-10 max-w-3xl mx-auto px-8 py-12 rounded-xl bg-white text-black shadow-lg backdrop-blur-md">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">Sustainable, High-Performance Materials</h2>
              <p className="text-lg mb-4 text-center">
                We are committed to sustainability at every step. Our homes use eco-friendly, high-performance materials that provide excellent insulation, air quality, and longevity.
              </p>
              <ul className="list-disc list-inside mb-6 mx-auto max-w-xl">
                <li>Engineered timber and steel for strength and flexibility</li>
                <li>Non-toxic insulation and finishes for a healthy indoor environment</li>
                <li>Energy-efficient windows and doors</li>
              </ul>
              <p className="mb-8 text-center">
                These choices reduce your carbon footprint and ensure your home is comfortable year-round, with lower energy bills and minimal maintenance.
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">Benefits of Our Technology</h2>
              <ul className="list-disc list-inside mb-6 mx-auto max-w-xl">
                <li>Rapid construction: move in within weeks, not months</li>
                <li>Consistent, high-quality results every time</li>
                <li>Flexible designs to suit your lifestyle and needs</li>
                <li>Reduced waste and environmental impact</li>
                <li>Healthier, more comfortable living spaces</li>
              </ul>
              <p className="text-center">
                Our technology is the foundation for a better, smarter, and more sustainable home. Experience the future of living—today.
              </p>
            </div>
          </section>
        </article>
      </main>
    </ReactLenis>
  );
});

Component.displayName = 'Component';

export default Component; 