// var VideoPlayer = () => (
//   <div className="video-player">
//     <div className="embed-responsive embed-responsive-16by9">
//       <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" allowFullScreen></iframe>
//     </div>
//     <div className="video-player-details">
//       <h3>Video Title</h3>
//       <div>Video Description</div>
//     </div>
//   </div>
// );

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {fullText: false};
  }

  handleClick (){
    this.setState({fullText: !this.state.fullText});
  }

  render () {
    //console.log('VideoPlayer', this.props)
    var text = this.state.fullText ? <div><VideoDetails description={this.props.description}/></div> :
      <div>{this.props.video.snippet.description}<span style={{color: 'blue'}}> CLICK FOR MORE</span></div>;
    var auto = this.props.autoPlay ? "?autoplay=1" : "";
    return (
      <div className="video-player">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={"https://www.youtube.com/embed/" + this.props.video.id.videoId + auto} allowFullScreen></iframe>
        </div>
        <div onClick={this.handleClick.bind(this)} className="video-player-details">
          <h3>{this.props.video.snippet.title}</h3>
            <div> 
              {text}
            </div>
        </div>
      </div>
    )
  }
}

window.VideoPlayer = VideoPlayer;
