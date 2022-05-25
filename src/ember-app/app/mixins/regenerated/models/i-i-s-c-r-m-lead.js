import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  leadOrNot: DS.attr('i-i-s-c-r-m-t-lead')
});

export let ValidationRules = {
  leadOrNot: {
    descriptionKey: 'models.i-i-s-c-r-m-lead.validations.leadOrNot.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineBaseModel = function (modelClass) {
  modelClass.reopenClass({
    _parentModelName: 'i-i-s-c-r-m-contact'
  });
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('LeadE', 'i-i-s-c-r-m-lead', {
    leadOrNot: attr('Lead or not', { index: 0 }),
    telephone: attr('Telephone', { index: 1 }),
    name: attr('Name', { index: 2 }),
    surname: attr('Surname', { index: 3 }),
    address: attr('Address', { index: 4 }),
    companyName: attr('Company name', { index: 5 }),
    gender: attr('Gender', { index: 6 }),
    email: attr('Email', { index: 7 }),
    date: attr('Date', { index: 8 })
  });

  modelClass.defineProjection('LeadL', 'i-i-s-c-r-m-lead', {
    leadOrNot: attr('Lead or not', { index: 0 }),
    telephone: attr('Telephone', { index: 1 }),
    name: attr('Name', { index: 2 }),
    surname: attr('Surname', { index: 3 }),
    address: attr('Address', { index: 4 }),
    companyName: attr('Company name', { index: 5 }),
    gender: attr('Gender', { index: 6 }),
    email: attr('Email', { index: 7 }),
    date: attr('Date', { index: 8 })
  });
};
