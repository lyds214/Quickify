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

  playlistNameSpace: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  songSpace: {
    marginTop: theme.spacing(4),
  },
  row: {
    padding: theme.spacing(1),
  },
}));

const PlaylistDisplay = ({ playlistName }) => {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item>
          <SongCard className={classes.row} />
        </Grid>
        <Grid item>
          <SongCard className={classes.row} />
        </Grid>
        <Grid item>
          <SongCard className={classes.row} />
        </Grid>
        <Grid item>
          <SongCard className={classes.row} />
        </Grid>
        <Grid item>
          <SongCard className={classes.row} />
        </Grid>
        <Grid item>
          <SongCard className={classes.row} />
        </Grid>
        <Grid item>
          <SongCard className={classes.row} />
        </Grid>
        <Grid item>
          <SongCard className={classes.row} />
        </Grid>
        <Grid item>
          <SongCard className={classes.row} />
        </Grid>
        <Grid item>
          <SongCard className={classes.row} />
        </Grid>
        <Grid item>
          <SongCard className={classes.row} />
        </Grid>
      </React.Fragment>
    );
  }

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
            justifyContent="center"
            alignItems="center"
            spacing={3}
          >
            <Grid container item>
              <FormRow />
            </Grid>
            <Grid container item>
              <FormRow />
            </Grid>
            <Grid container item>
              <FormRow />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default PlaylistDisplay;
