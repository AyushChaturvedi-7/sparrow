import React from "react";

function SearchBar() {
  return (
    <>
      <div className="techwave_fn_searchbar">
        <div className="search__bar">
          <input
            className="search__input"
            type="text"
            placeholder="Search here..."
          />
          <img src="svg/search.svg" alt="" className="fn__svg search__icon" />
          <a className="search__closer" href="#">
            <img src="svg/close.svg" alt="" className="fn__svg" />
          </a>
        </div>
        <div className="search__results">
          <div className="results__title">Results</div>
          <div className="results__list">
            <ul>
              <li>
                <a href="#">Artificial Intelligence</a>
              </li>
              <li>
                <a href="#">
                  Learn about the impact of AI on the financial industry
                </a>
              </li>
              <li>
                <a href="#">Delve into the realm of AI-driven manufacturing</a>
              </li>
              <li>
                <a href="#">
                  Understand the ethical implications surrounding AI
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
