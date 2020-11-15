import React, { useState } from "react";
import "./index.scss";
import Search from "./components/Search/Search";
import GitHubLogo from "../common/Icons/GitHubLogo";
import Notification from "../common/Icons/Notification";
import MiniModal from "../common/MiniModal/MiniModal";

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <div className="app_wrapper app_header">
      <div className="app_max_width">
        <button
          className="flex hamburger"
          onClick={() => setMenuIsOpen((prev) => !prev)}
        >
          <svg
            height="24"
            class="octicon octicon-three-bars"
            viewBox="0 0 16 16"
            version="1.1"
            width="24"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"
            ></path>
          </svg>
        </button>

        <div className="flex">
          <GitHubLogo />
          <div
            className={`flex mbl_links_container ${
              menuIsOpen ? "is_open" : ""
            }`}
          >
            <Search />
            <div className="app_header_links">
              <a href="/#">Pull requests</a>
              <a href="/#">Issues</a>
              <a href="/#">Marketplace</a>
              <a href="/#">Explore</a>
            </div>
          </div>
        </div>

        <div className="flex">
          <a href="/#" className="header_notification icon">
            <Notification />
          </a>

          <div className="flex hide_mbl">
            <details
              onBlur={(e) => {
                e?.currentTarget?.removeAttribute("open");
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
                e?.currentTarget?.removeAttribute("open");
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
                <div className="modal_section">
                  <p>
                    Signed in as <strong>Sholanke</strong>
                  </p>
                </div>
                <div className="modal_section">
                  <a href="/#" className="borederd_link flex">
                    🤚
                    <span className="text">
                      Let's build something awesome on the web
                    </span>
                  </a>
                </div>
                <div className="modal_section">
                  <a href="/#">Your profile</a>
                  <a href="/#">Your repositories</a>
                  <a href="/#">Your organizations</a>
                  <a href="/#">Your projects</a>
                  <a href="/#">Your stars</a>
                  <a href="/#">Your gists</a>
                </div>
                <div className="modal_section">
                  <a href="/#">Feature preview</a>
                  <a href="/#">Help</a>
                  <a href="/#">Settings</a>
                  <a href="/#">Sign out</a>
                </div>
              </MiniModal>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}
