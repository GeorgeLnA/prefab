import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
    budget: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center">
            <div className="text-primary text-sm uppercase tracking-wider mb-4 font-body font-medium">GET IN TOUCH</div>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              Let's Build Your Dream Home
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-body font-normal">
              Ready to start your prefab home journey? Our expert team is here to guide you 
              through every step of the process.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-light text-gray-800 mb-6 font-heading font-bold">Start Your Project</h2>
                <p className="text-gray-600 mb-8 font-body font-normal">
                  Fill out the form below and we'll get back to you within 24 hours to discuss your project.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="+44 123 456 7890"
                      />
                    </div>
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Select project type</option>
                        <option value="modular">Modular Home</option>
                        <option value="skandy-nordy">Skandy-Nordy</option>
                        <option value="smart">Smart Home</option>
                        <option value="modern">Modern Home</option>
                        <option value="modern-b">Modern-B</option>
                        <option value="custom">Custom Design</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select budget range</option>
                      <option value="250-300k">£250,000 - £300,000</option>
                      <option value="300-400k">£300,000 - £400,000</option>
                      <option value="400-500k">£400,000 - £500,000</option>
                      <option value="500k+">£500,000+</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Tell us about your project, timeline, location, and any specific requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-hover text-white px-8 py-4 font-medium transition-colors duration-200 rounded-sm"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Office Info */}
              <div className="bg-white p-8 border border-gray-200 rounded-lg">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-6">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 font-heading font-bold">Visit Our Showroom</h3>
                    <p className="text-gray-600 mb-2 font-body font-normal">
                      123 Construction Avenue<br />
                      London, UK SW1A 1AA
                    </p>
                    <p className="text-sm text-gray-500 font-body font-medium">
                      Open Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white p-8 border border-gray-200 rounded-lg">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-6">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 font-heading font-bold">Call Us</h3>
                    <p className="text-gray-600 mb-2 font-body font-normal">
                      <a href="tel:+447985602627" className="text-primary hover:text-primary-hover transition-colors">
                        +44-798-5602627
                      </a>
                    </p>
                    <p className="text-sm text-gray-500 font-body font-medium">
                      Monday - Friday: 8:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white p-8 border border-gray-200 rounded-lg">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-6">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 font-heading font-bold">Email Us</h3>
                    <p className="text-gray-600 mb-2 font-body font-normal">
                      <a href="mailto:info@prefabhomes.co.uk" className="text-primary hover:text-primary-hover transition-colors">
                        info@prefabhomes.co.uk
                      </a>
                    </p>
                    <p className="text-sm text-gray-500 font-body font-medium">
                      We respond within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Process Timeline */}
              <div className="bg-primary/5 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-6 font-heading font-bold">What Happens Next?</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 font-heading font-bold">Initial Consultation</h4>
                      <p className="text-gray-600 text-sm font-body font-normal">We'll discuss your vision, requirements, and timeline</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 font-heading font-bold">Design & Quote</h4>
                      <p className="text-gray-600 text-sm font-body font-normal">Custom design proposal with detailed pricing</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 font-heading font-bold">Project Start</h4>
                      <p className="text-gray-600 text-sm font-body font-normal">Begin manufacturing and site preparation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-800 mb-4 font-heading font-bold">Find Us</h2>
            <p className="text-gray-600 font-body font-normal">Visit our showroom to see our prefab homes up close</p>
          </div>
          
          <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl text-gray-500 mb-4">🗺️</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2 font-heading font-bold">Interactive Map</h3>
              <p className="text-gray-600 font-body font-normal">Map integration coming soon</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;