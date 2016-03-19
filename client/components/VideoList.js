var VideoList = (props) => (
  <div className="video-list media">
    {props.videos.map(video =>
          <VideoListEntry videoInfo={video} parentProps={props.parentProps}/>
        )}
  </div>
);

window.VideoList = VideoList;

