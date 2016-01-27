// var VideoListEntry = () => (
//   <div className="video-list-entry">
//     <div className="media-left media-middle">
//       <img className="media-object" src="//i.ytimg.com/vi/dQw4w9WgXcQ/default.jpg" alt="" />
//     </div>
//     <div className="media-body">
//       <div className="video-list-entry-title">Video Title</div>
//       <div className="video-list-entry-detail">Video Description</div>
//     </div>
//   </div>
// );


class VideoListEntry extends React.Component {
  constructor(props) {
    super(props);
  }
  //passed a this.props.video
  render () {
    return(
      <div className="video-list-entry">
        <div className="media-left media-middle">
          <img className="media-object" src={this.props.video.snippet.thumbnails.default.url} alt="" />
        </div>
        <div className="media-body">
          <div className="video-list-entry-title">{this.props.video.snippet.title}</div>
          <div className="video-list-entry-detail">{this.props.video.snippet.description}</div>
        </div>
      </div>
    );
  }
}


window.VideoListEntry = VideoListEntry;
// props.videoData
//
//
//
//
//
//
//
//   "kind": "youtube#searchResult",
//     "etag": "\"abQHWywil_AkNqdqji7_FqiK-u4/Ykxo_CqKu8F8kcm-iNgL332gQTY\"",
//     "id": {
//       "kind": "youtube#video",
//       "videoId": "4ZAEBxGipoA"