// import Ember from 'ember';
//
// export default Ember.Route.extend({
//   model() {
//     return this.store.findAll('question');
//   },
//   actions: {
//     update(question, params) {
//       debugger;
//       Object.keys(params).forEach(function(key) {
//         if(params[key]!==undefined) {
//           question.set(key,params[key]);
//         }
//       });
//       question.save();
//       this.transitionTo('admin');
//     },
//     destroyQuestion(question) {
//       var answer_deletions = question.get('answers').map(function(answer) {
//         return answer.destroyRecord();
//       });
//       Ember.RSVP.all(answer_deletions).then(function() {
//         return question.destroyRecord();
//       });
//       this.transitionTo('admin');
//     }
//   }
// });
