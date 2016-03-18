var VideoList = (props) => (
  <div className="video-list media">
    {props.videos.map(video =>
          <VideoListEntry videoInfo={video} />
        )}
  </div>
);

window.VideoList = VideoList;

