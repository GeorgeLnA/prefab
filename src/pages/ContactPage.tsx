import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatedButton } from '../components/ui/animated-button';
import { insertContact } from '../lib/submission-insert';
import { houseData } from '../data/houses';
import SEO from '../components/SEO';
import { buildKeywords } from '../data/seo-keywords';
import {
  formatUsdFromUah,
  SITE_EMAIL,
  SITE_EMAIL_MAILTO,
  SITE_PHONE_DISPLAY,
  SITE_PHONE_TEL,
} from '../lib/utils';

const ContactPage: React.FC = () => {
  const navigate = useNavigate();
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
      const { error } = await insertContact({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || undefined,
        message: formData.message || undefined,
        projectType: formData.projectType || undefined,
        budget: formData.budget || undefined,
      });
      if (error) throw error;
      navigate('/thanks');
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Не вдалося надіслати форму');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Зв’язатися з Prefab Homes"
        description="Контакти Prefab Homes Україна: консультація, пропозиція щодо модульного або каркасного будинку, супровід проєкту. prefabhomes.com.ua"
        url="/contact"
        keywords={buildKeywords('контакт Prefab Homes, пропозиція модульний будинок, консультація будівництво Україна, запит кошторис', { includeServices: true })}
      />
      <div>
      <section
        className="py-32 bg-gray-900 relative overflow-hidden"
        style={{ width: '100vw', marginLeft: '50%', transform: 'translateX(-50%)', maxWidth: 'none' }}
      >
        <div className="w-full px-4 sm:px-5 relative">
          <div className="text-center">
            <div className="text-primary text-sm uppercase tracking-wider mb-4 font-body font-medium">ЗВ’ЯЗОК</div>
            <h1 className="text-5xl md:text-6xl font-heading font-light text-white mb-6 leading-tight">
              Побудуємо ваш наступний дім разом
            </h1>
            <p className="text-xl text-white leading-relaxed font-body font-normal">
              Розкажіть про ділянку, бажану площу та строки — команда Prefab Homes ґрунтовно відповість і запропонує наступні кроки.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-8 md:pt-20 pb-20 bg-white">
        <div className="w-full px-4 sm:px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg" data-contact-form-card>
                <h2 className="text-2xl sm:text-3xl font-heading font-thin text-gray-800 mb-3 sm:mb-4">Почати проєкт</h2>
                <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 font-body font-normal leading-relaxed">
                  Заповніть форму — ми відповімо протягом 24 годин і уточнимо деталі.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-thin text-gray-700 mb-1.5 sm:mb-2">
                        ПІБ *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-sm sm:text-base"
                        placeholder="Ваше ім’я та прізвище"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-thin text-gray-700 mb-1.5 sm:mb-2">
                        Електронна пошта *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-sm sm:text-base"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-thin text-gray-700 mb-1.5 sm:mb-2">
                        Телефон
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-sm sm:text-base"
                        placeholder="+380 67 245 9977"
                      />
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-thin text-gray-700 mb-1.5 sm:mb-2">
                        Орієнтовний бюджет (USD)
                      </label>
                      <div className="relative">
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full pl-4 pr-10 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-sm sm:text-base bg-white appearance-none"
                        >
                          <option value="">Оберіть діапазон</option>
                          <option value="100k-less">до {formatUsdFromUah(6_000_000)}</option>
                          <option value="100k-250k">{formatUsdFromUah(6_000_000)}–{formatUsdFromUah(15_000_000)}</option>
                          <option value="250-300k">{formatUsdFromUah(15_000_000)}–{formatUsdFromUah(18_000_000)}</option>
                          <option value="300-400k">{formatUsdFromUah(18_000_000)}–{formatUsdFromUah(24_000_000)}</option>
                          <option value="400-500k">{formatUsdFromUah(24_000_000)}–{formatUsdFromUah(30_000_000)}</option>
                          <option value="500k+">понад {formatUsdFromUah(30_000_000)}</option>
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
                    <label htmlFor="projectType" className="block text-sm font-thin text-gray-700 mb-1.5 sm:mb-2">
                      Цікава модель
                    </label>
                    <div className="relative">
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full pl-4 pr-10 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-sm sm:text-base bg-white appearance-none"
                      >
                        <option value="">Оберіть проєкт</option>
                        <option value="Custom Design">Індивідуальний проєкт</option>
                        <optgroup label="Skandy">
                          {houseData.filter(h => h.name.startsWith('SKANDY')).map(h => (
                            <option key={h.slug} value={h.name}>{h.name}</option>
                          ))}
                        </optgroup>
                        <optgroup label="Nordy">
                          {houseData.filter(h => h.name.startsWith('NORDY')).map(h => (
                            <option key={h.slug} value={h.name}>{h.name}</option>
                          ))}
                        </optgroup>
                        <optgroup label="Modern">
                          {houseData.filter(h => h.name.startsWith('MODERN') && !h.name.startsWith('MODERN-B')).map(h => (
                            <option key={h.slug} value={h.name}>{h.name}</option>
                          ))}
                        </optgroup>
                        <optgroup label="Modular">
                          {houseData.filter(h => h.category === 'MODULAR').map(h => (
                            <option key={h.slug} value={h.name}>{h.name}</option>
                          ))}
                        </optgroup>
                        <option value="Not sure">Ще не визначився</option>
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
                      Деталі проєкту
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-sm sm:text-base resize-none"
                      placeholder="Розкажіть про ділянку, бажаний термін, особливі вимоги до планування або комплектації…"
                    ></textarea>
                  </div>

                  {submitError && <p className="text-red-600 text-sm">{submitError}</p>}

                  <AnimatedButton
                    type="submit"
                    variant="yellowOnWhite"
                    className="w-full px-6 sm:px-8 py-3 sm:py-4 font-thin text-sm sm:text-base disabled:opacity-50"
                    disabled={submitting}
                  >
                    {submitting ? 'Надсилаємо…' : 'Надіслати повідомлення'}
                  </AnimatedButton>
                </form>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-6">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-gray-800 mb-2 font-heading">Телефон</h3>
                    <p className="text-gray-900 mb-2 font-body font-normal">
                      <a href={SITE_PHONE_TEL} className="text-primary hover:text-primary-hover transition-colors">
                        {SITE_PHONE_DISPLAY}
                      </a>
                    </p>
                    <p className="text-sm text-gray-900 font-body font-medium">
                      Пн–Пт: 8:00–18:00
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-6">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-gray-800 mb-2 font-heading">Електронна пошта</h3>
                    <p className="text-gray-900 mb-2 font-body font-normal">
                      <a href={SITE_EMAIL_MAILTO} className="text-primary hover:text-primary-hover transition-colors">
                        {SITE_EMAIL}
                      </a>
                    </p>
                    <p className="text-sm text-gray-900 font-body font-medium">
                      Відповідаємо протягом 24 годин
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 p-8 rounded-lg">
                <h3 className="text-xl font-light text-gray-800 mb-6 font-heading">Що далі?</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-light text-gray-800 font-heading">Перша розмова</h4>
                      <p className="text-gray-900 text-sm font-body font-normal">Уточнюємо задачу, бюджет і терміни</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-light text-gray-800 font-heading">Проєкт і пропозиція</h4>
                      <p className="text-gray-900 text-sm font-body font-normal">Готуємо варіант комплектації та орієнтовний кошторис</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-light text-gray-800 font-heading">Старт виробництва</h4>
                      <p className="text-gray-900 text-sm font-body font-normal">Погоджуємо договір і запускаємо виготовлення комплекту</p>
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
