import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    saveAnswer() {
      var params = {
        response: this.get('response') ? this.get('response') : "",
        responder: this.get('responder') ? this.get('responder') : "",
        question: this.get('question')
      };
      this.set('addNewAnswer', false);
      this.set('response', "");
      this.set('responder', "");
      this.sendAction('saveAnswer', params);
    }
  }
});
