var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData); //render a videos collection
    this.render();
  },

  render: function() {
    this.$el.html(this.template());

    // render videolistview
    new VideoListView({
      collection: this.videos,
      el: this.$('.list')
    }).render();

    //render videoplayerview
    new VideoPlayerView({
      model: this.videos.at(0),
      collection: this.videos,
      el: this.$('.player')
    }).render();

    //render searchview
    new SearchView({
      collection: this.videos,
      el: this.$('search')
    }).render();

    return this;
  },

  template: templateURL('src/templates/app.html')

});
