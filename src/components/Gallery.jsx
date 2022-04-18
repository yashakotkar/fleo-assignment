import React from "react";
import Grid from "@mui/material/Grid";
import RepoCard from "./RepoCard";
import { useSelector } from "react-redux";
import { selectRepoData } from "../features/repoDataSlice";

const Gallery = () => {
  const repoData = useSelector(selectRepoData);
  const { repoList, state } = repoData;

  return (
    <Grid
      container
      spacing={1}
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      alignContent="stretch"
      wrap="wrap"
    >
      {repoList.length > 0 ? (
        repoList.map((repo, index) => (
          <Grid xs={12} sm={6} md={4} lg={3} key={index} item>
            <RepoCard
              link={repo.html_url}
              avatar={repo.owner.avatar_url}
              repoName={repo.full_name}
              ownerName={repo.owner.login}
              desc={repo.description}
              language={repo.language}
              fork={repo.forks_count}
              stars={repo.stargazers_count}
            />
          </Grid>
        ))
      ) : (
        <Grid item xs={12}>
          {state !== "loading" && <h1>No Repositories Found</h1>}
        </Grid>
      )}
    </Grid>
  );
};

export default Gallery;
