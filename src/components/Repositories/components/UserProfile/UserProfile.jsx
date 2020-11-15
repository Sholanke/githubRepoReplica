import React from "react";
import "./index.scss";

export default function UserProfile({
  data: { avatarUrl, name, login, bio, status },
}) {
  return (
    <div className="repo_grid_user-profile">
      <div className="dp_rapper_container">
        <div className="dp_container">
          <img src={avatarUrl} alt="" className="dp_rapper" srcset="" />
          <span className="app_user_status">
            <span
              className="icon"
              dangerouslySetInnerHTML={{ __html: status.emojiHTML }}
            ></span>
            <a href="/#" className="text">
              {status.message}
            </a>
          </span>
        </div>

        <div className="text_holder">
          <h2 className="name">{name}</h2>
          <p className="username">{login}</p>
        </div>
      </div>

      <span className="app_user_status mbl open">
        <span
          className="icon"
          dangerouslySetInnerHTML={{ __html: status.emojiHTML }}
        ></span>
        <a href="/#" className="text">
          {status.message}
        </a>
      </span>

      <div className="data">
        <p className="bio">{bio}</p>
      </div>
    </div>
  );
}
