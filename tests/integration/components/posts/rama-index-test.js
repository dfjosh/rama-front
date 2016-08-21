import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('posts/rama-index', 'Integration | Component | posts/rama index', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{posts/rama-index}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#posts/rama-index}}
      template block text
    {{/posts/rama-index}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
