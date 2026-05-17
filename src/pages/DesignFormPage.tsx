import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getHouseTotalAreaSqm, houseData, getHousesByCategory } from '../data/houses';
import { insertDesignRequest } from '../lib/submission-insert';
import SEO from '../components/SEO';
import { buildKeywords } from '../data/seo-keywords';
import { formatAreaSqm, formatUsdAmount, usdToUah } from '../lib/utils';

const DesignFormPage: React.FC = () => {
  const navigate = useNavigate();
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
  const designSeriesLabels: Record<string, string> = {
    ALL: 'Усі серії',
    Nordy: 'Nordy',
    Skandy: 'Skandy',
    Modern: 'Modern',
    Modular: 'Modular',
  };
  const sizeLabelUk: Record<string, string> = {
    Small: 'Компактний',
    Medium: 'Середній',
    Large: 'Просторий',
    'Extra Large': 'Максимальний',
  };
  const timelineUk: Record<string, string> = {
    ASAP: 'Якомога швидше',
    '1-3 months': '1–3 місяці',
    '3-6 months': '3–6 місяців',
    '6-12 months': '6–12 місяців',
    '12+ months': 'Понад 12 місяців',
  };
  const financingUk: Record<string, string> = {
    Cash: 'Власні кошти',
    Mortgage: 'Іпотека / кредит',
    Financing: 'Розтермінування',
    Mixed: 'Змішана схема',
  };
  const woodUk: Record<string, string> = {
    Pine: 'Сосна',
    Oak: 'Дуб',
    Cedar: 'Кедр',
  };
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

  const nextStepLabels: Record<number, string> = {
    1: 'Далі: параметри дому →',
    2: 'Далі: бюджет і строки →',
    3: 'Далі: додатково →',
    4: 'Далі: контакти →',
  };
  const showNavBar = step <= 5;
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
        budget: formData.budget ? String(usdToUah(Number(formData.budget))) : undefined,
        payload: formData as unknown as Record<string, unknown>,
      });
      if (error) throw error;
      navigate('/thanks');
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Не вдалося надіслати');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Спроєктуйте модульний дім — конструктор Prefab Homes"
        description="Онлайн-підбір базового проєкту модульного будинку в Україні: площа, планування, бюджет у доларах США. Prefab Homes — швидкий запит пропозиції."
        url="/design-form"
        keywords={buildKeywords('конструктор модульного будинку, індивідуальний каркасний дім, пропозиція ціна USD, проєкт будинку Україна', { includeServices: true })}
      />
      <div className="bg-white">
      <div className="pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-24 sm:pb-28 min-h-screen bg-gray-50">
      <div className="w-full px-4 sm:px-5">
        <div className="w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-thin text-primary mb-4">СПРОЄКТУЙТЕ СВІЙ ДІМ</h1>
          <p className="text-xl text-gray-600">Крок за кроком — від базової моделі до запиту пропозиції</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Step 1: House Base Selection */}
          {step === 1 && (
            <div>
              <h2 className="text-3xl font-thin text-gray-800 mb-2">Оберіть базову модель</h2>
              <p className="text-gray-600 mb-6">Стартовий проєкт, який далі налаштуємо під вас</p>

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
                    {designSeriesLabels[series]}
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
                      <div className="text-gray-500 text-sm">{formatAreaSqm(getHouseTotalAreaSqm(house))} • {house.type}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Design & Size */}
          {step === 2 && (
            <div>
              <h2 className="text-3xl font-thin text-gray-800 mb-2">Планування та площа</h2>
              <p className="text-gray-600 mb-8">Уточніть бажаний формат дому</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-thin text-gray-700 mb-2">Категорія площі</label>
                  <select 
                    value={formData.size} 
                    onChange={(e) => handleInputChange('size', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="Small">Компактний (50–80 м²)</option>
                    <option value="Medium">Середній (80–120 м²)</option>
                    <option value="Large">Просторий (120–180 м²)</option>
                    <option value="Extra Large">Максимальний (180+ м²)</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-thin text-gray-700 mb-2">Кількість поверхів</label>
                  <select 
                    value={formData.floors} 
                    onChange={(e) => handleInputChange('floors', Number(e.target.value))}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value={1}>1 поверх</option>
                    <option value={1.5}>1,5 поверхи</option>
                    <option value={2}>2 поверхи</option>
                    <option value={3}>3 поверхи</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-thin text-gray-700 mb-2">Спальні</label>
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
                  <label className="block text-sm font-thin text-gray-700 mb-2">Ванні кімнати</label>
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
              <h2 className="text-3xl font-thin text-gray-800 mb-2">Бюджет і строки</h2>
              <p className="text-gray-600 mb-8">Вкажіть орієнтири — уточнимо під час дзвінка</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-thin text-gray-700 mb-2">Орієнтовний бюджет (USD)</label>
                  <input
                    type="number"
                    placeholder="наприклад 285000"
                    value={formData.budget}
                    onChange={(e) => handleInputChange('budget', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-thin text-gray-700 mb-2">Бажані строки</label>
                  <select 
                    value={formData.timeline} 
                    onChange={(e) => handleInputChange('timeline', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="ASAP">Якомога швидше</option>
                    <option value="1-3 months">1–3 місяці</option>
                    <option value="3-6 months">3–6 місяців</option>
                    <option value="6-12 months">6–12 місяців</option>
                    <option value="12+ months">Понад 12 місяців</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-thin text-gray-700 mb-2">Оплата / фінансування</label>
                  <select 
                    value={formData.financing} 
                    onChange={(e) => handleInputChange('financing', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="Cash">Оплата з власних коштів</option>
                    <option value="Mortgage">Іпотека / кредит</option>
                    <option value="Financing">Розтермінування від компанії</option>
                    <option value="Mixed">Змішана схема</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-thin text-gray-700 mb-2">Локація проєкту</label>
                  <input
                    type="text"
                    placeholder="Місто, область"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-thin text-gray-700 mb-2">Рельєф ділянки</label>
                  <select 
                    value={formData.siteType} 
                    onChange={(e) => handleInputChange('siteType', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="Flat">Рівна ділянка</option>
                    <option value="Sloped">Похила</option>
                    <option value="Uneven">Нерівний рельєф</option>
                    <option value="Waterfront">Біля водойми</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-thin text-gray-700 mb-2">Комунікації на ділянці</label>
                  <select 
                    value={formData.utilities} 
                    onChange={(e) => handleInputChange('utilities', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="Available">Усі підведені</option>
                    <option value="Partial">Частково</option>
                    <option value="None">Відсутні</option>
                    <option value="Unknown">Потрібна оцінка</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Additional Details */}
          {step === 4 && (
            <div>
              <h2 className="text-3xl font-thin text-gray-800 mb-2">Додаткові побажання</h2>
              <p className="text-gray-600 mb-8">Опціонально — допоможе точніше підготувати пропозицію</p>
              
              <div className="space-y-6 mb-8">
                <div>
                  <label className="block text-sm font-thin text-gray-700 mb-2">Особливі вимоги</label>
                  <textarea
                    rows={4}
                    placeholder="Бар’єрність, додаткові приміщення, нестандартні інженерні рішення…"
                    value={formData.specialRequirements}
                    onChange={(e) => handleInputChange('specialRequirements', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-thin text-gray-700 mb-2">Коментарі</label>
                  <textarea
                    rows={4}
                    placeholder="Стиль, бажані матеріали, референси тощо"
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
              <h2 className="text-3xl font-thin text-gray-800 mb-2">Контакти</h2>
              <p className="text-gray-600 mb-8">Як з вами зв’язатися</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-thin text-gray-700 mb-2">ПІБ *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-thin text-gray-700 mb-2">Електронна пошта *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-thin text-gray-700 mb-2">Телефон *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-thin text-gray-700 mb-2">Зручний канал зв’язку</label>
                  <select 
                    value={formData.preferredContact} 
                    onChange={(e) => handleInputChange('preferredContact', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="Email">Електронна пошта</option>
                    <option value="Phone">Телефон</option>
                    <option value="Both">Обидва</option>
                  </select>
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-thin text-gray-700 mb-2">Адреса (за потреби)</label>
                  <input
                    type="text"
                    placeholder="Поштова адреса для листування"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
              
              {/* Summary */}
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-thin text-gray-800 mb-4">Підсумок заявки</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div><strong>Базова модель:</strong> {formData.selectedBase || '—'}</div>
                  <div><strong>Категорія площі:</strong> {sizeLabelUk[formData.size] ?? formData.size}</div>
                  <div><strong>Поверхів:</strong> {formData.floors}</div>
                  <div><strong>Спальні:</strong> {formData.rooms}</div>
                  <div><strong>Ванні:</strong> {formData.bathrooms}</div>
                  <div><strong>Деревина (за замовч.):</strong> {woodUk[formData.woodType] ?? formData.woodType}</div>
                  <div><strong>Бюджет:</strong> {formData.budget ? formatUsdAmount(Number(formData.budget)) : 'Не вказано'}</div>
                  <div><strong>Строки:</strong> {timelineUk[formData.timeline] ?? formData.timeline}</div>
                  <div><strong>Локація:</strong> {formData.location || 'Не вказано'}</div>
                  <div><strong>Розумний дім:</strong> {formData.smartHome ? 'Так' : 'Ні'}</div>
                  <div><strong>Сонячні панелі:</strong> {formData.solarPanels ? 'Так' : 'Ні'}</div>
                  <div><strong>Оплата:</strong> {financingUk[formData.financing] ?? formData.financing}</div>
                </div>
              </div>
              
              {submitError && <p className="text-red-600 text-sm mb-4">{submitError}</p>}
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
                ← Назад
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
                {submitting ? 'Надсилаємо…' : 'Надіслати запит'}
              </button>
            )}
            </div>
            <div className="flex flex-col items-stretch min-w-0 flex-1 ml-4">
              <div className="flex items-center justify-end gap-2 text-sm">
                <span className="text-gray-500">{Math.round((step / 5) * 100)}% виконано</span>
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