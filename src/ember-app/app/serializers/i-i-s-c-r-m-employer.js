import { Serializer as EmployerSerializer } from
  '../mixins/regenerated/serializers/i-i-s-c-r-m-employer';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(EmployerSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
