import { Serializer as AdministratorSerializer } from
  '../mixins/regenerated/serializers/i-i-s-c-r-m-administrator';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(AdministratorSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
