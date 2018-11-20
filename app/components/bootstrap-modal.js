import Component from '@ember/component';
// import { computed } from '@ember/object';
import $ from 'jquery';

export default Component.extend({
  id: null,
  
  didInsertElement() {
    $('.modal').modal('show');
    $('.modal').on('hide.bs.modal', function() {
      history.back();
    });
  },
});
