import React, { useState } from "react";
import {
  Avatar,
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";

import SongCard from "../SongCard";

const useStyles = makeStyles((theme) => ({
  avatar: {
    height: 100,
    width: 100,
  },
  songSpace: {
    marginTop: theme.spacing(4),
  },
  playlistNameSpace: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

const PlaylistDisplay = ({ playlistName }) => {
  const classes = useStyles();

  return (
    <div className={classes.playlistNameSpace}>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={3}
      >
        <Grid item>
          <Avatar variant="square" className={classes.avatar} />
        </Grid>
        <Grid item>
          <Typography>{playlistName}</Typography>
        </Grid>
      </Grid>

      <Card
        className={classes.songSpace}
        style={{ backgroundColor: "#d9dadb" }}
        elevation={0}
      >
        <CardContent>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={3}
          ></Grid>
          <Grid item>
            <SongCard songTitle="ON" />
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default PlaylistDisplay;
