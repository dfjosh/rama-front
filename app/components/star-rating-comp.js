import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  rating: null,
  max: 5,
  icon: 'star',
  
  icons: computed('rating', 'max', function() {
    var icons = [];
    for (let i=1; i<=this.max; i++) {
      if (i <= this.rating) {
        icons.push(this.icon);
      } else {
        icons.push(this.icon + '-o')
      }
    }
    return icons;
  })
});
