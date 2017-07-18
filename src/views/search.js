var SearchView = Backbone.View.extend({

  //target HTML search element
  el: '.search-bar',

  //initialize
  initialize: function() {
    //render
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
