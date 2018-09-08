import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('rama-pagination', 'Integration | Component | rama pagination', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{rama-pagination}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#rama-pagination}}
      template block text
    {{/rama-pagination}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
