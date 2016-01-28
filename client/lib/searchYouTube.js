
var searchYouTube = (options, callback) => {
$.ajax({
      url: "https://www.googleapis.com/youtube/v3/search",
      type: 'GET',
      data: {
        q: '2016',
        maxResults: 10,
        videoEmbeddable: true,
        type: 'video',
        key: YOUTUBE_API_KEY,
        part: 'snippet'
      },//JSON.stringify(options),
      contentType: 'application/json',
      success: function (data) {
        // Trigger a fetch to update the messages, pass true to animate
        callback(data);
        console.log(data);
      },
      error: function (data) {
        console.error('Youtube AJAX failed to GET');
      }
    });
  // TODO
};

window.searchYouTube = searchYouTube;
