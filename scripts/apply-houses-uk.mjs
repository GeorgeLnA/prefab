import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const housesPath = path.join(root, 'src', 'data', 'houses.ts');

const splitPath = path.join(root, 'translations', 'abouts-ua-split.txt');
const splitRaw = fs.readFileSync(splitPath, 'utf8');
const uaAbouts = splitRaw
  .split(/\n---\d+---\n/)
  .map((s) => s.trim())
  .filter(Boolean);

const enAbouts = JSON.parse(fs.readFileSync(path.join(root, 'abouts-en.json'), 'utf8'));
if (uaAbouts.length !== enAbouts.length) {
  throw new Error(`About count mismatch: EN ${enAbouts.length} UA ${uaAbouts.length}`);
}

let s = fs.readFileSync(housesPath, 'utf8');

// houses.ts stores multi-line copy as literal \\n inside string literals
const toTsNewlines = (str) => str.replace(/\r\n/g, '\n').split('\n').join('\\n');

for (let i = 0; i < enAbouts.length; i++) {
  const en = toTsNewlines(enAbouts[i]);
  const ua = toTsNewlines(uaAbouts[i]);
  if (!s.includes(en)) {
    console.error('Missing about index', i);
    throw new Error('About EN not found');
  }
  s = s.split(en).join(ua);
}

