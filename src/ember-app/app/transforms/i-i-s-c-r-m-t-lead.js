import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import tLeadEnum from '../enums/i-i-s-c-r-m-t-lead';

export default FlexberryEnum.extend({
  enum: tLeadEnum,
  sourceType: 'IIS.CRM.tLead'
});
