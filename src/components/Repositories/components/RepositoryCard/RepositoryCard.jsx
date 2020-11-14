import React from "react";
import "./index.scss";
import moment from "moment";

export default function RepositoryCard({
  data: {
    name,
    isPrivate,
    updatedAt,
    languages: {
      nodes: [language],
    },
  },
}) {
  return (
    <div className="repository_card">
      <div>
        <p className="repo_name flex" data-is-private={isPrivate}>
          {name}
        </p>
        <div className="repo_footer flex">
          {language ? (
            <div className="language flex repo_footer-elem">
              <span
                className="co"
                style={{
                  backgroundColor: language?.color,
                }}
              ></span>
              {language?.name}
            </div>
          ) : null}
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
