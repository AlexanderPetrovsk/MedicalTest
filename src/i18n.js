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
                banner: 'Quality Care Starts Here: <br/> Your Trusted Source for Medical Equipment',
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
                serviceDescription: 'At Meditek, we are dedicated to providing high-quality medical equipment and exceptional service to our customers. Our extensive range of products and expert support ensures that you have everything you need to enhance patient care and improve outcomes.',
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
                banner: 'Квалитетната грижа започнува овде:<br/> Вашиот доверлив извор за медицинска опрема',
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
                serviceDescription: 'Во Медитек, ние сме посветени на обезбедување висококвалитетна медицинска опрема и исклучителни услуги за нашите клиенти. Нашиот широк асортиман на производи и стручна поддршка гарантира дека имате се што ви треба за да ја подобрите грижата за пациентите и да ги подобрите резултатите.',
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