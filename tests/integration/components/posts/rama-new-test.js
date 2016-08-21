import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('posts/rama-new', 'Integration | Component | posts/rama new', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{posts/rama-new}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#posts/rama-new}}
      template block text
    {{/posts/rama-new}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
