import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            header: {
                home: 'Home',
                products: 'Products',
                service: 'About Us',
                news: 'News',
                contact: 'Contact',
                categories: {
                    rehabilitation: 'Rehabilitation',
                    neurological: 'Neurological',
                    physical: 'Physical',
                    neurology: 'Neurology',
                    eegEmg: 'EEG/EMG',
                    expendable: 'Expendable',
                    neuroBioFeedback: 'Neuro/Bio feedback',
                    internalMedicine: 'Internal Medicine',
                    ekg: 'EKG',
                    spirometry: 'Spirometry',
                    sleepApnea: 'Sleep apnea'
                }
            },
            footer: {
                links: 'Links',
                products: 'Products',
                storeLocation: 'Store Location',
                rehabilitation: 'Rehabilitation',
                neurology: 'Neurology',
                internalMedicine: 'Internal Medicine',
            },
            home: {
                ads: {
                    first: {
                        title: 'Smart Glove',
                        subtitle: 'Elbow/Wrist/Finger Rehabilitation',
                        description: 'The smart glove is a device for active digital rehabilitation in which, with the help of repetitive movements, the process of neuroplasticity is encouraged in patients with neurological and musculoskeletal disorders.'
                    },
                    second: {
                        title: 'Smart Kids',
                        subtitle: 'Elbow/Wrist/Finger Rehabilitation',
                        description: "The children's smart glove is a device for active digital rehabilitation, in which, with the help of repetitive movements, the process of neuroplasticity is encouraged in patients with neurological and musculoskeletal disorders"
                    },
                    third: {
                        title: 'Smart Board',
                        subtitle: 'Shoulder and elbow rehabilitation',
                        description: 'Unlike conventional methods, the smart board offers a different, modern and interactive approach, where patients focus on performing the given task through fun games and thus improve cognitive/motor functions.'
                    }
                },
                latestProducts: 'Latest Products',
                viewAll: 'View All',
                shopByBrands: 'Our partners',
                shopByCategories: 'Products',
                shopByCategoryDescription: 'consectetur adipisicing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam nostrud exercit.',
                rehabilitation: 'Rehabilitation',
                neurology: 'Neurology',
                internalMedicine: 'Internal Medicine',
                latestNews: 'Latest News',
            },
            products: {
                shopProducts: 'All Products',
                showingResults: 'Showing results',
                total: 'Total',
                productSearch: 'Product Search',
                brandFilter: 'Brand Filter',
                filterByPrice: 'Filter By Price',
                categories: 'categories',
                rehabilitation: 'Rehabilitation',
                neurology: 'Neurology',
                internalMedicine: 'Internal Medicine',
                clear: 'clear',
                relatedProducts: 'Related Products'
            },
            service: {
                service: 'About Us',
                serviceDescription: 'MEDITEK is a young and dynamic company, whose philosophy is based on following the latest technological trends and innovative solutions in the field of medicine, with a constant focus on the needs of our customers.\n\nOur goal is to provide speed and efficiency in responding to your requirements, as well as to dedicate ourselves to the maintenance, upgrade, and servicing of the equipment you have implemented. We offer a wide range of products from world-famous and reputable brands. With the continued growth of our company, we are constantly enriching and expanding our product range. We work with integrity, dedication and responsibility, in order to justify your trust and loyalty',
                serviceContact: 'Get in touch',
                enterName: 'Enter Name/Last Name',
                enterЕmail: 'Enter Email',
                enterSubject: 'Enter Subject',
                enterMessage: 'Enter Message',
                successPopup: 'Your message has been sent and will be reviewed shortly'
            },
            news: {
                latestNews: 'Latest News',
                search: 'Search',
            },
            contact: {
                contactInfo: 'Contact Info',
                contactDescription: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
                contact: 'Contact',
                email: 'Email',
                location: 'Location'
            }
        }
    },
    mk: {
        translation: {
            header: {
                home: 'Почетна',
                products: 'Производи',
                service: 'За Нас',
                news: 'Новости',
                contact: 'Контакт',
                categories: {
                    rehabilitation: 'Рехабилитација',
                    neurological: 'Невролошка',
                    physical: 'Физикална',
                    neurology: 'Неврологија',
                    eegEmg: 'ЕЕГ/ЕМГ',
                    expendable: 'Потрошна',
                    neuroBioFeedback: 'Неуро/Био Фидбек',
                    internalMedicine: 'Интерна Медицина',
                    ekg: 'ЕКГ',
                    spirometry: 'Спирометрија',
                    sleepApnea: 'Ноќна апнеа'
                }
            },
            footer: {
                links: 'Линкови',
                products: 'Производи',
                storeLocation: 'Локација',
                rehabilitation: 'Рехабилитација',
                neurology: 'Неврологија',
                internalMedicine: 'Интерна Медицина',
            },
            home: {
                ads: {
                    first: {
                        title: 'Паметна ракавица',
                        subtitle: 'Рехабилитација на лакт/зглоб/прсти',
                        description: 'Паметната ракавица е уред за активна дигитална рехабилитација при што со помош на повторувачки движења се поттикнува процес на невропластичност кај пациентите со невролошки и мускулоскелетни нарушувања '
                    },
                    second: {
                        title: 'Детска паметна ракавица',
                        subtitle: 'Рехабилитација на лакт/зглоб/прсти',
                        description: 'Детска паметната ракавица е уред за активна дигитална рехабилитација при што со помош на повторувачки движења се поттикнува процес на невропластичност кај пациентите со невролошки и мускулоскелетни нарушувања '
                    },
                    third: {
                        title: 'Паметна табла',
                        subtitle: 'Рехабилитација на рамо и лакт',
                        description: 'За разлика од конвенционалните методи, паметната табла нуди еден поинаков, модерен и интерактивен пристап, при што пациентите преку забавни игри се фокусираат на извршување на зададената задача и на тој начин ги подобруваат когнитивните/моторните функции.'
                    }
                },
                secondBanner: 'Sed Do Eius Tempor Incididunt Ut Labore Et Dolore Magna Aliqua, Lorem Ipsum Dolor Sit Amet',
                latestProducts: 'Производи',
                viewAll: 'Прегледај',
                shopByBrands: 'Наши партнери',
                shopByCategories: 'Категории',
                shopByCategoryDescription: 'consectetur adipisicing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam nostrud exercit.',
                rehabilitation: 'Рехабилитација',
                neurology: 'Неврологија',
                internalMedicine: 'Интерна Медицина',
                latestNews: 'Најнови Вести',
            },
            products: {
                shopProducts: 'Производи',
                showingResults: 'Резултати',
                total: 'Вкупно',
                productSearch: 'Пребарај',
                brandFilter: 'Филтрирај по брендови',
                filterByPrice: 'Филтрирај по цена',
                categories: 'Категории',
                rehabilitation: 'Рехабилитација',
                neurology: 'Неврологија',
                internalMedicine: 'Интерна Медицина',
                clear: 'Тргни Филтри',
                relatedProducts: 'Слични производи'
            },
            service: {
                service: 'За Нас',
                serviceDescription: 'МЕДИТЕК е млада и динамична компанија, чија филозофија е втемелена на следење на најсовремените технолошки трендови и иновативни решенија во областа на медицината, со постојан фокус на потребите на нашите клиенти.\n\nНашата цел е да обезбедиме брзина и ефикасност во одговорите на вашите барања, како и да се посветиме на оддржувањето, надградбата и сервисирањето на имплементираната опрема. Нудиме широка палета на производи од светски познати и реномирани брендови. Со континуираниот раст на нашата компанија, постојано го збогатуваме и прошируваме нашиот асортиман на производи. Работиме со интегритет, посветеност и одговорност, со цел да ја оправдаме вашата доверба и лојалност',
                serviceContact: 'Контактирајте нè',
                enterName: 'Внесете Име/Презиме',
                enterЕmail: 'Внесете Е-Пошта',
                enterSubject: 'Внесете Субјект На Пораката',
                enterMessage: 'Внесете Детална порака',
                successPopup: 'Вашата порака е испратена !'
            },
            news: {
                latestNews: 'Најнови Вести',
                search: 'Пребарувај',
            },
            contact: {
                contactInfo: 'Контакт инфо',
                contactDescription: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
                contact: 'Контакт',
                email: 'Е-Пошта',
                location: 'Локација'
            }
        }
    }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: ['en', 'mk'],
    debug: false,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });


export default i18n;