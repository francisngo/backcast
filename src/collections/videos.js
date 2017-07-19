var Videos = Backbone.Collection.extend({

  model: Video,

  url: 'https://www.googleapis.com/youtube/v3/search',

  search: function(query) {
    this.fetch({
      data: {
        q: query, //accepts a string => query should already be a string
        maxResults: 5, //retreive a limit of 5 results
        key: window.YOUTUBE_API_KEY,
        videoEmbeddable: true,
        part: 'snippet',
        type: 'video'

      }
    });
  },

  parse: function(data) {
    return data.items;
  }

});
