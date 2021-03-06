class VideoListEntry extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    //debugger;
    return (
      <div className="video-list-entry">
        <div className="media-left media-middle">
          <img className="media-object" src={this.props.videoInfo.snippet.thumbnails.default.url} alt="" />
        </div>
        <div className="media-body">
          <div className="video-list-entry-title" onClick={this.props.parentProps.bind(null, this.props.videoInfo)}>{this.props.videoInfo.snippet.title}</div> 
          <div className="video-list-entry-detail">{this.props.videoInfo.snippet.description}</div>
        </div>
      </div>
      );
  }

}

window.VideoListEntry = VideoListEntry;
