class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: {id:{ videoId: "Please Wait"}, snippet: {title: "Please Wait", description: "Please Wait"}},
      videoData: [],
      description: 'Please Wait',
      autoplay: false,
      test: false
    }
  }
  onTitleClick(newVideo) {
    this.setState({currentVideo: newVideo});
    searchDetails(newVideo.id.videoId, (data) => {
      this.setState({description: data.items[0].snippet.description});
    });
    if (this.state.test && !this.state.autoplay)
      this.setState({autoplay: !this.state.autoplay});
    else if (!this.state.test && this.state.autoplay)
      this.setState({autoplay: !this.state.autoplay});

  }

  onAutoClick() {
    this.setState({test: !this.state.test});
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
      searchDetails(data.items[0].id.videoId, (data) => {
        this.setState({description: data.items[0].snippet.description});
      });
      this.setState({currentVideo: data.items[0],
      videoData: data.items});

    });
  }
  render () {
    return (
      <div>
        <Nav query={this.getSearch.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}
          description={this.state.description} autoPlay={this.state.autoplay}/>
        </div>
        <div className="col-md-5">
          <VideoList videoData={this.state.videoData} titleClick={this.onTitleClick.bind(this)}
            autoClick={this.onAutoClick.bind(this)}/>
        </div>
      </div>
    )
  }
}
ReactDOM.render(<App options={{key: YOUTUBE_API_KEY, query: 'Super Bowl', max: 10}} />, document.getElementById('app'));