import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({
  classNames: ['bootstrap-modal'],
  modalId: null,
  in: false,
  isRoute: false,
  size: null,
  
  didInsertElement() {
    if (this.isRoute === true) {
      $(`#${this.modalId}`).modal('show');
      $(`#${this.modalId}`).on('hide.bs.modal', function() {
        history.back();
      });
    }
  },
});
