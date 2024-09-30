import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            header: {
                home: 'Home',
                products: 'Products',
                service: 'Service',
                news: 'News',
                contact: 'Contact',
                categories: {
                    rehabilitation: 'Rehabilitation',
                    neurological: 'Neurology',
                    physical: 'Physical',
                    neurology: 'Neurological',
                    eeg: 'EEG/EMG',
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
                banner: 'Lorem Ipsum Header Text Conesctetur Dolor Sit Amet Adipisicing elit Ut Labore Et Dolore Magna Aliqua',
                ads: {
                    first: {
                        title: 'Smart Glove',
                        description: 'Lorem Ipsum Dolor Sit Amet'
                    },
                    second: {
                        title: 'Smart Kids',
                        description: 'Lorem Ipsum Dolor Sit Amet'
                    },
                    third: {
                        title: 'Smart Board',
                        description: 'Lorem Ipsum Dolor Sit Amet'
                    }
                },
                latestProducts: 'Latest Products',
                shopByBrands: 'Shop By Brands',
                shopByCategories: 'Shop By Categories',
                shopByCategoryDescription: 'consectetur adipisicing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam nostrud exercit.',
                rehabilitation: 'Rehabilitation',
                neurology: 'Neurology',
                internalMedicine: 'Internal Medicine',
                latestNews: 'Latest News',
            },
            products: {
                shopProducts: 'Shop Products',
                showingResults: 'Showing results',
                total: 'total',
                productSearch: 'Product Search',
                brandFilter: 'Brand Filter',
                filterByPrice: 'Filter By Price',
                categories: 'categories',
                rehabilitation: 'Rehabilitation',
                neurology: 'Neurology',
                internalMedicine: 'Internal Medicine',
                clear: 'clear'
            },
            service: {
                service: 'Service',
                serviceDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a mauris mi. Cras efficitur mi arcu, id volutpat nunc eleifend eget. Quisque quis nibh a leo bibendum facilisis vel tristique justo. Nulla lobortis felis tortor, quis fringilla turpis laoreet vitae. Aenean ornare mi lacus, quis hendrerit ipsum consectetur aliquet. Suspendisse dictum, elit eu porta bibendum, nisi est ornare mi, et tempus nisl purus non sapien. Vestibulum sit amet ultrices nisi. Aenean ac odio aliquam, hendrerit felis ut, eleifend odio.',
                serviceContact: 'Service Contact'
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
                products: 'Продукти',
                service: 'Сервис',
                news: 'Новости',
                contact: 'Контакт',
                categories: {
                    rehabilitation: 'Рехабилитација',
                    neurological: 'Невролошка',
                    physical: 'Физикална',
                    neurology: 'Неврологија',
                    eeg: 'ЕЕГ/ЕМГ',
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
                products: 'Продукти',
                storeLocation: 'Локација',
                rehabilitation: 'Рехабилитација',
                neurology: 'Неврологија',
                internalMedicine: 'Интерна Медицина',
            },
            home: {
                banner: 'Lorem Ipsum Header Text Conesctetur Dolor Sit Amet Adipisicing elit Ut Labore Et Dolore Magna Aliqua',
                ads: {
                    first: {
                        title: 'Smart Glove',
                        description: 'Lorem Ipsum Dolor Sit Amet'
                    },
                    second: {
                        title: 'Smart Kids',
                        description: 'Lorem Ipsum Dolor Sit Amet'
                    },
                    third: {
                        title: 'Smart Board',
                        description: 'Lorem Ipsum Dolor Sit Amet'
                    }
                },
                secondBanner: 'Sed Do Eius Tempor Incididunt Ut Labore Et Dolore Magna Aliqua, Lorem Ipsum Dolor Sit Amet',
                latestProducts: 'Најнови Продукти',
                shopByBrands: 'Купувај по бренд',
                shopByCategories: 'Купувај по категорија',
                shopByCategoryDescription: 'consectetur adipisicing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam nostrud exercit.',
                rehabilitation: 'Рехабилитација',
                neurology: 'Неврологија',
                internalMedicine: 'Интерна Медицина',
                latestNews: 'Најнови Вести',
            },
            products: {
                shopProducts: 'Продукти',
                showingResults: 'Резултати',
                total: 'Вкупно',
                productSearch: 'Пребарај продукт',
                brandFilter: 'Филтрирај по брендови',
                filterByPrice: 'Филтрирај по цена',
                categories: 'Категории',
                rehabilitation: 'Рехабилитација',
                neurology: 'Неврологија',
                internalMedicine: 'Интерна Медицина',
                clear: 'Тргни Филтри'
            },
            service: {
                service: 'Сервис',
                serviceDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a mauris mi. Cras efficitur mi arcu, id volutpat nunc eleifend eget. Quisque quis nibh a leo bibendum facilisis vel tristique justo. Nulla lobortis felis tortor, quis fringilla turpis laoreet vitae. Aenean ornare mi lacus, quis hendrerit ipsum consectetur aliquet. Suspendisse dictum, elit eu porta bibendum, nisi est ornare mi, et tempus nisl purus non sapien. Vestibulum sit amet ultrices nisi. Aenean ac odio aliquam, hendrerit felis ut, eleifend odio.',
                serviceContact: 'Сервис контакт'
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