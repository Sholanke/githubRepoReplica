import React from "react";
import "./index.scss";
import Search from "./components/Search/Search";
import GitHubLogo from "../common/Icons/GitHubLogo";
import Notification from "../common/Icons/Notification";
import MiniModal from "../common/MiniModal/MiniModal";

export default function Header() {
  return (
    <div className="app_wrapper app_header">
      <div className="app_max_width">
        <div className="flex">
          <GitHubLogo />
          <Search />
          <div className="app_header_links">
            <a href="/#">Pull requests</a>
            <a href="/#">Issues</a>
            <a href="/#">Marketplace</a>
            <a href="/#">Explore</a>
          </div>
        </div>

        <div className="flex">
          <a href="/#" className="header_notification icon">
            <Notification />
          </a>

          <details
            onBlur={(e) => {
              e.currentTarget.removeAttribute("open");
            }}
            className="icon"
          >
            <summary>
              <svg
                class="octicon octicon-plus"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 2a.75.75 0 01.75.75v4.5h4.5a.75.75 0 010 1.5h-4.5v4.5a.75.75 0 01-1.5 0v-4.5h-4.5a.75.75 0 010-1.5h4.5v-4.5A.75.75 0 018 2z"
                ></path>
              </svg>
              <span className="drop_own_caret"></span>
            </summary>
            <MiniModal>
              <a href="/#">New repository</a>
              <a href="/#">Import repository</a>
              <a href="/#">New gist</a>
              <a href="/#">New organization</a>
              <a href="/#">New project</a>
            </MiniModal>
          </details>

          <details
            onBlur={(e) => {
              e.currentTarget.removeAttribute("open");
            }}
            className="icon"
          >
            <summary>
              <img
                className="profile_picture"
                src="https://avatars.dicebear.com/api/identicon/github.svg"
                alt=""
                srcset=""
              />
              <span className="drop_own_caret"></span>
            </summary>
            <MiniModal>
              <a href="/#">New repository</a>
              <a href="/#">Import repository</a>
              <a href="/#">New gist</a>
              <a href="/#">New organization</a>
              <a href="/#">New project</a>
            </MiniModal>
          </details>
        </div>
      </div>
    </div>
  );
}
