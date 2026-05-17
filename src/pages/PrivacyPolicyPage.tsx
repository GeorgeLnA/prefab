import React from 'react';
import SEO from '../components/SEO';
import { buildKeywords } from '../data/seo-keywords';
import { SITE_EMAIL, SITE_PHONE_DISPLAY } from '../lib/utils';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Політика конфіденційності — Prefab Homes"
        description="Як Prefab Homes збирає, використовує та захищає персональні дані відвідувачів prefabhomes.com.ua."
        url="/privacy-policy"
        noindex={true}
        keywords={buildKeywords('політика конфіденційності prefab homes Україна, захист даних')}
      />
      <div className="bg-white">
      <div className="pt-20">
      <section
        className="py-20 bg-gray-900"
        style={{ width: '100vw', marginLeft: '50%', transform: 'translateX(-50%)', maxWidth: 'none' }}
      >
        <div className="w-full px-4 sm:px-5">
          <div className="text-center">
            <h1 className="text-5xl font-light text-white mb-6">Політика конфіденційності</h1>
            <p className="text-xl text-gray-300">
              Ми поважаємо вашу приватність. Документ пояснює, які дані ми отримуємо, навіщо їх обробляємо
              і як їх захищаємо.
            </p>
            <p className="text-gray-400 mt-4">Оновлено: січень 2025</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="w-full px-4 sm:px-5">
          <div className="w-full prose prose-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Які дані ми збираємо</h2>
            <p className="text-gray-700 mb-6">
              Ми обробляємо інформацію, яку ви надаєте добровільно: звернення через форми, запити консультацій,
              листування з нами тощо. Це можуть бути:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>ім’я, електронна пошта, номер телефону;</li>
              <li>опис проєкту, уподобання щодо моделі чи комплектації;</li>
              <li>орієнтовний бюджет і бажані строки;</li>
              <li>канали зв’язку, які ви обрали;</li>
              <li>інші відомості, які ви вказали в повідомленні.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Навіщо ми використовуємо дані</h2>
            <p className="text-gray-700 mb-6">Дані використовуються для:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>надання та покращення наших послуг (консультації, комерційні пропозиції);</li>
              <li>обробки ваших запитів і зворотного зв’язку;</li>
              <li>технічних повідомлень і підтримки;</li>
              <li>інформування про продукти та події, якщо ви на це погодилися;</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Передача третім особам</h2>
            <p className="text-gray-700 mb-6">
              Ми не продаємо персональні дані. Передача можлива лише обмежено — наприклад, підрядникам
              (хостинг, пошта, аналітика), якщо це потрібно для роботи сайту, а також коли того вимагає закон.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Захист даних</h2>
            <p className="text-gray-700 mb-6">
              Застосовуємо організаційні та технічні заходи для захисту від несанкціонованого доступу.
              Передача через Інтернет не може бути абсолютно безризиковою.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Ваші права</h2>
            <p className="text-gray-700 mb-6">Відповідно до законодавства України про персональні дані ви можете:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>отримати доступ до своїх даних і вимагати виправлення;</li>
              <li>вимагати видалення або обмеження обробки в погоджених випадках;</li>
              <li>відкликати згоду на маркетингові повідомлення.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Файли cookie</h2>
            <p className="text-gray-700 mb-6">
              Сайт може використовувати cookie для роботи та аналітики. Ви можете змінити налаштування у браузері.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Посилання на сторонні сайти</h2>
            <p className="text-gray-700 mb-6">
              Ми не контролюємо політику конфіденційності зовнішніх ресурсів, на які можуть вести посилання.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Діти</h2>
            <p className="text-gray-700 mb-6">
              Послуги орієнтовані на дорослих. Ми свідомо не збираємо дані дітей без згоди законних представників.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Зміни політики</h2>
            <p className="text-gray-700 mb-6">
              Актуальна версія завжди на цій сторінці. Суттєві зміни можемо підсвітити на сайті або електронною поштою.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Контакти</h2>
            <p className="text-gray-700 mb-6">Питання щодо обробки даних:</p>
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

export default PrivacyPolicyPage;
