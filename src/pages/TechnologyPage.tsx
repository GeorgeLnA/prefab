import React from 'react';
import { AnimatedButton } from '../components/ui/animated-button';
import SEO from '../components/SEO';
import { buildKeywords } from '../data/seo-keywords';
import { formatUsdFromUah } from '../lib/utils';

const TechnologyPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Технології та інновації"
        description="Як Prefab Homes будує енергоефективні модульні та каркасні будинки в Україні: SIP, точне виробництво, розумні системи та стійкі матеріали."
        url="/technology"
        keywords={buildKeywords('технології модульного будинку, SIP панелі, CNC виробництво, енергоефективний дім, розумний будинок Prefab Homes')}
      />
      <div>
      <section
        className="py-24 sm:py-32 bg-gray-900 relative overflow-hidden"
        style={{ width: '100vw', marginLeft: '50%', transform: 'translateX(-50%)', maxWidth: 'none' }}
      >
        <div className="w-full px-4 sm:px-5 relative">
          <div className="text-center">
            <div className="text-primary text-sm uppercase tracking-wider mb-4 font-body font-medium">ТЕХНОЛОГІЇ</div>
            <h1 className="text-5xl md:text-6xl font-heading font-light text-white mb-6 leading-tight">
              Інженерія для результату
            </h1>
            <p className="text-xl text-white leading-relaxed font-body font-normal">
              Точні рішення в виробництві та збірці, які дають передбачувану якість, ефективність і комфорт у експлуатації.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="w-full px-4 sm:px-5">
          <div className="mb-12 sm:mb-16 md:mb-20">
            <div className="text-primary text-sm uppercase tracking-wider mb-4 font-body font-medium">ЕНЕРГОЕФЕКТИВНІСТЬ</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-light text-gray-900 mb-4 sm:mb-6">Низькі втрати тепла та передбачувані витрати</h2>
            <p className="text-lg sm:text-xl font-body font-normal text-gray-900 mb-6 sm:mb-8 leading-relaxed">
              Утеплення, трискляні пакети та узгоджені інженерні рішення дозволяють досягати високих класів енергоефективності. За типових умов витрати на опалення зазначено як завдання тримати в комфортному діапазоні — зокрема орієнтовно до {formatUsdFromUah(35_000)} на рік для середнього проєкту з якісною оболонкою та вентиляцією з рекуперацією (в доларах США за курсом сайту).
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="border-l-4 border-primary pl-6">
                <div className="text-2xl font-bold text-gray-900 mb-2">≈90%</div>
                <div className="text-gray-900 font-body font-normal">Потенціал економії тепла* порівняно з будинками застарілої специфікації</div>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <div className="text-2xl font-bold text-gray-900 mb-2">Сонце</div>
                <div className="text-gray-900 font-body font-normal">Готовність до сонячних панелей та акумуляції</div>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-4">* Індивідуально залежить від проєкту, клімату та режиму проживання.</p>
          </div>

          <div className="mb-20">
            <div className="text-primary text-sm uppercase tracking-wider mb-4 font-body font-medium">ВИРОБНИЦТВО</div>
            <h2 className="text-3xl md:text-4xl font-heading font-light text-gray-900 mb-6">Точність на заводі</h2>
            <p className="text-lg text-gray-900 mb-8 leading-relaxed font-body font-normal">
              Вузли виготовляються в контрольованих умовах на сучасному обладнанні: стабільна геометрія, менше відходів і передбачуваний монтаж на ділянці.
            </p>
            <div className="bg-white p-8 rounded-lg">
              <ul className="space-y-4 text-gray-900 font-body font-normal">
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>ЧПУ-розкрій та контроль допусків для зручної збірки</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Серійні операції з єдиними стандартами якості</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Перевірки на ключових етапах виробництва</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Суттєве зменшення будівельних відходів на об’єкті</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-primary text-sm uppercase tracking-wider mb-4 font-body font-medium">РОЗУМНІ СИСТЕМИ</div>
            <h2 className="text-3xl md:text-4xl font-heading font-light text-gray-900 mb-6">Інтегрована автоматизація</h2>
            <p className="text-lg text-gray-900 mb-8 leading-relaxed font-body font-normal">
              Передбачена інфраструктура для керування освітленням, кліматом, безпекою та обліком енергії зі смартфона або голосових помічників.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
              <div className="rounded-lg p-6">
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">Автоматизація дому</h3>
                <p className="text-gray-900 font-body font-normal">
                  Сценарії для освітлення та клімату, сумісність з поширеними екосистемами розумного дому.
                </p>
              </div>
              <div className="rounded-lg p-6">
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">Безпека та моніторинг</h3>
                <p className="text-gray-900 font-body font-normal">
                  Закладені рішення для замків, відео та датчиків — за узгодженою специфікацією проєкту.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-primary text-sm uppercase tracking-wider mb-4 font-body font-medium">МАТЕРІАЛИ</div>
            <h2 className="text-3xl md:text-4xl font-heading font-light text-gray-900 mb-6">Відповідальне будівництво</h2>
            <p className="text-lg text-gray-900 mb-8 leading-relaxed font-body font-normal">
              Підбираємо матеріали з прозорим походженням і довгим терміном служби, щоб зменшити екологічний слід без втрати надійності.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">Несучі рішення</h3>
                <ul className="space-y-2 text-gray-900 font-body font-normal">
                  <li>• Інженерний каркас із деревини</li>
                  <li>• Структурно-ізольовані панелі (SIP)</li>
                  <li>• Сталь та інші елементи за проєктом</li>
                  <li>• Сучасні суміші та системи під фундамент</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">Оздоблення та утеплення</h3>
                <ul className="space-y-2 text-gray-900 font-body font-normal">
                  <li>• Екологічно збалансовані утеплювачі</li>
                  <li>• Фасадні рішення з деревини та композитів</li>
                  <li>• Лакофарбові матеріали з низьким вмістом ЛОС</li>
                  <li>• Енергоефективні трискляні вікна</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <div className="text-primary text-sm uppercase tracking-wider mb-4 font-body font-medium">МОНТАЖ</div>
            <h2 className="text-3xl md:text-4xl font-heading font-light text-gray-900 mb-6">Швидка збірка на ділянці</h2>
            <p className="text-lg text-gray-900 mb-8 leading-relaxed font-body font-normal">
              Модульний принцип скорочує «мокрі» процеси на майданчику, зменшує залежність від погоди та дає прогнозований графік здачі.
            </p>
            <div className="bg-white p-8 rounded-lg">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">6–8</div>
                  <div className="text-gray-900 font-body font-normal">тижнів виробництва комплекту</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">3–5</div>
                  <div className="text-gray-900 font-body font-normal">днів типового монтажу каркасу на ділянці*</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">10–12</div>
                  <div className="text-gray-900 font-body font-normal">тижнів загальний орієнтир до заселення*</div>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-6 text-center">* Залежить від проєкту, логістики та готовності ділянки.</p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-20 bg-gradient-to-br from-primary to-primary-dark"
        style={{ width: '100vw', marginLeft: '50%', transform: 'translateX(-50%)', maxWidth: 'none' }}
      >
        <div className="w-full px-4 sm:px-5">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-black mb-4 sm:mb-6 leading-tight">
              Подивіться реалізацію на власні очі
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-black/90 mb-6 sm:mb-8 leading-relaxed">
              Запитайте консультацію або перегляньте готові проєкти в каталозі — допоможемо підібрати комплектацію під ваш бюджет.
            </p>
            <div className="flex flex-row flex-wrap items-center justify-center gap-3 sm:gap-4">
              <AnimatedButton
                asLink={true}
                href="/contact"
                variant="whiteOnYellow"
                className="shrink-0 px-6 sm:px-8 py-3 sm:py-4 font-thin text-sm sm:text-base md:text-lg text-center"
              >
                Записатися на консультацію
              </AnimatedButton>
              <AnimatedButton
                asLink={true}
                href="/designs"
                variant="whiteOnYellow"
                className="shrink-0 px-6 sm:px-8 py-3 sm:py-4 font-thin text-sm sm:text-base md:text-lg text-center"
              >
                Каталог проєктів
              </AnimatedButton>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default TechnologyPage;
