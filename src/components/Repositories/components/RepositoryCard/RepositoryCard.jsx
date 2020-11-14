import React from "react";
import "./index.scss";
import moment from "moment";

const truncatePoint = 100;

export default function RepositoryCard({
  data: {
    name,
    isPrivate,
    updatedAt,
    stargazerCount,
    forkCount,
    description,
    languages: { nodes },
  },
}) {
  const language = nodes[0];

  return (
    <div className="repository_card flex">
      <div>
        <div className="_top">
          <p className="repo_name flex" data-is-private={isPrivate}>
            {name}
          </p>
          {!!description && (
            <p className="repo_desc">
              {description.slice(0, truncatePoint)}
              {description.length > truncatePoint ? "..." : null}
            </p>
          )}
        </div>

        <div className="repo_footer flex">
          {language ? <Language {...language} /> : null}
          <ActionButton count={stargazerCount}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="octicon octicon-star mr-1"
              viewBox="0 0 16 16"
              version="1.1"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
              ></path>
            </svg>
          </ActionButton>
          <ActionButton count={forkCount}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-label="fork"
              class="octicon octicon-repo-forked"
              viewBox="0 0 16 16"
              version="1.1"
              role="img"
            >
              <path
                fill-rule="evenodd"
                d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
              ></path>
            </svg>
          </ActionButton>
          {updatedAt ? (
            <div className="repo_updated_at repo_footer-elem">
              Updated {moment(new Date(updatedAt)).fromNow()}
            </div>
          ) : null}
        </div>
      </div>
      <div className="_right">
        <button className="repo_star_button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="octicon octicon-star mr-1"
            viewBox="0 0 16 16"
            version="1.1"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
            ></path>
          </svg>
          Star
        </button>
      </div>
    </div>
  );
}

function Language({ color, name }) {
  return (
    <div className="language flex repo_footer-elem">
      <span
        className="co"
        style={{
          backgroundColor: color,
        }}
      ></span>
      {name}
    </div>
  );
}

function ActionButton({ children, count }) {
  return (
    count > 0 && (
      <button className="action_button">
        {children} {count}
      </button>
    )
  );
}
