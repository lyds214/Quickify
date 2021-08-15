import React from "react";

import {
  Avatar,
  Card,
  CardContent,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: 130,
    height: 130,
  },

  details: {
    display: "flex",
    flexDirection: "column",
  },
  root: {
    display: "flex",
    width: 130,
    height: 130,
  },
  space: {
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(1),
  },
}));

const SongCard = ({ onClick, songTitle, artistName }) => {
  const classes = useStyles();

  return (
    <div className={classes.space}>
      <Card className={classes.root}>
        <Avatar variant="square" className={classes.avatar} />
      </Card>
    </div>
  );
};

export default SongCard;
