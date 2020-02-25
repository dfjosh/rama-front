import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  title: attr(),
  imageUrl: attr(),
  bookUrl: attr(),
  author: attr(),
  published: attr(), // '1992'
  rating: attr('number'),
  body: attr(),
  completed: attr('date'),
  link: attr()
});
