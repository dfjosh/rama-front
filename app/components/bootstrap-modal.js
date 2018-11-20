import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({
  id: null,
  in: false,
  
  didInsertElement() {
    if (this.in === true) {
      $('.modal').modal('show');
    }
    $('.modal').on('hide.bs.modal', function() {
      history.back();
    });
  },
});
