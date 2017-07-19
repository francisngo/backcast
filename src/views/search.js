var SearchView = Backbone.View.extend({

  events: {
    'click button': 'inputSearch',
    'keyup input': 'keySearch'
  },

  keySearch: function(e) {
    //if enter key is press
    if (e.keyCode === 13) {
      //perform inputSearch
      this.inputSearch();
    }
  },

  inputSearch: function() {
    //assign a value to the input from search bar
    var query = this.$('input').val();
    //if a value is given t/f
    if (query) {
      //search on the collection with the given value
      this.collection.search(query);
    }
    //empty the input value bar
    this.$('input').val('');
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
