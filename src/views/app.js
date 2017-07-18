var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    // console.log('initializing app');
    this.videos = new Videos(); //render a videos collection
    //render videoplayerview
    this.videoPlayerView = new VideoPlayerView();
    //render searchview
    this.searchView = new SearchView();
    // render videolistview
    this.videoListView = new VideoListView({
      collection: this.videos
    }).render();
    // render app
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
