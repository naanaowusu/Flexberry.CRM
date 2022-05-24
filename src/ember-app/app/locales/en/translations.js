import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'CRM',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'CRM',
          title: 'CRM'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
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
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
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
