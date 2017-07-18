var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    console.log('initializing app');
    //render app
    //render videoplayerview
    //render searchview
    //render videolistview
    //render videolistentryview
    this.videos = new Videos();
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
