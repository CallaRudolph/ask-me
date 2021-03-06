import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('admin');
  this.route('read-question', {path: '/read-question/:question_id'});
  this.route('question-edit', {path: '/question-edit/:question_id'});
});

export default Router;
