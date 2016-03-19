class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentQuery: 'cats',
      currentVideo: {
        "id": {
          "videoId": "4ZAEBxGipoA"
        },
        "snippet": {
        "title": "No video passed in yet",
        "description": "Load a video already!",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/4ZAEBxGipoA/default.jpg",
              "width": 120,
              "height": 90
            }
          }
        }, //this.props.videos[0],
      },
      videoList: [{        
        "id": {
          "videoId": "4ZAEBxGipoA"
        },
        "snippet": {
          "title": "No video passed in yet",
          "description": "Load a video already!",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/4ZAEBxGipoA/default.jpg",
              "width": 120,
              "height": 90
            }
          },
        }
      }], //this.props.videos
    };
  }

  changeCurrentVideo(video) {
    this.setState({
      currentVideo: video
    });
    console.log(this);
  }

  updateCurrentQuery(q) {
    console.log(this);
    this.setState({
      currentQuery: q
    });
    this.componentDidMount();
  }

  updateVideoList(videoArray) {
    this.setState({
      videoList: videoArray.items
    });
  }

  componentDidMount() {
    console.log('firing componentDidMount');
    window.searchYouTube({
      key: window.YOUTUBE_API_KEY,
      q: this.state.currentQuery,
      maxResults: 5,
      part: 'snippet',
    }, this.updateVideoList.bind(this));
  }


  render() {
    return (
      <div>
        <Nav search={this.updateCurrentQuery.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videoList} parentProps={this.changeCurrentVideo.bind(this)} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App videos={window.exampleVideoData}/>, document.getElementById('app'));