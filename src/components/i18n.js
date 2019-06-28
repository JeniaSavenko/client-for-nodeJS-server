import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      posts: 'Posts',
      addPost: 'Add Post',
      dashboard: 'Dashboard',
      postCreation: 'Post creation',
      addNewPost: 'Add New Post',
      save: 'Save',
      delete: 'Delete',
      title: 'Title',
      text: 'Text',
      add: 'Add',
      postContent: 'Post Content',
      postTitle: 'Post Title',
      userPass: 'User Password',
      userName: 'User Name',
      roomName: 'Room Name',
      login: 'Login',
      addUser: 'Add User',
      chooseRoom: 'Choose Room',
      registration: 'Registration',
      ru: 'РУС',
      en: 'EN',
      logout: 'LogOut',
      lastSave: 'Last Save',
      nowEditing: 'now editing',
    },
  },
  ru: {
    translation: {
      posts: 'Посты',
      addPost: 'Добавить пост',
      dashboard: 'Главная страница',
      title: 'Заголовок',
      save: 'Сохранить',
      delete: 'Удалить',
      text: 'Текст',
      addUser: 'Добавить юзера',
      roomName: 'Имя Комнаты',
      chooseRoom: 'Выбрать комнату',
      add: 'Добавить',
      postCreation: 'Создание поста',
      addNewPost: 'Добавить новый пост',
      postContent: 'Контент поста',
      postTitle: 'Заголовок',
      userPass: 'Пароль',
      userName: 'Имя Пользователя',
      login: 'Вход',
      registration: 'Регистрация',
      ru: 'РУС',
      en: 'EN',
      logout: 'Выход',
      lastSave: 'Последнее сохранение',
      nowEditing: 'Сейчас редактирует',
    },
  },
};
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',

    keySeparator: false,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
