// var App = () => (
//   <div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer video={exampleVideoData[0]}/>
//     </div>
//     <div className="col-md-5">
//       <VideoList/>
//     </div>
//   </div>
// );

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: {id:{ videoId: "Please Wait"}, snippet: {title: "Please Wait", description: "Please Wait"}},
      videoData: []
    }
  }
  onTitleClick(newVideo) {
    this.setState({currentVideo: newVideo});
  }
  

  componentDidMount() {
    var ourCallback = (data) => {
      this.setState({currentVideo: data.items[0],
      videoData: data.items});
    }
    searchYouTube(undefined, ourCallback);
  }
  render () {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo} parentState={this.state}/>
        </div>
        <div className="col-md-5">
          <VideoList videoData={this.state.videoData} titleClick={this.onTitleClick.bind(this)}/>
        </div>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('app'));