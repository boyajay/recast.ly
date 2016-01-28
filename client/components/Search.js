
class Search extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div className="search-bar form-inline">
        <input onChange={() => this.props.query(document.getElementsByTagName('input'))} className="form-control" type="text" on/>
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div> 
    )
  }
}
window.Search = Search;
