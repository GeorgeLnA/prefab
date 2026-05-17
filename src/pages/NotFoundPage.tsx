import React from 'react';
import { Link } from 'react-router-dom';
import { AnimatedButton } from '../components/ui/animated-button';
import SEO from '../components/SEO';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEO
        title="404 — сторінку не знайдено"
        description="Сторінку не знайдено на prefabhomes.com.ua. Поверніться на головну або перегляньте каталог проєктів."
        noindex={true}
      />
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-full px-4 sm:px-5 text-center">
          <div className="w-full">
            <h1 className="mb-6">
              <span className="block text-9xl font-heading font-thin text-primary mb-4">404</span>
              <span className="block text-4xl md:text-5xl font-heading font-thin text-gray-900">Сторінку не знайдено</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 font-body font-normal leading-relaxed">
              Можливо, посилання застаріло або сторінку перенесено. Повернімося до каталогу.
            </p>
            <div className="flex flex-row flex-wrap items-center justify-center gap-3 sm:gap-4">
              <AnimatedButton
                asLink={true}
                href="/"
                variant="yellowOnWhite"
                className="shrink-0 px-8 py-4 font-thin text-base text-center"
              >
                На головну
              </AnimatedButton>
              <AnimatedButton
                asLink={true}
                href="/designs"
                variant="white"
                className="shrink-0 px-8 py-4 font-thin text-base text-center"
              >
                Каталог проєктів
              </AnimatedButton>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <h3 className="font-heading font-thin text-gray-900 mb-3">Популярні розділи</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/designs" className="text-gray-600 hover:text-primary transition-colors font-body font-normal">
                      → Проєкти
                    </Link>
                  </li>
                  <li>
                    <Link to="/technology" className="text-gray-600 hover:text-primary transition-colors font-body font-normal">
                      → Технології
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-gray-600 hover:text-primary transition-colors font-body font-normal">
                      → Контакти
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-heading font-thin text-gray-900 mb-3">Серії</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/skandy-nordy" className="text-gray-600 hover:text-primary transition-colors font-body font-normal">
                      → Nordy
                    </Link>
                  </li>
                  <li>
                    <Link to="/smart" className="text-gray-600 hover:text-primary transition-colors font-body font-normal">
                      → Smart
                    </Link>
                  </li>
                  <li>
                    <Link to="/modular" className="text-gray-600 hover:text-primary transition-colors font-body font-normal">
                      → Модульні будинки
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-heading font-thin text-gray-900 mb-3">Корисне</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/blog" className="text-gray-600 hover:text-primary transition-colors font-body font-normal">
                      → Блог
                    </Link>
                  </li>
                  <li>
                    <Link to="/faq" className="text-gray-600 hover:text-primary transition-colors font-body font-normal">
                      → Питання та відповіді
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="text-gray-600 hover:text-primary transition-colors font-body font-normal">
                      → Про нас
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
