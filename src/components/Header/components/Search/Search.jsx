import React, { useState } from "react";
import "./index.scss";

export default function Search() {
  const [isWide, setIsWide] = useState();

  return (
    <div className="header_search_rapper" data-is-wide={isWide}>
      <input
        type="text"
        placeholder="Search or jump to..."
        onFocus={() => setIsWide(true)}
        onBlur={() => setIsWide(false)}
      />
      <img
        src="https://github.githubassets.com/images/search-key-slash.svg"
        alt=""
        srcset=""
        className="header_search_rapper_slash-icon"
      />
    </div>
  );
}
