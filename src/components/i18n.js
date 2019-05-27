import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
        en: {
            translation: {
                Posts: 'Posts',
                'Add Post': 'Add Post',
                Dashboard: 'Dashboard',
                'Post creation': 'Post creation',
                'Add New Post': 'Add New Post',
                'Post Content': 'Post Content',
                'Post Title': 'Post Title'
            }
        },
        ru: {
            translation: {
                Posts: 'Посты',
                'Add Post': 'Добавить пост',
                Dashboard: 'Главная страница',
                'Post creation': 'Создание поста',
                'Add New Post': 'Добавить новый пост',
                'Post Content': 'Контент поста',
                'Post Title': 'Заголовок'
            }
        }
    };
i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: 'en',

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
