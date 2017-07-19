var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    // console.log('initializing app');
    this.videos = new Videos(window.exampleVideoData); //render a videos collection

    // render app
    this.render();
  },

  render: function() {
    this.$el.html(this.template());

    //render videoplayerview
    new VideoPlayerView({
      model: this.videos.at(0),
      collection: this.videos,
      el: this.$('.player')
    }).render();

    //render searchview
    new SearchView();

    // render videolistview
    new VideoListView({
      collection: this.videos,
      el: this.$('.list')
    }).render();

    return this;
  },

  template: templateURL('src/templates/app.html')

});
