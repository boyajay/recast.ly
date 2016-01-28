class Nav extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <nav className="navbar">
        <div className="col-md-6 col-md-offset-3">
          <Search query={this.props.query}/>
        </div>
      </nav> 
    )
  }
}

window.Nav = Nav;
