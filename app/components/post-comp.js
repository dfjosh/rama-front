import { computed } from '@ember/object';
import Component from '@ember/component';
import ENV from '../config/environment';
import Post from 'rama-front/models/post';

export default Component.extend({
  classNames: ['post-comp'],
  
  ENV: ENV,
  
  showAsterisk: true,
  showFeatureImage: true,
  showTaxonomy: true,
  showAttribution: true,
  showHorizontalRule: true,
  bodyLimit: null,
  gutterColumns: 2,
  
  contentColumns: computed('gutterColumns', function() {
    return 12 - this.gutterColumns * 2;
  }),
  
  actions: {
    publishDraft(post) {
      post.set('state', Post.PUBLISHED);
      post.save();
    }
  }
});
