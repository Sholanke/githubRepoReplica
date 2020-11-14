import React, { useEffect } from "react";
import RepositoryCard from "../RepositoryCard/RepositoryCard";

export default function RepositoriesUI({
  data: {
    repositories: { nodes: repositories },
  },
}) {
  useEffect(() => {
    console.log(repositories);
  }, [repositories]);
  return (
    <>
      {repositories?.reverse().map((repo) => (
        <RepositoryCard data={repo} />
      ))}
    </>
  );
}
