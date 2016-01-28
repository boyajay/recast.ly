
var search = (options, callback) => {
$.ajax({
      url: "https://www.googleapis.com/youtube/v3/search",
      type: 'GET',
      data: {
        q: options.query,
        maxResults: options.max,
        videoEmbeddable: true,
        type: 'video',
        key: options.key,
        part: 'snippet'
      },//JSON.stringify(options),
      contentType: 'application/json',
      success: function (data) {
        // Trigger a fetch to update the messages, pass true to animate
        callback(data);
      },
      error: function (data) {
        console.error('Youtube AJAX failed to GET');
      }
    });
  // TODO
};


var searchYouTube = _.throttle(search,400);
window.searchYouTube = searchYouTube;