import React, { useState } from 'react';
import SEO from '../components/SEO';
import { buildKeywords } from '../data/seo-keywords';
import { AnimatedButton } from '../components/ui/animated-button';
import { formatUsdFromUah, SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from '../lib/utils';

const FAQPage: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqCategories = [
    {
      title: 'Загальні питання',
      faqs: [
        {
          question: 'Що таке модульний / каркасний будинок Prefab Homes?',
          answer:
            'Це будинок, елементи якого виготовляються на виробництві з високою точністю, а на ділянці виконується монтаж. Такий підхід дає кращий контроль якості, скорочує терміни будівництва та зазвичай підвищує енергоефективність порівняно з класичним «мокрим» будівництвом повністю на майданчику.'
        },
        {
          question: 'Скільки триває будівництво?',
          answer:
            'Виготовлення комплекту зазвичай займає близько 6–8 тижнів, монтаж на ділянці — від кількох днів залежно від проєкту. Загальний термін від укладення договору до заселення зазвичай орієнтовно 10–12 тижнів — залежить від підготовки ділянки та індивідуальних опцій.'
        },
        {
          question: 'Чи такі будинки надійні, як звичайні цегляні?',
          answer:
            'Так. Ми використовуємо сертифіковані рішення (у т. ч. SIP та каркасні системи), проєкти відповідають вимогам щодо навантажень, утеплення та безпеки. Конструкція розраховується під норми та умови експлуатації в Україні.'
        },
        {
          question: 'Чи можна змінити планування та комплектацію?',
          answer:
            'Так. Доступні зміни плану, підбір оздоблення, енергетичні опції та інтеграція «розумного дому». Команда проєктувальників допоможе адаптувати модель під ваші потреби та ділянку.'
        }
      ]
    },
    {
      title: 'Проєктування та будівництво',
      faqs: [
        {
          question: 'Що таке SIP-панелі?',
          answer:
            'SIP (Structural Insulated Panel — структурно-ізольована панель) — це «сандвіч» з утеплювача між двома несучими обшивками. Такі стіни міцні, з низькими тепловтратами і швидко збираються на об’єкті.'
        },
        {
          question: 'Які серії будинків ви пропонуєте?',
          answer:
            'У портфелі — модульні проєкти (Modular Home), серія Nordy (лаконічний скандинавський характер), Smart (акцент на автоматизацію), Modern та Modern-B (сучасна архітектура), а також окремі рішення на кшталт бунгало — залежно від актуального каталогу на сайті.'
        },
        {
          question: 'Чи надаєте архітектурний супровід?',
          answer:
            'Так. Ми супроводжуємо клієнта на етапі адаптації типових рішень або розробки індивідуальних змін з урахуванням рельєфу, під’їзних шляхів та інженерії ділянки.'
        },
        {
          question: 'Що входить у комплекс «під ключ»?',
          answer:
            'У базовий пакет зазвичай входять несучий каркас/конструктив, утеплення, вікна, вентиляція з рекуперацією, кухня та санвузли в узгодженій комплектації, підлоги, основні інженерні системи та монтаж. Точний перелік фіксується у специфікації договору.'
        }
      ]
    },
    {
      title: 'Енергоефективність',
      faqs: [
        {
          question: 'Наскільки економні ваші будинки в експлуатації?',
          answer:
            'Проєкти орієнтовані на низькі витрати на опалення та кондиціювання завдяки якісному утепленню, вікнам та вентиляції з рекуперацією. Багато клієнтів відзначають суттєву економію порівняно з будинками старої специфікації.'
        },
        {
          question: 'Які орієнтовні річні витрати на енергію?',
          answer:
            `Залежить від площі, клімату та режиму проживання. Як орієнтир для добре утепленого дому вітчизняного проєкту часто наводять діапазон порядку ${formatUsdFromUah(24_000)}–${formatUsdFromUah(35_000)} на рік (опалення, базове електроспоживання в межах типового сценарію; суми в доларах США — за конфігураційним курсом сайту).`
        },
        {
          question: 'Чи можна одразу закласти сонячні панелі?',
          answer:
            'Так. Комплектацію можна передбачити під фотоелектричні модулі, акумулятори та зарядку для електромобіля — за окремим кошторисом.'
        },
        {
          question: 'Яке типове рішення для опалення?',
          answer:
            'Часто це повітряний тепловий насос у поєднанні з «теплою підлогою» та механічною вентиляцією з рекуперацією тепла для стабільного мікроклімату.'
        }
      ]
    },
    {
      title: 'Ціна та етапи',
      faqs: [
        {
          question: 'З якого бюджету починаються проєкти?',
          answer:
            'Орієнтовні ціни на повні комплекти залежать від серії та метражу — актуальні суми в каталозі показані в доларах США (за конфігураційним курсом). Фінальна ціна визначається площею, комплектацією, логістикою та станом ділянки.'
        },
        {
          question: 'Що входить у базову вартість у каталозі?',
          answer:
            'У базу зазвичай входить заводський комплект конструкції та узгоджена стандартна комплектація. Підготовка ділянки, зовнішні мережі та преміальні опції розраховуються додатково.'
        },
        {
          question: 'Чи допомагаєте з фінансуванням?',
          answer:
            'Ми можемо порадити логіку етапів оплати та типові схеми; питання кредитування вирішуються безпосередньо з банком або фінансовим партнером клієнта.'
        },
        {
          question: 'Як виглядає графік оплат?',
          answer:
            'Типово: аванс на старт проєкту, платежі на етапах виробництва та поставки, завершальний після монтажу. Конкретний графік узгоджується в договорі.'
        }
      ]
    },
    {
      title: 'Монтаж та гарантії',
      faqs: [
        {
          question: 'Чи організовуєте підготовку ділянки?',
          answer:
            'Можемо скоординувати геодезію, фундамент, під’їзди та підключення комунікацій з перевіреними підрядниками в регіоні будівництва.'
        },
        {
          question: 'Які гарантії ви надаєте?',
          answer:
            'Передбачено гарантію на несучі конструкції (зазвичай до 10 років), обмежену гарантію на інженерію та оздоблення згідно з умовами договору та паспортів на обладнання.'
        },
        {
          question: 'Що робити, якщо після здачі виникла проблема?',
          answer:
            'Працює служба супроводу: заявка, виїзд або дистанційна діагностика, усунення в межах гарантії або платного сервісу після неї.'
        },
        {
          question: 'Чи здійснюєте доставку по Україні?',
          answer:
            'Так, логістика та монтаж можуть бути організовані по всій Україні з урахуванням доступу для спецтехніки та габаритів модулів.'
        }
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Питання та відповіді"
        description="Часті запитання про модульні та каркасні будинки Prefab Homes в Україні: терміни, енергоефективність, комплектація, ціна та гарантії."
        url="/faq"
        keywords={buildKeywords('модульний будинок FAQ, каркасний дім питання, Prefab Homes Україна, енергоефективність, комплектація під ключ')}
      />
      <div className="bg-white">
      <div className="pt-20">
      <section
        className="py-20 bg-gray-900 relative overflow-hidden"
        style={{ width: '100vw', marginLeft: '50%', transform: 'translateX(-50%)', maxWidth: 'none' }}
      >
        <div className="w-full px-4 sm:px-5 relative">
          <div className="text-center">
            <div className="text-primary text-sm uppercase tracking-wider mb-4 font-body font-thin">ПИТАННЯ ТА ВІДПОВІДІ</div>
            <h1 className="text-5xl md:text-6xl font-heading font-thin text-white mb-6 leading-tight">
              Усе, що варто знати на старті
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed font-body font-normal">
              Короткі відповіді про технології, комплектацію, терміни та умови співпраці з Prefab Homes.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-8 md:pt-20 pb-20 bg-white">
        <div className="w-full px-4 sm:px-5">
          <div className="w-full">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-thin text-gray-800 mb-8 pb-4 border-b border-gray-200">
                  {category.title}
                </h2>

                <div className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 100 + faqIndex;
                    return (
                      <div key={faqIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                        <button
                          onClick={() => toggleFAQ(globalIndex)}
                          className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between rounded-lg"
                        >
                          <span className="font-thin text-gray-800">{faq.question}</span>
                          <svg
                            className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                              openFAQ === globalIndex ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>

                        {openFAQ === globalIndex && (
                          <div className="px-6 py-4 bg-white border-t border-gray-200">
                            <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-8 md:pt-20 pb-20 bg-gray-50">
        <div className="w-full px-4 sm:px-5">
          <div className="text-center">
            <h2 className="text-3xl font-light text-gray-800 mb-6">Залишилися запитання?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Напишіть або зателефонуйте — підкажемо по проєкту, комплектації та наступних кроках.
            </p>
            <div className="flex flex-row flex-wrap items-center justify-center gap-3 sm:gap-4">
              <AnimatedButton
                asLink={true}
                href="/contact"
                variant="yellow"
                className="shrink-0 px-8 py-3 font-thin text-sm sm:text-base md:text-lg text-center"
              >
                Зв’язатися з нами
              </AnimatedButton>
              <AnimatedButton
                asLink={true}
                href={SITE_PHONE_TEL}
                variant="white"
                className="shrink-0 px-8 py-3 font-thin text-sm sm:text-base md:text-lg text-center"
              >
                {SITE_PHONE_DISPLAY}
              </AnimatedButton>
            </div>
          </div>
        </div>
      </section>
      </div>
      </div>
    </>
  );
};

export default FAQPage;
