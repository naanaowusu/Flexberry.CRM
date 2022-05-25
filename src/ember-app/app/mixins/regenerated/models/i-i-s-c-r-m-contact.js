import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  telephone: DS.attr('string'),
  name: DS.attr('string'),
  surname: DS.attr('string'),
  address: DS.attr('string'),
  companyName: DS.attr('string'),
  gender: DS.attr('i-i-s-c-r-m-t-gender'),
  email: DS.attr('string'),
  date: DS.attr('date')
});

export let ValidationRules = {
  telephone: {
    descriptionKey: 'models.i-i-s-c-r-m-contact.validations.telephone.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  name: {
    descriptionKey: 'models.i-i-s-c-r-m-contact.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  surname: {
    descriptionKey: 'models.i-i-s-c-r-m-contact.validations.surname.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  address: {
    descriptionKey: 'models.i-i-s-c-r-m-contact.validations.address.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  companyName: {
    descriptionKey: 'models.i-i-s-c-r-m-contact.validations.companyName.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  gender: {
    descriptionKey: 'models.i-i-s-c-r-m-contact.validations.gender.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  email: {
    descriptionKey: 'models.i-i-s-c-r-m-contact.validations.email.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  date: {
    descriptionKey: 'models.i-i-s-c-r-m-contact.validations.date.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ContactE', 'i-i-s-c-r-m-contact', {
    telephone: attr('Telephone', { index: 0 }),
    name: attr('Name', { index: 1 }),
    surname: attr('Surname', { index: 2 }),
    address: attr('Address', { index: 3 }),
    companyName: attr('Company name', { index: 4 }),
    gender: attr('Gender', { index: 5 }),
    email: attr('Email', { index: 6 }),
    date: attr('Date', { index: 7 })
  });

  modelClass.defineProjection('ContactL', 'i-i-s-c-r-m-contact', {
    telephone: attr('Telephone', { index: 0 }),
    name: attr('Name', { index: 1 }),
    surname: attr('Surname', { index: 2 }),
    address: attr('Address', { index: 3 }),
    companyName: attr('Company name', { index: 4 }),
    gender: attr('Gender', { index: 5 }),
    email: attr('Email', { index: 6 }),
    date: attr('Date', { index: 7 })
  });
};
