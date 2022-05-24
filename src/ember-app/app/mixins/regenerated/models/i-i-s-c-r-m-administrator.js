import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  role: DS.attr('string')
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.i-i-s-c-r-m-administrator.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  role: {
    descriptionKey: 'models.i-i-s-c-r-m-administrator.validations.role.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('AdministratorE', 'i-i-s-c-r-m-administrator', {
    name: attr('Name', { index: 0 }),
    role: attr('Role', { index: 1 })
  });

  modelClass.defineProjection('AdministratorL', 'i-i-s-c-r-m-administrator', {
    name: attr('Name', { index: 0 }),
    role: attr('Role', { index: 1 })
  });
};
