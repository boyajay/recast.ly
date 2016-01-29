
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



var videoDetails = (options,callback) => {
$.ajax({
      url: "https://www.googleapis.com/youtube/v3/videos",
      type: 'GET',
      data: {
        part: 'snippet',
        key: YOUTUBE_API_KEY,
        id: options
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
}

window.searchDetails = videoDetails;
var searchYouTube = _.debounce(search,400);
window.searchYouTube = searchYouTube;
