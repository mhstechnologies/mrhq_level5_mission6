import './Search.css';

function Search () {
  return (
    <div style={{backgroundImage: `url(/search-banner-pad.jpg)`, 
                 backgroundRepeat: "no-repeat",
                 backgroundSize: 'cover'}}>
      <div className="Search_Background">
        <h1 className="Search_H1Tag">Lorem ipsum <br></br>dolor sit amet</h1>
        <form action="/" method="get">
          <div className="Search_Form">
            <input type="text" id="Search-Bar" name="search_bar" />
            <button type="submit" className="Search_Button">Search</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;