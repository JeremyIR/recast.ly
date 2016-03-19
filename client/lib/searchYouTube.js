var searchYouTube = (options, callback) => {
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: options, 
    // $.extend({
    //   key: 'API_KEY',
    //   q: 'cat vidoes',
    //   part: 'snippet'
    // }),
    success: callback,
  });
};

window.searchYouTube = searchYouTube;
