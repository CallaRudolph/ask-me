import Ember from 'ember';

export default Ember.Component.extend({
  delete(answer) {
    if(confirm('Are you sure you want to remove this comment?')) {
      this.sendAction('destroyAnswer', answer);
    }
  }
});
