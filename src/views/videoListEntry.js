var VideoListEntryView = Backbone.View.extend({

  //target HTML videolistentry element
  el: '.video-list-entry',

  //initialize
  initialize: function() {
    //render
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    // console.log(this.model.attributes);
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
