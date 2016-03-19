class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentVideo: undefined,
      videoList: this.props.videos
    };
  }

  changeCurrentVideo(video) {
    console.log(this);
    this.setState({
      currentVideo: video
    }).bind;
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.videoList[0]}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videoList} parentProps={this.changeCurrentVideo.bind(this)} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App videos={window.exampleVideoData}/>, document.getElementById('app'));