
class VideoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      autoplay: false
    };
  }

  handleClick (){
    this.setState({autoplay: !this.state.autoplay});
    this.props.autoClick();
  }

  render () {
    //console.log('VideoList', this.props);
    var text = this.state.autoplay ? "Turn Off Auto-Play" : "Click to Auto-Play";
    return (
      <div className="video-list media">
            <button type="button" className="btn btn-success" onClick={this.handleClick.bind(this)}>{text}</button>
        {this.props.videoData.map(item =>
            <VideoListEntry video={item} titleClick={this.props.titleClick}/>
        )}

      </div>
    )
  }
}
window.VideoList = VideoList;

