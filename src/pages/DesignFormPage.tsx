import React, { useState } from 'react';
import { houseData } from '../data/houses';

const DesignFormPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // House Base Selection
    selectedBase: '',
    
    // Design & Size
    size: 'Medium',
    rooms: 3,
    bathrooms: 2,
    floors: 1,
    
    // Materials & Features
    woodType: 'Pine',
    roofType: 'Traditional',
    insulation: 'Standard',
    heating: 'Electric',
    smartHome: false,
    solarPanels: false,
    
    // Budget & Timeline
    budget: '',
    timeline: '3-6 months',
    financing: 'Cash',
    
    // Location & Site
    location: '',
    siteType: 'Flat',
    utilities: 'Available',
    
    // Additional Details
    additionalComments: '',
    specialRequirements: '',
    
    // Contact Information
    name: '',
    email: '',
    phone: '',
    address: '',
    preferredContact: 'Email'
  });

  const modularBases = houseData.filter(h => h.category === 'MODULAR');
  const allBases = houseData;

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Design form submitted successfully! We will contact you soon.');
  };

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">DESIGN YOUR DREAM HOME</h1>
          <p className="text-xl text-gray-600">Let's create something amazing together</p>
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-gray-600">Step {step} of 6</span>
            <span className="text-sm text-gray-500">{Math.round((step / 6) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 6) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Step 1: House Base Selection */}
          {step === 1 && (
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Choose Your House Base</h2>
              <p className="text-gray-600 mb-8">Select a foundation design to start with</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {allBases.slice(0, 9).map((house) => (
                  <button
                    key={house.name}
                    onClick={() => handleInputChange('selectedBase', house.name)}
                    className={`rounded-xl overflow-hidden shadow-md border-3 transition-all duration-300 hover:scale-105 ${
                      formData.selectedBase === house.name 
                        ? 'border-primary ring-4 ring-primary/20' 
                        : 'border-gray-200 hover:border-primary/50'
                    }`}
                  >
                    <img src={house.imageUrl} alt={house.name} className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <div className="font-bold text-lg mb-1">{house.name}</div>
                      <div className="text-gray-500 text-sm mb-2">{house.squareMeters} m² • {house.type}</div>
                      <div className="text-primary font-semibold">£{house.price.toLocaleString()}</div>
                    </div>
                  </button>
                ))}
              </div>
              
              <button
                className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-lg font-bold transition-colors disabled:opacity-50"
                disabled={!formData.selectedBase}
                onClick={nextStep}
              >
                Next: Design Details →
              </button>
            </div>
          )}

          {/* Step 2: Design & Size */}
          {step === 2 && (
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Design & Size Details</h2>
              <p className="text-gray-600 mb-8">Customize the layout and dimensions</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">House Size</label>
                  <select 
                    value={formData.size} 
                    onChange={(e) => handleInputChange('size', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="Small">Small (50-80 m²)</option>
                    <option value="Medium">Medium (80-120 m²)</option>
                    <option value="Large">Large (120-180 m²)</option>
                    <option value="Extra Large">Extra Large (180+ m²)</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Number of Floors</label>
                  <select 
                    value={formData.floors} 
                    onChange={(e) => handleInputChange('floors', Number(e.target.value))}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value={1}>1 Floor</option>
                    <option value={1.5}>1.5 Floors</option>
                    <option value={2}>2 Floors</option>
                    <option value={3}>3 Floors</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
                  <input
                    type="number"
                    min={1}
                    max={8}
                    value={formData.rooms}
                    onChange={(e) => handleInputChange('rooms', Number(e.target.value))}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bathrooms</label>
                  <input
                    type="number"
                    min={1}
                    max={5}
                    value={formData.bathrooms}
                    onChange={(e) => handleInputChange('bathrooms', Number(e.target.value))}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="flex gap-4">
                <button
                  className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-bold transition-colors"
                  onClick={prevStep}
                >
                  ← Back
                </button>
                <button
                  className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-lg font-bold transition-colors"
                  onClick={nextStep}
                >
                  Next: Materials & Features →
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Materials & Features */}
          {step === 3 && (
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Materials & Features</h2>
              <p className="text-gray-600 mb-8">Choose your preferred materials and smart features</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Wood Type</label>
                  <select 
                    value={formData.woodType} 
                    onChange={(e) => handleInputChange('woodType', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="Pine">Pine</option>
                    <option value="Oak">Oak</option>
                    <option value="Spruce">Spruce</option>
                    <option value="Cedar">Cedar</option>
                    <option value="Birch">Birch</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Roof Type</label>
                  <select 
                    value={formData.roofType} 
                    onChange={(e) => handleInputChange('roofType', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="Traditional">Traditional</option>
                    <option value="Modern Flat">Modern Flat</option>
                    <option value="Gabled">Gabled</option>
                    <option value="Hip">Hip</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Insulation Level</label>
                  <select 
                    value={formData.insulation} 
                    onChange={(e) => handleInputChange('insulation', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="Standard">Standard</option>
                    <option value="Enhanced">Enhanced</option>
                    <option value="Premium">Premium (A+++)</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Heating System</label>
                  <select 
                    value={formData.heating} 
                    onChange={(e) => handleInputChange('heating', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="Electric">Electric</option>
                    <option value="Heat Pump">Heat Pump</option>
                    <option value="Gas">Gas</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Additional Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.smartHome}
                      onChange={(e) => handleInputChange('smartHome', e.target.checked)}
                      className="w-5 h-5 text-primary"
                    />
                    <span className="text-gray-700">Smart Home System</span>
                  </label>
                  
                  <label className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.solarPanels}
                      onChange={(e) => handleInputChange('solarPanels', e.target.checked)}
                      className="w-5 h-5 text-primary"
                    />
                    <span className="text-gray-700">Solar Panels</span>
                  </label>
                </div>
              </div>
              
              <div className="flex gap-4">
                <button
                  className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-bold transition-colors"
                  onClick={prevStep}
                >
                  ← Back
                </button>
                <button
                  className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-lg font-bold transition-colors"
                  onClick={nextStep}
                >
                  Next: Budget & Timeline →
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Budget & Timeline */}
          {step === 4 && (
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Budget & Timeline</h2>
              <p className="text-gray-600 mb-8">Tell us about your budget and preferred timeline</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range (£)</label>
                  <input
                    type="number"
                    placeholder="e.g. 250000"
                    value={formData.budget}
                    onChange={(e) => handleInputChange('budget', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Timeline</label>
                  <select 
                    value={formData.timeline} 
                    onChange={(e) => handleInputChange('timeline', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="ASAP">ASAP (Rush order)</option>
                    <option value="1-3 months">1-3 months</option>
                    <option value="3-6 months">3-6 months</option>
                    <option value="6-12 months">6-12 months</option>
                    <option value="12+ months">12+ months</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Financing Method</label>
                  <select 
                    value={formData.financing} 
                    onChange={(e) => handleInputChange('financing', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="Cash">Cash Payment</option>
                    <option value="Mortgage">Mortgage</option>
                    <option value="Financing">Company Financing</option>
                    <option value="Mixed">Mixed Payment</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Location</label>
                  <input
                    type="text"
                    placeholder="City, Region"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Site Type</label>
                  <select 
                    value={formData.siteType} 
                    onChange={(e) => handleInputChange('siteType', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="Flat">Flat Ground</option>
                    <option value="Sloped">Sloped Ground</option>
                    <option value="Uneven">Uneven Terrain</option>
                    <option value="Waterfront">Waterfront</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Utilities Status</label>
                  <select 
                    value={formData.utilities} 
                    onChange={(e) => handleInputChange('utilities', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="Available">All Available</option>
                    <option value="Partial">Partially Available</option>
                    <option value="None">None Available</option>
                    <option value="Unknown">Unknown</option>
                  </select>
                </div>
              </div>
              
              <div className="flex gap-4">
                <button
                  className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-bold transition-colors"
                  onClick={prevStep}
                >
                  ← Back
                </button>
                <button
                  className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-lg font-bold transition-colors"
                  onClick={nextStep}
                >
                  Next: Additional Details →
                </button>
              </div>
            </div>
          )}

          {/* Step 5: Additional Details */}
          {step === 5 && (
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Additional Details</h2>
              <p className="text-gray-600 mb-8">Share any special requirements or comments</p>
              
              <div className="space-y-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Special Requirements</label>
                  <textarea
                    rows={4}
                    placeholder="Any accessibility needs, special features, or specific requirements..."
                    value={formData.specialRequirements}
                    onChange={(e) => handleInputChange('specialRequirements', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Additional Comments</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us more about your vision, preferences, or any other details..."
                    value={formData.additionalComments}
                    onChange={(e) => handleInputChange('additionalComments', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="flex gap-4">
                <button
                  className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-bold transition-colors"
                  onClick={prevStep}
                >
                  ← Back
                </button>
                <button
                  className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-lg font-bold transition-colors"
                  onClick={nextStep}
                >
                  Next: Contact Information →
                </button>
              </div>
            </div>
          )}

          {/* Step 6: Contact Information & Summary */}
          {step === 6 && (
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Contact Information</h2>
              <p className="text-gray-600 mb-8">How can we reach you?</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Contact Method</label>
                  <select 
                    value={formData.preferredContact} 
                    onChange={(e) => handleInputChange('preferredContact', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="Email">Email</option>
                    <option value="Phone">Phone</option>
                    <option value="Both">Both</option>
                  </select>
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                  <input
                    type="text"
                    placeholder="Your current address"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
              
              {/* Summary */}
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Project Summary</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div><strong>Base Design:</strong> {formData.selectedBase}</div>
                  <div><strong>Size:</strong> {formData.size}</div>
                  <div><strong>Floors:</strong> {formData.floors}</div>
                  <div><strong>Bedrooms:</strong> {formData.rooms}</div>
                  <div><strong>Bathrooms:</strong> {formData.bathrooms}</div>
                  <div><strong>Wood Type:</strong> {formData.woodType}</div>
                  <div><strong>Budget:</strong> £{formData.budget ? Number(formData.budget).toLocaleString() : 'Not specified'}</div>
                  <div><strong>Timeline:</strong> {formData.timeline}</div>
                  <div><strong>Location:</strong> {formData.location || 'Not specified'}</div>
                  <div><strong>Smart Home:</strong> {formData.smartHome ? 'Yes' : 'No'}</div>
                  <div><strong>Solar Panels:</strong> {formData.solarPanels ? 'Yes' : 'No'}</div>
                  <div><strong>Financing:</strong> {formData.financing}</div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <button
                  className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-bold transition-colors"
                  onClick={prevStep}
                >
                  ← Back
                </button>
                <button
                  className="bg-primary hover:bg-primary-hover text-white px-12 py-4 rounded-lg font-bold text-lg transition-colors disabled:opacity-50"
                  disabled={!formData.name || !formData.email || !formData.phone}
                  onClick={handleSubmit}
                >
                  Submit Design Request 🏠
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DesignFormPage; 