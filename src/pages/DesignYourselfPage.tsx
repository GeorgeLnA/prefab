import React, { useState } from 'react';
import { houseData } from '../data/houses';

const modularBases = houseData.filter(h => h.category === 'MODULAR');
const woodTypes = ['Pine', 'Oak', 'Spruce', 'Cedar'];

const DesignYourselfPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selectedBase, setSelectedBase] = useState<string | null>(null);
  const [size, setSize] = useState('Medium');
  const [rooms, setRooms] = useState(3);
  const [wood, setWood] = useState(woodTypes[0]);
  const [budget, setBudget] = useState('');
  const [additional, setAdditional] = useState('');
  const [contact, setContact] = useState({ name: '', email: '', phone: '' });

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-heading font-bold text-primary mb-10 text-center">Design Your Own Modular Home</h1>
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Stepper */}
          <div className="flex justify-between mb-8">
            <div className={`flex-1 text-center ${step === 1 ? 'font-bold text-primary' : 'text-gray-400'}`}>1. Pick Base</div>
            <div className="w-8 border-t-2 border-gray-200 mx-2 mt-3"></div>
            <div className={`flex-1 text-center ${step === 2 ? 'font-bold text-primary' : 'text-gray-400'}`}>2. Add Features</div>
            <div className="w-8 border-t-2 border-gray-200 mx-2 mt-3"></div>
            <div className={`flex-1 text-center ${step === 3 ? 'font-bold text-primary' : 'text-gray-400'}`}>3. Budget & Info</div>
            <div className="w-8 border-t-2 border-gray-200 mx-2 mt-3"></div>
            <div className={`flex-1 text-center ${step === 4 ? 'font-bold text-primary' : 'text-gray-400'}`}>4. Contact</div>
          </div>

          {/* Step 1: Pick Base */}
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-semibold mb-6">Pick your modular base</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {modularBases.map((base) => (
                  <button
                    key={base.name}
                    onClick={() => setSelectedBase(base.name)}
                    className={`rounded-lg overflow-hidden shadow-md border-4 transition-all duration-300 ${selectedBase === base.name ? 'border-primary' : 'border-transparent'}`}
                  >
                    <img src={base.imageUrl} alt={base.name} className="w-full h-40 object-cover" />
                    <div className="p-4 text-lg font-medium">{base.name}</div>
                  </button>
                ))}
              </div>
              <button
                className="bg-primary text-white px-8 py-3 rounded-lg font-bold mt-4 disabled:opacity-50"
                disabled={!selectedBase}
                onClick={() => setStep(2)}
              >
                Next: Add Features
              </button>
            </div>
          )}

          {/* Step 2: Add Features */}
          {step === 2 && (
            <div>
              <h2 className="text-2xl font-semibold mb-6">Add features</h2>
              <div className="mb-6">
                <label className="block mb-2 font-medium">Size</label>
                <select value={size} onChange={e => setSize(e.target.value)} className="w-full border rounded-lg px-4 py-2">
                  <option value="Small">Small</option>
                  <option value="Medium">Medium</option>
                  <option value="Large">Large</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block mb-2 font-medium">Number of rooms</label>
                <input
                  type="number"
                  min={1}
                  max={10}
                  value={rooms}
                  onChange={e => setRooms(Number(e.target.value))}
                  className="w-full border rounded-lg px-4 py-2"
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 font-medium">Type of wood</label>
                <select value={wood} onChange={e => setWood(e.target.value)} className="w-full border rounded-lg px-4 py-2">
                  {woodTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <button
                className="bg-primary text-white px-8 py-3 rounded-lg font-bold mt-4"
                onClick={() => setStep(3)}
              >
                Next: Budget & Info
              </button>
            </div>
          )}

          {/* Step 3: Budget & Additional Info */}
          {step === 3 && (
            <div>
              <h2 className="text-2xl font-semibold mb-6">Budget & Additional Information</h2>
              <div className="mb-6">
                <label className="block mb-2 font-medium">Your budget (£)</label>
                <input
                  type="number"
                  min={0}
                  value={budget}
                  onChange={e => setBudget(e.target.value)}
                  className="w-full border rounded-lg px-4 py-2"
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 font-medium">Additional information</label>
                <textarea
                  value={additional}
                  onChange={e => setAdditional(e.target.value)}
                  className="w-full border rounded-lg px-4 py-2 min-h-[100px]"
                  placeholder="Tell us more about your preferences, needs, or any special requests..."
                />
              </div>
              <button
                className="bg-primary text-white px-8 py-3 rounded-lg font-bold mt-4"
                onClick={() => setStep(4)}
              >
                Next: Contact Details
              </button>
            </div>
          )}

          {/* Step 4: Contact Details */}
          {step === 4 && (
            <div>
              <h2 className="text-2xl font-semibold mb-6">Contact Details</h2>
              <div className="mb-6">
                <label className="block mb-2 font-medium">Name</label>
                <input
                  type="text"
                  value={contact.name}
                  onChange={e => setContact({ ...contact, name: e.target.value })}
                  className="w-full border rounded-lg px-4 py-2"
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 font-medium">Email</label>
                <input
                  type="email"
                  value={contact.email}
                  onChange={e => setContact({ ...contact, email: e.target.value })}
                  className="w-full border rounded-lg px-4 py-2"
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 font-medium">Phone</label>
                <input
                  type="tel"
                  value={contact.phone}
                  onChange={e => setContact({ ...contact, phone: e.target.value })}
                  className="w-full border rounded-lg px-4 py-2"
                />
              </div>
              {/* Summary */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h3 className="text-lg font-bold mb-2">Summary</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li><strong>Base:</strong> {selectedBase}</li>
                  <li><strong>Size:</strong> {size}</li>
                  <li><strong>Rooms:</strong> {rooms}</li>
                  <li><strong>Wood:</strong> {wood}</li>
                  <li><strong>Budget:</strong> £{budget}</li>
                  <li><strong>Additional Info:</strong> {additional || 'None'}</li>
                </ul>
              </div>
              <button
                className="bg-primary text-white px-8 py-3 rounded-lg font-bold mt-4"
                onClick={() => alert('Design submitted!')}
              >
                Submit Design
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DesignYourselfPage; 