import React from "react";
import "./index.scss";
import moment from "moment";

export default function RepositoryCard({
  data: {
    name,
    isPrivate,
    updatedAt,
    languages: { nodes },
  },
}) {
  const language = nodes[0];

  return (
    <div className="repository_card">
      <div>
        <p className="repo_name flex" data-is-private={isPrivate}>
          {name}
        </p>
        <div className="repo_footer flex">
          {language ? <Language {...language} /> : null}
          {updatedAt ? (
            <div className="repo_updated_at repo_footer-elem">
              Updated {moment(updatedAt, "YYYYMMDD").fromNow()}
            </div>
          ) : null}
        </div>
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
