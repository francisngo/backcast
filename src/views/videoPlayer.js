var VideoPlayerView = Backbone.View.extend({

  //target html video-player element
  el: '.video-player',

  //initialize
  initialize: function() {
    //render
    this.listenTo(this.collection, 'select', this.selectVideo);
  },

  selectVideo: function(selection) {
    this.model = selection;
    this.render();
  },

  render: function() {
    if (this.model) {
      this.$el.html(this.template(this.model.attributes));
      console.log(this.model.attributes);
    }
    this.$el.html('<div class="loading">Please wait...</div>');
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
