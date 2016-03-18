class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentVideo: null,
      videoList: this.props.videos
    };
  }

  //handling changing current video.

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.videoList[0]}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videoList} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App videos={window.exampleVideoData}/>, document.getElementById('app'));