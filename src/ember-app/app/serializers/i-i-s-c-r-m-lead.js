import { Serializer as LeadSerializer } from
  '../mixins/regenerated/serializers/i-i-s-c-r-m-lead';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(LeadSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
