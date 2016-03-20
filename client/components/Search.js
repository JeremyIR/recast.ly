var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" id="searchBar" type="text" onKeyUp={
      _.debounce(
        function() {
          props.search(document.getElementById('searchBar').value);
        }, 1000)
    } />
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);

window.Search = Search;
