var VideoListView = Backbone.View.extend({

  el: '.video-list',

  //initialize
  initialize: function() {
    //render
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function() {
    console.log('VideoListView rendering');
    this.$el.children().detach();
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
