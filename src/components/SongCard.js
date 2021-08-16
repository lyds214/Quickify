import React from "react";

import { Avatar, Card, makeStyles, Typography } from "@material-ui/core";

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
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

const SongCard = ({ onClick, songAndArtist }) => {
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
