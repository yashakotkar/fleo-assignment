import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const RepoCard = ({
    link,
  avatar,
  ownerName,
  repoName,
  desc,
  language,
  fork,
  stars,
}) => {
  const StyledCard = styled(Card)(({ theme }) => ({
    height: "100%",
    transition: "boxShadow 0.3s ease-in-out",
    "&:hover": {
      boxShadow: theme.shadows[5],
      cursor: "pointer",
      "& .MuiCardHeader-title": {
        color: theme.palette.primary.main,
      },
    },
  }));

  const StyledCardContent = styled(CardContent)(({ theme }) => ({
    paddingTop: 0,
  }));

  const CountsField = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }));

  return (
    <a target="_blank" rel="noreferrer" href={link}>
      <StyledCard >
        <CardHeader
          avatar={
            <Avatar aria-label="">
              <img src={avatar} alt={ownerName} />
            </Avatar>
          }
          title={repoName}
          subheader={ownerName}
        />
        <StyledCardContent>
          <CountsField>
            <Typography variant="subtitle2" fontSize={12}>
              Fork {fork}
            </Typography>
            <Typography variant="subtitle2" fontSize={12}>
              Stars {stars}
            </Typography>
          </CountsField>
          <Typography color="textSecondary" variant="body2" fontSize={10}>
            {desc}
          </Typography>
          <Typography variant="subtitle2" fontSize={12}>
            {language}
          </Typography>
        </StyledCardContent>
      </StyledCard>
    </a>
  );
};

export default RepoCard;
