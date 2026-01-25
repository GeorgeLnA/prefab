import React, { useState } from 'react';
import { AnimatedButton } from '../components/ui/animated-button';
import { supabase } from '../lib/supabase';
import SEO from '../components/SEO';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
    budget: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitting(true);
    try {
      const { error } = await supabase.from('submissions').insert({
        form_type: 'contact',
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        message: formData.message || null,
        project_type: formData.projectType || null,
        budget: formData.budget || null,
      });
      if (error) throw error;
      setSubmitted(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Submission failed');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Prefab Homes. Schedule a consultation, discuss your project, or request a quote. Our expert team is ready to help build your dream home."
        url="/contact"
      />
      <div>
      <section 
        className="py-32 bg-gray-900 relative overflow-hidden"
        style={{ width: '100vw', marginLeft: '50%', transform: 'translateX(-50%)', maxWidth: 'none' }}
      >
        <div className="w-full px-4 sm:px-5 relative">
          <div className="text-center">
            <div className="text-primary text-sm uppercase tracking-wider mb-4 font-body font-medium">GET IN TOUCH</div>
            <h1 className="text-5xl md:text-6xl font-heading font-light text-white mb-6 leading-tight">
              Let's Build Your Dream Home
            </h1>
            <p className="text-xl text-white leading-relaxed font-body font-normal">
              Ready to start your prefab home journey? Our expert team is here to guide you 
              through every step of the process.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="pt-8 md:pt-20 pb-20 bg-white">
        <div className="w-full px-4 sm:px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl sm:text-3xl font-heading font-thin text-gray-800 mb-3 sm:mb-4">Start Your Project</h2>
                <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 font-body font-normal leading-relaxed">
                  {submitted
                    ? "We've received your message and will get back to you within 24 hours."
                    : "Fill out the form below and we'll get back to you within 24 hours to discuss your project."}
                </p>

                {submitted ? (
                  <p className="text-primary font-medium">Thanks! We&apos;ll be in touch soon.</p>
                ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-thin text-gray-700 mb-1.5 sm:mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-sm sm:text-base"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-thin text-gray-700 mb-1.5 sm:mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-sm sm:text-base"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-thin text-gray-700 mb-1.5 sm:mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-sm sm:text-base"
                        placeholder="+44 123 456 7890"
                      />
                    </div>
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-thin text-gray-700 mb-1.5 sm:mb-2">
                        Project Type
                      </label>
                      <div className="relative">
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          className="w-full pl-4 pr-10 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-sm sm:text-base bg-white appearance-none"
                        >
                          <option value="">Select project type</option>
                          <option value="modular">Modular Home</option>
                          <option value="nordy">Nordy</option>
                          <option value="smart">Smart Home</option>
                          <option value="modern">Modern Home</option>
                          <option value="modern-b">Modern-B</option>
                          <option value="custom">Custom Design</option>
                        </select>
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-thin text-gray-700 mb-1.5 sm:mb-2">
                      Budget Range
                    </label>
                    <div className="relative">
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full pl-4 pr-10 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-sm sm:text-base bg-white appearance-none"
                      >
                        <option value="">Select budget range</option>
                        <option value="100k-less">£100,000 or less</option>
                        <option value="100k-250k">£100,000 - £250,000</option>
                        <option value="250-300k">£250,000 - £300,000</option>
                        <option value="300-400k">£300,000 - £400,000</option>
                        <option value="400-500k">£400,000 - £500,000</option>
                        <option value="500k+">£500,000+</option>
                      </select>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-thin text-gray-700 mb-1.5 sm:mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-sm sm:text-base resize-none"
                      placeholder="Tell us about your project, timeline, location, and any specific requirements..."
                    ></textarea>
                  </div>

                  {submitError && <p className="text-red-600 text-sm">{submitError}</p>}

                  <AnimatedButton
                    type="submit"
                    variant="yellowOnWhite"
                    className="w-full px-6 sm:px-8 py-3 sm:py-4 font-thin text-sm sm:text-base disabled:opacity-50"
                    disabled={submitting}
                  >
                    {submitting ? 'Sending…' : 'Send Message'}
                  </AnimatedButton>
                </form>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Phone */}
              <div className="bg-white p-8 rounded-lg">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-6">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-gray-800 mb-2 font-heading">Call Us</h3>
                    <p className="text-gray-900 mb-2 font-body font-normal">
                      <a href="tel:+447495788669" className="text-primary hover:text-primary-hover transition-colors">
                        +44 7495788669
                      </a>
                    </p>
                    <p className="text-sm text-gray-900 font-body font-medium">
                      Monday - Friday: 8:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white p-8 rounded-lg">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-6">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-gray-800 mb-2 font-heading">Email Us</h3>
                    <p className="text-gray-900 mb-2 font-body font-normal">
                      <a href="mailto:prefabhomes.uk@gmail.com" className="text-primary hover:text-primary-hover transition-colors">
                        prefabhomes.uk@gmail.com
                      </a>
                    </p>
                    <p className="text-sm text-gray-900 font-body font-medium">
                      We respond within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Process Timeline */}
              <div className="bg-primary/5 p-8 rounded-lg">
                <h3 className="text-xl font-light text-gray-800 mb-6 font-heading">What Happens Next?</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-light text-gray-800 font-heading">Initial Consultation</h4>
                      <p className="text-gray-900 text-sm font-body font-normal">We'll discuss your vision, requirements, and timeline</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-light text-gray-800 font-heading">Design & Quote</h4>
                      <p className="text-gray-900 text-sm font-body font-normal">Custom design proposal with detailed pricing</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-light text-gray-800 font-heading">Project Start</h4>
                      <p className="text-gray-900 text-sm font-body font-normal">Begin manufacturing and site preparation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
    </>
  );
};

export default ContactPage;