/** Longest-first phrase replacements */
const pairs = [
  [
    'Installed internal water supply pipework, waste and drainage routes, and electrical cabling only — without sanitary ware, electrical fittings, appliances or final connections.',
    'Прокладені внутрішні мережі водопостачання, каналізації та електромонтаж (перший етап) — без сантехніки, електрофурнітури, побутової техніки та фінальних підключень.',
  ],
  [
    'Installed internal water supply pipework, waste and drainage routes, and electrical cabling only, without sanitary ware, electrical fittings, appliances or final connections.',
    'Прокладені внутрішні мережі водопостачання, каналізації та електромонтаж (перший етап), без сантехніки, електрофурнітури, побутової техніки та фінальних підключень.',
  ],
  [
    'Installation of SIP panels, roofing, exterior finishes, windows, internal finishes and internal doors.',
    'Монтаж SIP-панелей, покрівлі, зовнішніх оздоблень, вікон, внутрішніх оздоблень та міжкімнатних дверей.',
  ],
  [
    'Wall and ceiling linings, plasterboard, painted surfaces, ceiling finishes, finished floor coverings and internal doors.',
    'Облицювання стін і стель, гіпсокартон, фарбування, оздоблення стель, фінішні підлогові покриття та міжкімнатні двері.',
  ],
  [
    'Wall and ceiling linings, plasterboard, painted surfaces, ceiling finishes and all finished floor coverings.',
    'Облицювання стін і стель, гіпсокартон, фарбування, оздоблення стель і усі фінішні підлогові покриття.',
  ],
  [
    'Supply and installation of foundations, groundworks, external drainage and utility connections.',
    'Постачання та монтаж фундаментів, земляних робіт, зовнішнього дренажу та підключень до інженерних мереж.',
  ],
  [
    'Planning applications, architectural services, engineering approvals and associated documentation.',
    'Подання на погодження, архітектурні послуги, інженерні експертизи та супутня документація.',
  ],
  [
    'External SIP walls, internal SIP partitions, floor and roof panels manufactured in the factory.',
    'Зовнішні SIP-стіни, внутрішні SIP-перегородки, панелі підлоги та даху, виготовлені на заводі.',
  ],
  [
    'Sanitary ware, taps, WC, shower equipment, bathroom furniture, tiling, waterproofing and all bathroom finishing works.',
    'Сантехніка, змішувачі, унітаз, душове обладнання, меблі для ванної, плитка, гідроізоляція та усі оздоблювальні роботи у ванних.',
  ],
  [
    'Sanitary ware, shower units, taps, WC, bathroom furniture, tiling, waterproofing and all bathroom finishing works.',
    'Сантехніка, душові кабіни, змішувачі, унітаз, меблі для ванної, плитка, гідроізоляція та усі оздоблювальні роботи у ванних.',
  ],
  [
    'Sanitary ware, bathroom furniture, tiling, waterproofing and all bathroom finishing works.',
    'Сантехніка, меблі для ванної, плитка, гідроізоляція та усі оздоблювальні роботи у ванних.',
  ],
  [
    'Heating systems, ventilation, MVHR, ASHP, radiators, underfloor heating and all HVAC equipment.',
    'Опалення, вентиляція, рекуперація (MVHR), теплові насоси повітря–вода, радіатори, тепла підлога та усе HVAC-обладнання.',
  ],
  [
    'Final electrical fittings, lighting, heating systems, ventilation, MVHR, ASHP and all HVAC equipment.',
    'Фінальний електромонтаж, освітлення, опалення, вентиляція, MVHR, теплові насоси та усе HVAC-обладнання.',
  ],
  [
    'Sockets, switches, light fittings, decorative lighting and any electrical devices.',
    'Розетки, вимикачі, світильники, декоративне освітлення та інші електроприлади.',
  ],
  [
    'Sockets, switches, lighting fixtures and full consumer unit (fuse board) installation.',
    'Розетки, вимикачі, світильники та монтаж повного розподільчого щита.',
  ],
  [
    'Model-specific roofing solution including fascias, soffits, guttering and downpipes.',
    'Покрівельне рішення під модель, включно з карнизними звисами, софітами, ринвами та водостоками.',
  ],
  [
    'Natural or concrete roof tiles (model-dependent option), including fascias, soffits, guttering and downpipes.',
    'Натуральна або бетонна черепиця (залежно від моделі), включно з карнизами, софітами, ринвами та водостоками.',
  ],
  [
    'Roof structure and covering, including fascias, soffits, guttering and downpipes.',
    'Конструкція та покриття даху, включно з карнизами, софітами, ринвами та водостоками.',
  ],
  [
    'PVC double-glazed windows and exterior entrance doors',
    'ПВХ вікна зі склопакетом та зовнішні вхідні двері',
  ],
  [
    'PVC double-glazed windows and exterior entrance door',
    'ПВХ вікна зі склопакетом та зовнішні вхідні двері',
  ],
  [
    'PVC double-glazed panoramic windows and exterior entrance doors',
    'Панорамні ПВХ вікна зі склопакетом та зовнішні вхідні двері',
  ],
  [
    'Metal roofing sheets, fascias, soffits, guttering and downpipes.',
    'Металочерепиця або металеві листи, карнизи, софіти, ринви та водостоки.',
  ],
  [
    'Timber cladding or the model\'s selected exterior finish.',
    'Дерев’яне облицювання або зовнішнє оздоблення за вибором моделі.',
  ],
  [
    'Model-specific Scandinavian-style exterior finish.',
    'Зовнішнє оздоблення в скандинавському стилі під конкретну модель.',
  ],
  [
    'Model-specific exterior finish.',
    'Зовнішнє оздоблення під конкретну модель.',
  ],
  [
    'On-site assembly of the structural shell',
    'Монтаж несучого каркасу на об’єкті',
  ],
  [
    'Complete SIP structural shell',
    'Повний структурний SIP-каркас',
  ],
  [
    'Assembly drawings and technical documentation',
    'Монтажні креслення та технічна документація',
  ],
  [
    'Internal plumbing and electrical cabling (first-fix only)',
    'Внутрішні мережі водопроводу та електропроводки (перший етап)',
  ],
  [
    'Internal plumbing and electrical routes (first-fix only)',
    'Внутрішні трубопроводи та електропроводка (перший етап)',
  ],
  [
    'Installed internal pipework, drainage routes and electrical cabling without sanitary ware, fittings or final connections.',
    'Прокладені внутрішні трубопроводи, каналізаційні траси та електропроводка без сантехніки, фурнітури та фінальних підключень.',
  ],
  [
    'Internal water supply and waste pipework (first-fix only)',
    'Внутрішні мережі водопостачання та каналізації (перший етап)',
  ],
  [
    'Electrical installation (first-fix and second-fix)',
    'Електромонтаж (перший і другий етапи)',
  ],
  [
    'Crane hire, telehandlers, scaffolding and fall-arrest systems.',
    'Оренда крана, навантажувачів, риштувань та систем запобігання падінню.',
  ],
  [
    'Crane hire, telehandlers, fall-arrest systems and scaffolding.',
    'Оренда крана, навантажувачів, систем запобігання падінню та риштувань.',
  ],
  [
    'Kitchen units, worktops, appliances and built-in kitchen furniture.',
    'Кухонні модулі, стільниці, побутова техніка та вбудовані кухонні меблі.',
  ],
  [
    'A high-performance, energy-efficient SIP home designed for fast on-site assembly.',
    'Високоефективний енергозберігальний SIP-будинок, розроблений для швидкого монтажу на об’єкті.',
  ],
  [
    'Screw-pile foundation (optional, not included in the base price)',
    'Гвинтовий фундамент (опційно, не входить у базову вартість)',
  ],
  [
    'SIP panels (structural insulated panels), thermal performance ~0.16–0.18 W/m²·K',
    'SIP-панелі (структурні термоізольовані панелі), теплотехніка ~0,16–0,18 Вт/м²·К',
  ],
  [
    'SIP panels (structural insulated panels)',
    'SIP-панелі (структурні термоізольовані панелі)',
  ],
  [
    'SIP wall, floor and roof system',
    'Система SIP-стін, підлоги та покрівлі',
  ],
  [
    'Standing seam clip-fixed metal roofing with integrated guttering',
    'Фальцева металева покрівля з інтегрованим водостоком',
  ],
  [
    'High-performance SIP core with excellent airtightness',
    'Високоефективне ядро SIP із відмінною герметичністю контуру',
  ],
  [
    'High thermal performance SIP envelope',
    'Високотехнологічний теплотехнічний SIP-контур',
  ],
  [
    'High thermal performance insulated SIP envelope',
    'Високоефективний утеплений SIP-контур',
  ],
  [
    'High-performance SIP envelope with outstanding insulation',
    'Високоефективний SIP-контур з видатною теплоізоляцією',
  ],
  [
    'PVC double-glazed units, U-value ~1.1–1.3 W/m²·K',
    'ПВХ вікна зі склопакетом, коефіцієнт U ~1,1–1,3 Вт/м²·К',
  ],
  [
    'High-performance insulation (external walls: approx. 0.17 W/m²·K, roof: approx. 0.15 W/m²·K)',
    'Високоефективне утеплення (зовнішні стіни: орієнтовно 0,17 Вт/м²·К; дах: орієнтовно 0,15 Вт/м²·К)',
  ],
  [
    'High-performance insulation',
    'Високоефективне утеплення',
  ],
  [
    'Factory-built precision with strict quality control',
    'Заводська точність виготовлення з суворим контролем якості',
  ],
  [
    'Natural timber cladding and interior finish options',
    'Варіанти дерев’яного облицювання та внутрішнього оздоблення',
  ],
  [
    'Fast on-site assembly (4–8 weeks)',
    'Швидкий монтаж на об’єкті (4–8 тижнів)',
  ],
  [
    'Designed for efficient energy use',
    'Спроєктовано для ефективного енергоспоживання',
  ],
  [
    '10-year structural warranty',
    '10 років структурної гарантії',
  ],
  [
    'Low heat loss due to airtight construction',
    'Низькі тепловтрати завдяки герметичному контуру',
  ],
  [
    'Reduced energy consumption for heating',
    'Знижене споживання енергії на опалення',
  ],
  [
    'Naturally bright interior with large glazing areas',
    'Природно світлий інтер’єр завдяки великим скляним поверхням',
  ],
  [
    'Open-plan living space with abundant natural light',
    'Відкрите планування вітальні з великою кількістю природного світла',
  ],
  [
    'Large floor-to-ceiling windows',
    'Великі вікна від підлоги до стелі',
  ],
  [
    'Integrated covered terrace for year-round use',
    'Інтегрована накрита тераса для використання цілий рік',
  ],
  [
    'Modern Scandinavian-inspired layout',
    'Сучасне планування в дусі Скандинавії',
  ],
  [
    'Compact footprint suitable for small plots',
    'Компактний відбиток, зручний для невеликих ділянок',
  ],
  [
    'Precision-manufactured components for a clean build',
    'Точність виготовлення вузлів для охайного монтажу',
  ],
  [
    'Large glazed openings for abundant natural daylight',
    'Великі скляні прорізи для максимуму природного світла',
  ],
  [
    'Abundant natural daylight through large glazed openings',
    'Максимум природного світла через великі скляні прорізи',
  ],
  [
    'Installation of SIP panels, roofing, exterior finishes and windows.',
    'Монтаж SIP-панелей, покрівлі, зовнішніх оздоблень та вікон.',
  ],
  [
    'Durable, low-maintenance external materials',
    'Міцні зовнішні матеріали з низькою потребою в обслуговуванні',
  ],
  [
    'Clear separation between private and shared zones',
    'Чітке розділення приватних і спільних зон',
  ],
  [
    'Internal finishes and internal doors included',
    'Внутрішні оздоблення та міжкімнатні двері включені',
  ],
  [
    'Internal finishes and internal doors',
    'Внутрішні оздоблення та міжкімнатні двері',
  ],
  [
    'Energy-efficient SIP construction',
    'Енергоефективна SIP-конструкція',
  ],
  [
    'Factory-manufactured system for fast and predictable assembly',
    'Заводська система для швидкого й передбачуваного монтажу',
  ],
  [
    'Reduced heat loss and efficient energy demand',
    'Менші тепловтрати та раціональне споживання енергії',
  ],
  [
    'Mechanical and engineering systems',
    'Інженерні та механічні системи',
  ],
  [
    'Mechanical and electrical systems',
    'Механічні та електричні системи',
  ],
  [
    'Electrical fittings and fixtures',
    'Електрофурнітура та освітлення',
  ],
  [
    'Bathrooms and sanitary installations',
    'Ванні кімнати та сантехнічні інсталяції',
  ],
  [
    'Kitchen furniture and fittings',
    'Кухонні меблі та фурнітура',
  ],
  [
    'Planning and regulatory fees',
    'Погодження та регуляторні збори',
  ],
  [
    'Foundations and site works',
    'Фундаменти та підготовка ділянки',
  ],
  [
    'Groundworks, external drainage, mains connection for water, electricity or sewage.',
    'Земляні роботи, зовнішній дренаж, підключення до води, електрики чи каналізації.',
  ],
  [
    'External utilities and site works',
    'Зовнішні комунікації та роботи на ділянці',
  ],
  [
    'Mechanical lifting equipment',
    'Підйомне обладнання для монтажу',
  ],
  [
    'Exterior cladding system',
    'Система зовнішнього облицювання',
  ],
  [
    'Roofing package',
    'Покрівельний комплект',
  ],
  [
    'Roof structure and covering',
    'Несуча конструкція та покриття даху',
  ],
  [
    'Metal roofing system',
    'Металева покрівельна система',
  ],
  [
    'Not included',
    'Не входить у вартість',
  ],
  [
    'Stable indoor comfort suitable for year-round living',
    'Стабільний комфорт у приміщеннях цілий рік',
  ],
  [
    'Stable indoor comfort suitable for year-round use',
    'Стабільний комфорт у приміщеннях для використання цілий рік',
  ],
  [
    'Efficient and rational planning',
    'Ефективне й раціональне планування',
  ],
  [
    'Efficient, design-led spatial planning',
    'Ефективне просторове планування з дизайнерським акцентом',
  ],
  [
    'Spacious open-plan kitchen–living area',
    'Простора відкрита кухня-вітальня',
  ],
  [
    'Spacious open-plan kitchen–living space',
    'Простора відкрита кухня-вітальня',
  ],
  [
    'Open-plan kitchen–living space',
    'Відкрита кухня-вітальня',
  ],
  [
    'Large open-plan kitchen–living space',
    'Велика відкрита кухня-вітальня',
  ],
  [
    'Dedicated home office',
    'Окремий домашній офіс',
  ],
  [
    'Panoramic floor-to-ceiling glazing',
    'Панорамне скління від підлоги до стелі',
  ],
  [
    'Model-specific roofing solution',
    'Покрівельне рішення під модель',
  ],
  [
    'Flat roof structure and waterproofing system, including parapets and drainage components.',
    'Плоский дах з гідроізоляцією, парапетами та елементами дренажу.',
  ],
  [
    'Flat roof structure and waterproofing system',
    'Плоский дах і гідроізоляція',
  ],
  [
    'Flat roof architectural design',
    'Архітектура з плоским дахом',
  ],
  [
    'Four bedrooms and two bathrooms',
    'Чотири спальні та дві ванні кімнати',
  ],
  [
    'Three bedrooms and three bathrooms',
    'Три спальні та три ванні кімнати',
  ],
  [
    'Spacious two-storey family layout',
    'Просторе двоповерхове сімейне планування',
  ],
  [
    'Generous covered terrace extending the living space outdoors',
    'Щедра накрита тераса, що подовжує житло на ділянку',
  ],
  [
    'Abundant natural daylight through large glazed areas',
    'Багато природного світла через великі скляні поверхні',
  ],
  [
    'Integrated two-car garage',
    'Вбудований гараж на два автомобілі',
  ],
  [
    'Large single-storey family home for permanent residence',
    'Великий одноповерховий сімейний будинок для постійного проживання',
  ],
  [
    'Spacious single-storey family layout',
    'Просторе одноповерхове сімейне планування',
  ],
  [
    'Modern minimalist architectural language',
    'Сучасна мінімалістична архітектурна мова',
  ],
  [
    'Factory-built for clean, fast on-site installation',
    'Заводське виготовлення для чистого й швидкого монтажу на об’єкті',
  ],
  [
    'Natural or concrete roof tiles (model-dependent option)',
    'Натуральна або бетонна черепиця (залежно від моделі)',
  ],
  [
    'Submission, architectural fees, engineering approvals and associated documentation.',
    'Подання документів, архітектурні гонорари, інженерні погодження та супутня документація.',
  ],
  [
    'Supply and installation of screw-pile foundations or any concrete foundation system.',
    'Постачання та монтаж гвинтових або бетонних фундаментних систем.',
  ],
  [
    'Flooring, tiling, wall panelling (plywood), painting and internal joinery.',
    'Підлоги, плитка, настінні панелі (фанера), фарбування та столярні роботи всередині.',
  ],
  [
    'Smoke detectors, heat detectors, fire alarm panels and emergency lighting.',
    'Димові та теплові сповіжувачі, пожежні панелі та аварійне освітлення.',
  ],
  [
    'ASHP, radiators, underfloor heating, MVHR or any HVAC equipment.',
    'Теплові насоси, радіатори, тепла підлога, MVHR чи інше HVAC-обладнання.',
  ],
  [
    'WC, shower, taps, boiler, cabinets and all bathroom fixtures.',
    'Унітаз, душ, змішувачи, бойлер, шафи та уся сантехніка у ванних.',
  ],
  [
    'Internal finishing works',
    'Внутрішні оздоблювальні роботи',
  ],
  [
    'Planning permission and regulatory fees',
    'Дозвіл на будівництво та регуляторні збори',
  ],
  [
    'Sanitary ware and bathroom equipment',
    'Сантехніка та обладнання ванних',
  ],
  [
    'Heating and ventilation systems',
    'Системи опалення та вентиляції',
  ],
  [
    'All structural elements are precision-manufactured in the factory and delivered ready for a clean, fast and predictable on-site assembly process.',
    'Усі конструктивні елементи виготовляються на заводі з високою точністю та поставляються готовими для чистого, швидкого й передбачуваного монтажу на об’єкті.',
  ],
  [
    'Each element is precision-manufactured in the factory and delivered ready for a clean, fast and predictable on-site assembly.',
    'Кожен елемент виготовляється на заводі з високою точністю та поставляється готовим для чистого, швидкого й передбачуваного монтажу на об’єкті.',
  ],
  [
    'Each element is factory-manufactured for clean, fast and predictable on-site assembly.',
    'Кожен елемент виробляється на заводі для чистого, швидкого й передбачуваного монтажу на об’єкті.',
  ],
  [
    'Every component is precision-manufactured in the factory and arrives ready for clean, fast and predictable on-site assembly.',
    'Кожен вузол виготовляється на заводі з високою точністю та доставляється готовим для чистого, швидкого й передбачуваного монтажу на об’єкті.',
  ],
  [
    'Each element is factory-produced for clean, fast and predictable on-site assembly.',
    'Кожен елемент виробляється на заводі для чистого, швидкого й передбачуваного монтажу на об’єкті.',
  ],
];

pairs.sort((a, b) => b[0].length - a[0].length);
for (const [en, uk] of pairs) {
  if (en === uk) continue;
  if (!s.includes(en)) continue;
  s = s.split(en).join(uk);
}

fs.writeFileSync(housesPath, s);
console.log('houses.ts Ukrainian pass applied');
