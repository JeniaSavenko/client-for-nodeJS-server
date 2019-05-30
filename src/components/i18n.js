import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

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
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',

    keySeparator: false,

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
