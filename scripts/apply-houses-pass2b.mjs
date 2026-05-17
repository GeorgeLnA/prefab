import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const housesPath = path.join(__dirname, '..', 'src', 'data', 'houses.ts');

const uk2 = {
  'Double-height main hall and living space': 'Подвійна висота головного холу й вітальні',
  'Spacious open terrace for outdoor living': 'Простора відкрита тераса для життя на ділянці',
  'Covered rear terrace for outdoor living': 'Задня накрита тераса для відпочинку на свіжому повітрі',
  'Durable Scandinavian exterior materials': 'Міцні скандинавські матеріали для фасаду',
  'Panoramic glazing for maximum daylight': 'Панорамне скління для максимуму світла',
  'Spacious living room with high glazing': 'Простора вітальня з високим склінням',
  'Large open-plan living and dining area': 'Велика відкрита вітальня й їдальня',
  'Large glazed openings to living areas': 'Великі скляні прорізи до вітальні',
  'Two shower rooms for everyday comfort': 'Два душових для щоденного комфорту',
  'Central open-plan kitchen–living area': 'Центральна відкрита кухня-вітальня',
  'Large open terrace for outdoor living': 'Велика відкрита тераса для відпочинку на ділянці',
  'Three-block architectural composition': 'Ансамбль з трьох архітектурних блоків',
  'Comfortable year-round indoor climate': 'Комфортний мікроклімат у приміщеннях цілий рік',
  'Open rear terrace for outdoor living': 'Відкрита задня тераса для життя на свіжому повітрі',
  'Contemporary flat-roof architecture': 'Сучасна архітектура з плоским дахом',
  'Large open-plan kitchen–living area': 'Велика відкрита кухня-вітальня',
  'One main level with mezzanine floor': 'Один основний рівень з антресоллю',
  'Luxury two-storey family residence': 'Двоповерхова сімейна резиденція преміум-класу',
  'Covered terrace for outdoor living': 'Накрита тераса для відпочинку на ділянці',
  'Master bedroom with dressing room': 'Головна спальня з гардеробною',
  'Optimised layout for narrow plots': 'Оптимізоване планування для вузьких ділянок',
  'Open-plan living and dining space': 'Відкрита вітальня й їдальня в одному просторі',
  'Five bedrooms and three bathrooms': 'П’ять спальон і три санвузли',
  'Large two-storey family residence': 'Великий двоповерховий сімейний будинок',
  'Four bedrooms and three bathrooms': 'Чотири спальні та три санвузли',
  'Second bedroom with flexible use': 'Друга спальня з гнучким призначенням',
  'Two additional flexible bedrooms': 'Дві додаткові спальні з гнучким використанням',
  'Covered internal terrace (patio)': 'Накрита внутрішня тераса (патіо)',
  'Three bedrooms and two bathrooms': 'Три спальні та два санвузли',
  'Winter garden on the first floor': 'Зимовий сад на першому поверсі',
  'Winter garden on the upper floor': 'Зимовий сад на верхньому поверсі',
  'Four bedrooms and four bathrooms': 'Чотири спальні та чотири санвузли',
  'Single-storey modern family home': 'Сучасний одноповерховий сімейний будинок',
  'Scandinavian architectural style': 'Скандинавський архітектурний стиль',
  'Open terrace for outdoor living': 'Відкрита тераса для відпочинку на ділянці',
  'Central open-plan living space': 'Центральна відкрита вітальня',
  'Natural or concrete roof tiles': 'Натуральна або бетонна черепиця',
  'Integrated garage for two cars': 'Вбудований гараж на два автомобілі',
  'Panoramic glazed living spaces': 'Панорамно засклені житлові зони',
  'Three bedrooms and home office': 'Три спальні та домашній офіс',
  'Open-plan kitchen–living area': 'Відкрита кухня-вітальня',
  'Efficient and rational layout': 'Ефективне й раціональне планування',
  'Two-storey modern family home': 'Сучасний двоповерховий сімейний будинок',
  'Spacious single-storey layout': 'Просторе одноповерхове планування',
  'Two independent shower rooms': 'Два незалежні душові',
  'Three-bedroom family layout': 'Сімейне планування на три спальні',
  'Excellent functional zoning': 'Відмінне функціональне зонування',
  'Three-bedroom configuration': 'Конфігурація з трьома спальнями',
  'Single-storey family layout': 'Одноповерхове сімейне планування',
  'Open / semi-covered terrace': 'Відкрита / напівнакрита тераса',
  'Large open-plan living area': 'Велика відкрита вітальня',
  'Dedicated walk-in wardrobe': 'Окрема гардеробна',
  'Four-bedroom configuration': 'Конфігурація з чотирма спальнями',
  'Five-bedroom configuration': 'Конфігурація з п’ятьма спальнями',
  'Two large covered terraces': 'Дві великі накриті тераси',
  'Additional outdoor terrace': 'Додаткова відкрита тераса',
  'Full-height front glazing': 'Скління повної висоти на фасаді',
  'Two-car integrated garage': 'Вбудований гараж на два авто',
  'Six-bedroom configuration': 'Конфігурація з шістьма спальнями',
  'Eight bathrooms in total': 'Усьім вісім санвузлів',
  'Two-storey family layout': 'Двоповерхове сімейне планування',
  'Small integrated garage': 'Невеликий вбудований гараж',
  'Open-plan living spaces': 'Відкриті житлові простори',
  'Clear functional zoning': 'Чітке функціональне зонування',
  'Double-height main hall': 'Подвійна висота головного холу',
  'Large spacious terrace': 'Велика простора тераса',
  'Large outdoor terrace': 'Велика відкрита тераса',
  'Six en-suite bedrooms': 'Шість спальон з індивідуальними санвузлами',
  'Three-bedroom layout': 'Планування на три спальні',
  'Open outdoor terrace': 'Відкрита тераса',
  'Second-floor terrace': 'Тераса на другому поверсі',
  'Fire safety systems': 'Системи пожежної безпеки',
  'Four-bedroom layout': 'Планування на чотири спальні',
  'Five-bedroom layout': 'Планування на п’ять спальон',
  'Large open terrace': 'Велика відкрита тераса',
  'Two-bedroom layout': 'Планування на дві спальні',
  'Panoramic glazing': 'Панорамне скління',
  'Integrated garage': 'Вбудований гараж',
  'Two-storey layout': 'Двоповерхове планування',
  'Two shower rooms': 'Два душові',
  'Walk-in wardrobe': 'Гардеробна',
  'Flat roof system': 'Система плоского даху',
  'Three bathrooms': 'Три санвузли',
  'Three balconies': 'Три балкони',
  'Covered terrace': 'Накрита тераса',
  // mixed leftovers
  'Несуча конструкція та покриття даху suitable for a two-storey configuration, including fascias, soffits, guttering and downpipes.':
    'Несуча конструкція та покриття даху для двоповерхової конфігурації, включно з карнизами, софітами, ринвами та водостоками.',
  'Несуча конструкція та покриття даху suitable for mansard configuration, including fascias, soffits, guttering and downpipes.':
    'Несуча конструкція та покриття даху для мансардної конфігурації, включно з карнизами, софітами, ринвами та водостоками.',
  'Несуча конструкція та покриття даху suitable for a two-storey configuration':
    'Несуча конструкція та покриття даху для двоповерхової конфігурації',
  'Несуча конструкція та покриття даху suitable for mansard configuration':
    'Несуча конструкція та покриття даху для мансардної конфігурації',
  'Відкрита кухня-вітальня with strong daylight penetration': 'Світла відкрита кухня-вітальня з максимумом денного світла',
  'Відкрита кухня-вітальня with strong natural daylight': 'Світла відкрита кухня-вітальня з природним освітленням',
  'Ефективне й раціональне планування with strong architectural expression':
    'Ефективне й раціональне планування з виразною архітектурною подачею',
  'Високоефективне утеплення (external walls ≈ 0.17 W/m²·K, roof ≈ 0.15 W/m²·K)':
    'Високоефективне утеплення (зовнішні стіни ≈ 0,17 Вт/м²·К, дах ≈ 0,15 Вт/м²·К)',
};

let s = fs.readFileSync(housesPath, 'utf8');
const pairs = Object.entries(uk2).sort((a, b) => b[0].length - a[0].length);
for (const [en, ua] of pairs) {
  if (s.includes(en)) s = s.split(en).join(ua);
}
fs.writeFileSync(housesPath, s);
console.log('pass2b done');
