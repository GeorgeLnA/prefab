import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { buildKeywords } from '../data/seo-keywords';
import { AnimatedButton } from '../components/ui/animated-button';

const ThanksPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Дякуємо"
        description="Дякуємо за звернення до Prefab Homes. Ми отримали ваше повідомлення і невдовзі відповімо."
        url="/thanks"
        keywords={buildKeywords('заявка Prefab Homes, дякуємо за звернення', { includeServices: true })}
      />
      <div>
        <section
          className="py-32 bg-gray-900 relative overflow-hidden"
          style={{ width: '100vw', marginLeft: '50%', transform: 'translateX(-50%)', maxWidth: 'none' }}
        >
          <div className="w-full px-4 sm:px-5 relative">
            <div className="text-center">
              <div className="text-primary text-sm uppercase tracking-wider mb-4 font-body font-medium">
                ДЯКУЄМО
              </div>
              <h1 className="text-5xl md:text-6xl font-heading font-light text-white mb-6 leading-tight">
                Повідомлення отримано
              </h1>
              <p className="text-xl text-white leading-relaxed font-body font-normal max-w-2xl mx-auto">
                Ми відповімо протягом 24 годин. За потреби ви можете переглянути каталог або написати нам ще раз.
              </p>
            </div>
          </div>
        </section>

        <section className="pt-12 md:pt-20 pb-20 bg-white">
          <div className="w-full px-4 sm:px-5">
            <div className="max-w-2xl mx-auto text-center space-y-8">
              <p className="text-gray-600 font-body font-normal">
                Дякуємо за інтерес до Prefab Homes. Ми на зв’язку.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/">
                  <AnimatedButton variant="yellowOnWhite" className="px-6 sm:px-8 py-3 sm:py-4 font-thin">
                    На головну
                  </AnimatedButton>
                </Link>
                <Link to="/contact">
                  <AnimatedButton variant="greyToYellow" className="px-6 sm:px-8 py-3 sm:py-4 font-thin">
                    Написати ще раз
                  </AnimatedButton>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ThanksPage;
