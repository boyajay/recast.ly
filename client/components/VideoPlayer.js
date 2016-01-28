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
  }
  render () {
    return (
      <div className="video-player">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={"https://www.youtube.com/embed/" + this.props.video.id.videoId} allowFullScreen></iframe>
        </div>
        <div className="video-player-details">
          <h3>{this.props.video.snippet.title}</h3>
          <div>{this.props.video.snippet.description}</div>
        </div>
      </div>
    )
  }
}

window.VideoPlayer = VideoPlayer;
