import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | podcast', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:podcast');
    assert.ok(route);
  });
});
