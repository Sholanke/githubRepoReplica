import React from "react";
import "./index.scss";

export default function Search() {
  return (
    <div className="header_search_rapper">
      <input type="text" placeholder="Search or jump to..." />
      <img
        src="https://github.githubassets.com/images/search-key-slash.svg"
        alt=""
        srcset=""
        className="header_search_rapper_slash-icon"
      />
    </div>
  );
}
