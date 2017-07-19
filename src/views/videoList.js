var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function() {
    // console.log('VideoListView rendering');
    this.$el.children().detach();
    this.$el.html(this.template());
    // this.collection.each(this.renderVideo, this);

    this.$('.video-list').append(
      this.collection.map(function(video) {
        var videoListEntryView = new VideoListEntryView({model: video}).render();
        return videoListEntryView.el;
      })
    );

    return this;
  },

  // renderVideo function takes in a video
  // create videoListEntryView as a new instance of VideoListEntryView, which takes in an object of the model of video
  // Then it renders the videoListEntryView
  // renderVideo: function(video) {
  //   var videoListEntryView = new VideoListEntryView({ model: video});
  //   this.$el.append(videoListEntryView);
  // },

  template: templateURL('src/templates/videoList.html')

});
