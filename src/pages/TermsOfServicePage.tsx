import React from 'react';
import SEO from '../components/SEO';
import { buildKeywords } from '../data/seo-keywords';
import { SITE_EMAIL, SITE_PHONE_DISPLAY } from '../lib/utils';

const TermsOfServicePage: React.FC = () => {
  return (
    <>
      <SEO
        title="Умови користування — Prefab Homes"
        description="Публічні умови надання інформації та послуг Prefab Homes на prefabhomes.com.ua."
        url="/terms-of-service"
        noindex={true}
        keywords={buildKeywords('умови користування prefab homes Україна')}
      />
      <div className="bg-white">
      <div className="pt-20">
      <section
        className="py-20 bg-gray-900"
        style={{ width: '100vw', marginLeft: '50%', transform: 'translateX(-50%)', maxWidth: 'none' }}
      >
        <div className="w-full px-4 sm:px-5">
          <div className="text-center">
            <h1 className="text-5xl font-light text-white mb-6">Умови користування</h1>
            <p className="text-xl text-gray-300">
              Умови регулюють використання сайту та загальні принципи договірних відносин щодо будівельних послуг Prefab Homes.
            </p>
            <p className="text-gray-400 mt-4">Оновлено: січень 2025</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="w-full px-4 sm:px-5">
          <div className="w-full prose prose-lg">
            <h2 className="text-2xl font-heading font-semibold text-gray-800 mb-4">1. Прийняття умов</h2>
            <p className="text-gray-700 mb-6 font-body font-normal">
              Користуючись сайтом і послугами, ви підтверджуєте ознайомлення з цими умовами. Якщо ви з ними не згодні,
              будь ласка, не використовуйте ресурс.
            </p>

            <h2 className="text-2xl font-heading font-semibold text-gray-800 mb-4">2. Опис послуг</h2>
            <p className="text-gray-700 mb-6 font-body font-normal">
              Prefab Homes надає послуги з проєктування, виробництва елементів модульних / prefab-будинків, поставки,
              монтажу та супроводу проєктів. Фактичний перелік робіт і відповідальність сторін фіксуються окремим договором.
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 font-body font-normal">
              <li>консультації та підбір рішень;</li>
              <li>виробництво конструкцій / модулів на виробництві;</li>
              <li>монтаж на ділянці замовника;</li>
              <li>координація проєкту;</li>
              <li>гарантійний супровід згідно з договором.</li>
            </ul>

            <h2 className="text-2xl font-heading font-semibold text-gray-800 mb-4">3. Замовлення та договір</h2>
            <p className="text-gray-700 mb-6 font-body font-normal">
              Заявка на сайті не є акцептом договору. Укладення — лише після погодження технічного та комерційного рішення
              і підписання документів. У договорі зазвичай визначають:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 font-body font-normal">
              <li>специфікацію об’єкта;</li>
              <li>календар поставок і робіт;</li>
              <li>графік платежів;</li>
              <li>гарантійні зобов’язання;</li>
              <li>порядок додаткових робіт (протоколи погодження змін).</li>
            </ul>

            <h2 className="text-2xl font-heading font-semibold text-gray-800 mb-4">4. Ціни та оплата</h2>
            <p className="text-gray-700 mb-6">
              Орієнтовні ціни на сайті можуть змінюватися залежно від комплектації, курсу, логістики та навантаження
              виробництва. Обов’язковими є суми та етапи оплати з підписаного договору.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Поставка та монтаж</h2>
            <p className="text-gray-700 mb-6">
              Строки залежать від виробництва, дозволів, погоди та готовності майданчика. Зазвичай замовник готує
              під’їзд, фундамент згідно з проєктом, підключення комунікацій та отримує дозвільну документацію.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Гарантії</h2>
            <p className="text-gray-700 mb-6">
              Конкретний строк і обсяг гарантії зазначаються в договорі та паспортах на вироби. Застосовуються також
              гарантії виробників обладнання.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Обмеження відповідальності</h2>
            <p className="text-gray-700 mb-6">
              Інформація на сайті має ознайомчий характер. Відповідальність за рішення, прийняті лише на основі сайту
              без письмового договору, обмежується чинним законодавством України.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Обставини непереборної сили</h2>
            <p className="text-gray-700 mb-6">
              Сторони звільняються від відповідальності за простій, спричинений подіями поза розумним контролем:
              стихійні лиха, воєнний стан, ембарго, зриви ланцюгів постачання тощо — у межах і на строк, передбачені договором та законом.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Інтелектуальна власність</h2>
            <p className="text-gray-700 mb-6">
              Проєктна документація, візуалізації та бренд Prefab Homes охороняються законом. Використання поза
              узгодженим проєктом заборонено.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Вирішення спорів</h2>
            <p className="text-gray-700 mb-6">
              Спори вирішуються переговорами; за недосягнення згоди — у судовому порядку за місцезнаходженням відповідача
              або в порядку, визначеному договором, згідно з законодавством України.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Припинення</h2>
            <p className="text-gray-700 mb-6">
              Умови розірвання та штрафні наслідки визначаються індивідуальним договором.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">12. Застосовне право</h2>
            <p className="text-gray-700 mb-6">
              Ці умови та відносини сторін регулюються законодавством України.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">13. Зміни</h2>
            <p className="text-gray-700 mb-6">
              Ми можемо оновлювати текст умов; актуальна редакція публікується на цій сторінці.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">14. Контакти</h2>
            <p className="text-gray-700 mb-6">Питання щодо умов:</p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>Email:</strong> {SITE_EMAIL}</p>
              <p className="text-gray-700 mb-2"><strong>Телефон:</strong> {SITE_PHONE_DISPLAY}</p>
              <p className="text-gray-700"><strong>Регіон роботи:</strong> Україна</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
    </>
  );
};

export default TermsOfServicePage;
