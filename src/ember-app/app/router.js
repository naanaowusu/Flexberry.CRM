import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-c-r-m-activity-l');
  this.route('i-i-s-c-r-m-activity-e',
  { path: 'i-i-s-c-r-m-activity-e/:id' });
  this.route('i-i-s-c-r-m-activity-e.new',
  { path: 'i-i-s-c-r-m-activity-e/new' });
  this.route('i-i-s-c-r-m-administrator-l');
  this.route('i-i-s-c-r-m-administrator-e',
  { path: 'i-i-s-c-r-m-administrator-e/:id' });
  this.route('i-i-s-c-r-m-administrator-e.new',
  { path: 'i-i-s-c-r-m-administrator-e/new' });
  this.route('i-i-s-c-r-m-contact-l');
  this.route('i-i-s-c-r-m-contact-e',
  { path: 'i-i-s-c-r-m-contact-e/:id' });
  this.route('i-i-s-c-r-m-contact-e.new',
  { path: 'i-i-s-c-r-m-contact-e/new' });
  this.route('i-i-s-c-r-m-employer-l');
  this.route('i-i-s-c-r-m-employer-e',
  { path: 'i-i-s-c-r-m-employer-e/:id' });
  this.route('i-i-s-c-r-m-employer-e.new',
  { path: 'i-i-s-c-r-m-employer-e/new' });
  this.route('i-i-s-c-r-m-lead-l');
  this.route('i-i-s-c-r-m-lead-e',
  { path: 'i-i-s-c-r-m-lead-e/:id' });
  this.route('i-i-s-c-r-m-lead-e.new',
  { path: 'i-i-s-c-r-m-lead-e/new' });
});

export default Router;
