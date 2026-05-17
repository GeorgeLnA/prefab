import React from 'react';
import SEO from '../components/SEO';
import { buildKeywords } from '../data/seo-keywords';

const AboutPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Про компанію — Prefab Homes"
        description="Prefab Homes Україна: модульні та SIP-будинки, якість виробництва, супровід проєкту від ідеї до ключів."
        url="/about"
        keywords={buildKeywords('про prefab homes Україна, модульні будинки компанія, SIP виробник')}
      />
      <div className="bg-white">
      <div className="pt-20">
      <section
        className="py-20 bg-gray-900 relative overflow-hidden"
        style={{ width: '100vw', marginLeft: '50%', transform: 'translateX(-50%)', maxWidth: 'none' }}
      >
        <div className="w-full px-4 sm:px-5 relative">
          <div className="text-center">
            <div className="text-primary text-sm uppercase tracking-wider mb-4 font-body font-medium">PREFAB HOMES</div>
            <h1 className="text-5xl md:text-6xl font-heading font-light text-white mb-6 leading-tight">
              Будуємо сучасне житло в Україні
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed font-body font-normal max-w-3xl mx-auto">
              Ми проєктуємо та постачаємо енергоефективні модульні й SIP-будинки: від консультації та підбору серії до
              виробництва, логістики та монтажу на вашій ділянці.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-8 md:pt-20 pb-20 bg-white">
        <div className="w-full px-4 sm:px-5">
          <div className="w-full max-w-4xl mx-auto">
            <h2 className="text-3xl font-light text-gray-800 mb-6 font-heading">Наша місія</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed font-body font-normal">
              Зробити якісне, передбачуване за строками й бюджетом житло доступним для родин по всій Україні — без зайвого
              ризику на будмайданчику та з прозорою комунікацією на кожному етапі.
            </p>
            <h2 className="text-3xl font-light text-gray-800 mb-6 font-heading">Чим ми відрізняємося</h2>
            <ul className="text-lg text-gray-700 space-y-4 font-body font-normal list-disc pl-6 mb-10">
              <li>заводська точність — менше «людського фактору» порівняно з мокрим циклом;</li>
              <li>акцент на теплоємкості оболонки, герметичності та інженерії;</li>
              <li>декілька серій — від компактних модулів до просторих Lounge та Smart;</li>
              <li>супровід замовника: від першого дзвінка до здачі об’єкта.</li>
            </ul>
            <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-primary">
              <h3 className="text-lg font-semibold text-gray-800 mb-3 font-heading">Цінності</h3>
              <ul className="text-left text-gray-700 space-y-2 font-body font-normal">
                <li>• Якість матеріалів і монтажу</li>
                <li>• Чесні строки та зрозумілі етапи оплати в договорі</li>
                <li>• Повага до бюджету клієнта</li>
                <li>• Сталий підхід: менше відходів, краща енергоефективність</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-8 md:pt-20 pb-20 bg-gray-50">
        <div className="w-full px-4 sm:px-5">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-800 mb-6 font-heading">Наші орієнтири</h2>
            <p className="text-xl text-gray-600 font-body font-normal">
              Цифри й стандарти, на які орієнтуємося в роботі з клієнтами
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-gray-600">Реалізованих об’єктів</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10</div>
              <div className="text-gray-600">Років досвіду команди</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-gray-600">Задоволених клієнтів</div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
    </>
  );
};

export default AboutPage;
