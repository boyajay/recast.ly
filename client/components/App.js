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
  
  getSearch (searchText){
    var text = searchText[0].value;
    this.props.options.query = text;
    searchYouTube(this.props.options, (data) => {
      this.setState({videoData: data.items});
    });
  }

  componentDidMount() {
    searchYouTube(this.props.options, (data) => {
      this.setState({currentVideo: data.items[0],
      videoData: data.items});
    });
  }
  render () {
    return (
      <div>
        <Nav query={this.getSearch.bind(this)}/>
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
ReactDOM.render(<App options={{key: YOUTUBE_API_KEY, query: 'Super Bowl', max: 10}} />, document.getElementById('app'));