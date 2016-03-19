class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentVideo: this.props.videos[0],
      videoList: this.props.videos
    };
  }

  changeCurrentVideo(video) {
    this.setState({
      currentVideo: video
    });
    console.log(this);
  }

  render() {
    return (
      <div>
        <Nav />
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