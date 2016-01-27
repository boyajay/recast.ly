
class VideoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div className="video-list media">
        {exampleVideoData.map(item =>
            <VideoListEntry video={item} />
        )}
      </div>
    )
  }
}
window.VideoList = VideoList;
