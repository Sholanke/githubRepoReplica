import React from "react";
import "./index.scss";

export default function UserProfile({ data: { avatarUrl, name, login, bio } }) {
  return (
    <div className="repo_grid_user-profile">
      <div className="dp_rapper_container">
        <div className="dp_container">
          <img src={avatarUrl} alt="" className="dp_rapper" srcset="" />
          <span className="status">
            <span className="icon">👋🏾</span>
            <span className="text"></span>
          </span>
        </div>

        <div className="text_holder">
          <h2 className="name">{name}</h2>
          <p className="username">{login}</p>
        </div>
      </div>
      <div className="data">
        <p className="bio">{bio}</p>
      </div>
    </div>
  );
}
