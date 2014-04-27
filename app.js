window.Twtr = Ember.Application.create();

Twtr.User = Ember.Model.extend({
  profile_image_url: Ember.attr(),
  tweets: Ember.hasMany('tweets', {embedded: false}),
  name: Ember.attr(),
  screen_name: Ember.attr()
});

Twtr.Tweet = Ember.Model.extend({
  text: Ember.attr(),
  user: Ember.belongsTo('Twtr.User', {key: 'user', embedded: true}),
  created_at: Ember.attr(),
  favorite_count: Ember.attr(),
  retweet_count: Ember.attr()
});

Twtr.Router.map(function() {
  this.resource('tweets', { path: '/' });
});

Twtr.TweetsRoute = Ember.Route.extend({
  model: function() {
    return Twtr.Tweet.fetch();
  }
});
