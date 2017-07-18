var VideoPlayerView = Backbone.View.extend({

  //target html video-player element
  el: '.video-player',

  //initialize
  initialize: function() {
    //render
    this.render();
  },

  render: function() {
    this.$el.html('<div class="loading">Please wait...</div>');
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
