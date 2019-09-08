import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  queryParams: ['limit', 'page', 'categories'],
  limit: 10,
  page: 1,
  categories: null,
  
  total: computed('model', function() {
    return this.model.meta.total;
  })
});
