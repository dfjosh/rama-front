import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Component.extend({
  classNames: ['rama-post'],
  
  ENV: ENV,
  
  showAsterisk: true,
  showFeatureImage: true,
  showTaxonomy: true,
  showAttribution: true,
  showHorizontalRule: true,
  gutterColumns: 2,
  
  contentColumns: Ember.computed('gutterColumns', function() {
    return 12 - this.get('gutterColumns') * 2;
  })
});
