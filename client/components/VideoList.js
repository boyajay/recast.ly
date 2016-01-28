
class VideoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    //console.log('VideoList', this.props);
    return (
      <div className="video-list media">
        {exampleVideoData.map(item =>
            <VideoListEntry video={item} titleClick={this.props.titleClick}/>
        )}
      </div>
    )
  }
}
window.VideoList = VideoList;
