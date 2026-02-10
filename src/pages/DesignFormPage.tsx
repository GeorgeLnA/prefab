import React, { useState } from 'react';
import { houseData, getHousesByCategory } from '../data/houses';
import { insertDesignRequest } from '../lib/submission-insert';
import SEO from '../components/SEO';
import { buildKeywords } from '../data/seo-keywords';

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

  // Same series as Designs page: only Nordy, Skandy, Modern, Modular (no placeholders)
  const designSeriesMap: Record<string, string> = {
    'ALL': 'ALL',
    'Nordy': 'NORDY',
    'Skandy': 'MOBILE',
    'Modern': 'MODERN',
    'Modular': 'MODULAR',
  };
  const designSeriesOptions = ['ALL', 'Nordy', 'Skandy', 'Modern', 'Modular'];
  const [selectedSeries, setSelectedSeries] = useState<string>('ALL');

  const basesForSelection =
    selectedSeries === 'ALL'
      ? houseData.filter(
          (h) =>
            h.category === 'NORDY' ||
            h.category === 'MOBILE' ||
            h.category === 'MODERN' ||
            h.category === 'MODULAR'
        )
      : getHousesByCategory(designSeriesMap[selectedSeries] ?? 'ALL');

  const handleInputChange = (field: string, value: string | number | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const nextStepLabels: Record<number, string> = {
    1: 'Next: Design Details →',
    2: 'Next: Budget & Timeline →',
    3: 'Next: Additional Details →',
    4: 'Next: Contact Information →',
  };
  const showNavBar = step < 5 || (step === 5 && !submitted);
  const canProceedStep1 = step === 1 ? !!formData.selectedBase : true;
  const canSubmitStep5 = step === 5 && !!formData.name && !!formData.email && !!formData.phone;

  const handleSubmit = async () => {
    setSubmitError(null);
    setSubmitting(true);
    try {
      const { error } = await insertDesignRequest({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || undefined,
        message: [formData.additionalComments, formData.specialRequirements].filter(Boolean).join('\n\n') || undefined,
        budget: formData.budget || undefined,
        payload: formData as unknown as Record<string, unknown>,
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
        title="Design Your Modular Home - Custom Prefab Home Builder"
        description="Design your modular prefab home online. Custom size, rooms, materials. UK wide. Oxford, London, Oxfordshire. Instant quote. Create your dream prefab home."
        url="/design-form"
        keywords={buildKeywords('design modular home UK, custom prefab home builder Oxford London, prefabricated house design, modular home configurator, instant quote prefab', { includeServices: true })}
      />
      <div className="bg-white">
      <div className="pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-24 sm:pb-28 min-h-screen bg-gray-50">
      <div className="w-full px-4 sm:px-5">
        <div className="w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-thin text-primary mb-4">DESIGN YOUR DREAM HOME</h1>
          <p className="text-xl text-gray-600">Let's create something amazing together</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Step 1: House Base Selection */}
          {step === 1 && (
            <div>
              <h2 className="text-3xl font-thin text-gray-800 mb-2">Choose Your House Base</h2>
              <p className="text-gray-600 mb-6">Select a foundation design to start with</p>

              {/* Series filter */}
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
                {designSeriesOptions.map((series) => (
                  <button
                    key={series}
                    type="button"
                    onClick={() => setSelectedSeries(series)}
                    className={`px-4 py-2 rounded-lg text-sm font-thin transition-all duration-200 ${
                      selectedSeries === series
                        ? 'bg-primary text-black'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {series}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {basesForSelection.map((house) => (
                  <button
                    key={house.name}
                    type="button"
                    onClick={() => handleInputChange('selectedBase', house.name)}
                    className={`rounded-xl overflow-hidden shadow-md border-3 transition-all duration-300 md:hover:scale-105 ${
                      formData.selectedBase === house.name
                        ? 'border-primary ring-4 ring-primary/20'
                        : 'border-gray-200 md:hover:border-primary/50'
                    }`}
                  >
                    <img src={house.imageUrl} alt={house.name} className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <div className="font-thin text-lg mb-1">{house.name}</div>
                      <div className="text-gray-500 text-sm">{house.squareFeet} ft² • {house.type}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Design & Size */}
          {step === 2 && (
            <div>
              <h2 className="text-3xl font-thin text-gray-800 mb-2">Design & Size Details</h2>
              <p className="text-gray-600 mb-8">Customize the layout and dimensions</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-thin text-gray-700 mb-2">House Size</label>
                  <select 
                    value={formData.size} 
                    onChange={(e) => handleInputChange('size', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="Small">Small (538-861 ft² / 50-80 m²)</option>
                    <option value="Medium">Medium (861-1292 ft² / 80-120 m²)</option>
                    <option value="Large">Large (1292-1938 ft² / 120-180 m²)</option>
                    <option value="Extra Large">Extra Large (1938+ ft² / 180+ m²)</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-thin text-gray-700 mb-2">Number of Floors</label>
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
                  <label className="block text-sm font-thin text-gray-700 mb-2">Bedrooms</label>
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
                  <label className="block text-sm font-thin text-gray-700 mb-2">Bathrooms</label>
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
            </div>
          )}

          {/* Step 3: Budget & Timeline */}
          {step === 3 && (
            <div>
              <h2 className="text-3xl font-thin text-gray-800 mb-2">Budget & Timeline</h2>
              <p className="text-gray-600 mb-8">Tell us about your budget and preferred timeline</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-thin text-gray-700 mb-2">Budget Range (£)</label>
                  <input
                    type="number"
                    placeholder="e.g. 250000"
                    value={formData.budget}
                    onChange={(e) => handleInputChange('budget', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-thin text-gray-700 mb-2">Preferred Timeline</label>
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
                  <label className="block text-sm font-thin text-gray-700 mb-2">Financing Method</label>
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
                  <label className="block text-sm font-thin text-gray-700 mb-2">Project Location</label>
                  <input
                    type="text"
                    placeholder="City, Region"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-thin text-gray-700 mb-2">Site Type</label>
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
                  <label className="block text-sm font-thin text-gray-700 mb-2">Utilities Status</label>
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
            </div>
          )}

          {/* Step 4: Additional Details */}
          {step === 4 && (
            <div>
              <h2 className="text-3xl font-thin text-gray-800 mb-2">Additional Details</h2>
              <p className="text-gray-600 mb-8">Share any special requirements or comments</p>
              
              <div className="space-y-6 mb-8">
                <div>
                  <label className="block text-sm font-thin text-gray-700 mb-2">Special Requirements</label>
                  <textarea
                    rows={4}
                    placeholder="Any accessibility needs, special features, or specific requirements..."
                    value={formData.specialRequirements}
                    onChange={(e) => handleInputChange('specialRequirements', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-thin text-gray-700 mb-2">Additional Comments</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us more about your vision, preferences, or any other details..."
                    value={formData.additionalComments}
                    onChange={(e) => handleInputChange('additionalComments', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Contact Information & Summary */}
          {step === 5 && (
            <div>
              <h2 className="text-3xl font-thin text-gray-800 mb-2">Contact Information</h2>
              <p className="text-gray-600 mb-8">How can we reach you?</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-thin text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-thin text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-thin text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-thin text-gray-700 mb-2">Preferred Contact Method</label>
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
                  <label className="block text-sm font-thin text-gray-700 mb-2">Address</label>
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
                <h3 className="text-xl font-thin text-gray-800 mb-4">Project Summary</h3>
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
              
              {submitted ? (
                <div className="py-6 text-center">
                  <p className="text-primary font-medium text-lg">Thanks! We&apos;ll contact you soon.</p>
                </div>
              ) : (
                submitError && <p className="text-red-600 text-sm mb-4">{submitError}</p>
              )}
            </div>
          )}
        </div>
        </div>
      </div>

      {/* Fixed bottom nav: island (same width/padding as header) */}
      {showNavBar && (
        <div className="fixed bottom-0 left-0 right-0 z-40 px-4 sm:px-5 pb-4 sm:pb-5">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 p-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="px-5 py-2.5 rounded-lg text-sm font-thin bg-gray-200 text-gray-800 hover:bg-gray-300 transition-colors"
              >
                ← Back
              </button>
            )}
            {step < 5 ? (
              <button
                type="button"
                onClick={nextStep}
                disabled={step === 1 && !canProceedStep1}
                className="px-6 py-2.5 rounded-lg text-sm font-thin bg-primary text-black hover:bg-primary/90 disabled:opacity-50 disabled:pointer-events-none transition-colors"
              >
                {nextStepLabels[step]}
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={submitting || !canSubmitStep5}
                className="px-6 py-2.5 rounded-lg text-sm font-thin bg-primary text-black hover:bg-primary/90 disabled:opacity-50 disabled:pointer-events-none transition-colors"
              >
                {submitting ? 'Sending…' : 'Submit Design Request'}
              </button>
            )}
            </div>
            <div className="flex flex-col items-stretch min-w-0 flex-1 ml-4">
              <div className="flex items-center justify-end gap-2 text-sm">
                <span className="text-gray-500">{Math.round((step / 5) * 100)}% Complete</span>
              </div>
              <div className="w-full mt-1.5 bg-gray-200 rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-primary h-full rounded-full transition-all duration-300"
                  style={{ width: `${(step / 5) * 100}%` }}
                />
              </div>
            </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
    </>
  );
};

export default DesignFormPage; 