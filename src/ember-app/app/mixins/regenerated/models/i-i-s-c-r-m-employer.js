import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  employerRole: DS.attr('string'),
  administrator: DS.belongsTo('i-i-s-c-r-m-administrator', { inverse: null, async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.i-i-s-c-r-m-employer.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  employerRole: {
    descriptionKey: 'models.i-i-s-c-r-m-employer.validations.employerRole.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  administrator: {
    descriptionKey: 'models.i-i-s-c-r-m-employer.validations.administrator.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('EmployerE', 'i-i-s-c-r-m-employer', {
    name: attr('Name', { index: 0 }),
    employerRole: attr('Employer role', { index: 1 }),
    administrator: belongsTo('i-i-s-c-r-m-administrator', 'Administrator', {
      name: attr('Name', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'name' })
  });

  modelClass.defineProjection('EmployerL', 'i-i-s-c-r-m-employer', {
    name: attr('Name', { index: 0 }),
    employerRole: attr('Employer role', { index: 1 }),
    administrator: belongsTo('i-i-s-c-r-m-administrator', 'Name', {
      name: attr('Name', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
