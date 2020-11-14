import React from "react";
import "./index.scss";

export default function UserProfile({ data: { avatarUrl, name, login, bio } }) {
  return (
    <div className="repo_grid_user-profile">
      <div className="dp_rapper_container">
        <img src={avatarUrl} alt="" className="dp_rapper" srcset="" />
        <span className="status">
          <span className="icon">👋🏾</span>
          <span className="text"></span>
        </span>
      </div>
      <div className="data">
        <h2 className="name">{name}</h2>
        <p className="username">{login}</p>
        <p className="bio">{bio}</p>
      </div>
    </div>
  );
}
