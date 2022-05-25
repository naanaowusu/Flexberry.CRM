import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  activityName: DS.attr('string'),
  activityType: DS.attr('i-i-s-c-r-m-t-activity'),
  startOfActivity: DS.attr('date'),
  endOfActivity: DS.attr('date'),
  contact: DS.belongsTo('i-i-s-c-r-m-contact', { inverse: null, async: false, polymorphic: true })
});

export let ValidationRules = {
  activityName: {
    descriptionKey: 'models.i-i-s-c-r-m-activity.validations.activityName.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  activityType: {
    descriptionKey: 'models.i-i-s-c-r-m-activity.validations.activityType.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  startOfActivity: {
    descriptionKey: 'models.i-i-s-c-r-m-activity.validations.startOfActivity.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  endOfActivity: {
    descriptionKey: 'models.i-i-s-c-r-m-activity.validations.endOfActivity.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  contact: {
    descriptionKey: 'models.i-i-s-c-r-m-activity.validations.contact.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ActivityE', 'i-i-s-c-r-m-activity', {
    activityName: attr('Activity name', { index: 0 }),
    activityType: attr('Activity type', { index: 1 }),
    startOfActivity: attr('Start of activity', { index: 2 }),
    endOfActivity: attr('End of activity', { index: 3 }),
    contact: belongsTo('i-i-s-c-r-m-contact', 'Contact', {
      telephone: attr('Telephone', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'telephone' })
  });

  modelClass.defineProjection('ActivityL', 'i-i-s-c-r-m-activity', {
    activityName: attr('Activity name', { index: 0 }),
    activityType: attr('Activity type', { index: 1 }),
    startOfActivity: attr('Start of activity', { index: 2 }),
    endOfActivity: attr('End of activity', { index: 3 }),
    contact: belongsTo('i-i-s-c-r-m-contact', 'Telephone', {
      telephone: attr('Telephone', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
