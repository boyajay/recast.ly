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
      currentVideo: exampleVideoData[0],
      videoData: exampleVideoData
    }
  }
  onTitleClick(newVideo) {
    //console.log('onTitleClick',this);
    this.setState({currentVideo: newVideo});
  }
  render () {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo} parentState={this.state}/>
        </div>
        <div className="col-md-5">
          <VideoList parentState={this.state} titleClick={this.onTitleClick.bind(this)}/>
        </div>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('app'));