import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISCRMActivityLForm from './forms/i-i-s-c-r-m-activity-l';
import IISCRMAdministratorLForm from './forms/i-i-s-c-r-m-administrator-l';
import IISCRMContactLForm from './forms/i-i-s-c-r-m-contact-l';
import IISCRMEmployerLForm from './forms/i-i-s-c-r-m-employer-l';
import IISCRMLeadLForm from './forms/i-i-s-c-r-m-lead-l';
import IISCRMActivityEForm from './forms/i-i-s-c-r-m-activity-e';
import IISCRMAdministratorEForm from './forms/i-i-s-c-r-m-administrator-e';
import IISCRMContactEForm from './forms/i-i-s-c-r-m-contact-e';
import IISCRMEmployerEForm from './forms/i-i-s-c-r-m-employer-e';
import IISCRMLeadEForm from './forms/i-i-s-c-r-m-lead-e';
import IISCRMActivityModel from './models/i-i-s-c-r-m-activity';
import IISCRMAdministratorModel from './models/i-i-s-c-r-m-administrator';
import IISCRMContactModel from './models/i-i-s-c-r-m-contact';
import IISCRMEmployerModel from './models/i-i-s-c-r-m-employer';
import IISCRMLeadModel from './models/i-i-s-c-r-m-lead';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-c-r-m-activity': IISCRMActivityModel,
    'i-i-s-c-r-m-administrator': IISCRMAdministratorModel,
    'i-i-s-c-r-m-contact': IISCRMContactModel,
    'i-i-s-c-r-m-employer': IISCRMEmployerModel,
    'i-i-s-c-r-m-lead': IISCRMLeadModel
  },

  'application-name': 'CRM',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'CRM',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'CRM',
          title: 'CRM'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'c-r-m': {
          caption: 'CRM',
          title: 'CRM',
          'i-i-s-c-r-m-employer-l': {
            caption: 'Employer',
            title: ''
          },
          'i-i-s-c-r-m-lead-l': {
            caption: 'Lead',
            title: ''
          },
          'i-i-s-c-r-m-contact-l': {
            caption: 'Contact',
            title: ''
          },
          'i-i-s-c-r-m-administrator-l': {
            caption: 'Administrator',
            title: ''
          },
          'i-i-s-c-r-m-activity-l': {
            caption: 'Activity',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-c-r-m-activity-l': IISCRMActivityLForm,
    'i-i-s-c-r-m-administrator-l': IISCRMAdministratorLForm,
    'i-i-s-c-r-m-contact-l': IISCRMContactLForm,
    'i-i-s-c-r-m-employer-l': IISCRMEmployerLForm,
    'i-i-s-c-r-m-lead-l': IISCRMLeadLForm,
    'i-i-s-c-r-m-activity-e': IISCRMActivityEForm,
    'i-i-s-c-r-m-administrator-e': IISCRMAdministratorEForm,
    'i-i-s-c-r-m-contact-e': IISCRMContactEForm,
    'i-i-s-c-r-m-employer-e': IISCRMEmployerEForm,
    'i-i-s-c-r-m-lead-e': IISCRMLeadEForm
  },

});

export default translations;
