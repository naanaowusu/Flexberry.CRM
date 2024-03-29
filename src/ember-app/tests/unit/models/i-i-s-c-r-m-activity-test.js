import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-c-r-m-activity', 'Unit | Model | i-i-s-c-r-m-activity', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-c-r-m-activity',
    'model:i-i-s-c-r-m-administrator',
    'model:i-i-s-c-r-m-contact',
    'model:i-i-s-c-r-m-employer',
    'model:i-i-s-c-r-m-lead',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
