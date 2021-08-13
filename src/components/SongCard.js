import React, { useState } from "react";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";

import PlayArrowIcon from "@material-ui/icons/PlayArrow";

const useStyles = makeStyles((theme) => ({
  avatar: {
    height: 110,
    width: 110,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(6),
    paddingBottom: theme.spacing(3),
  },
  card: {
    display: "flex",
    width: 280,
    height: 110,
  },
  songCardSpacing: {
    paddingLeft: theme.spacing(2),
  },
  space: {
    paddingTop: theme.spacing(4),
    paddingLeft: theme.spacing(1),
  },
}));

// Play Button Icon
const PlayButton = () => {
  return (
    <div>
      <IconButton>
        <PlayArrowIcon fontSize="medium" />
      </IconButton>
    </div>
  );
};

const SongCard = ({ onClick }) => {
  const classes = useStyles();

  return (
    <div className={classes.space}>
      <Card className={classes.card}>
        <Avatar variant="square" className={classes.avatar} />{" "}
        <CardContent>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
          >
            <Grid item>
              <Typography
                className={classes.songCardSpacing}
                component="h5"
                variant="h6"
              >
                Song Title
              </Typography>
            </Grid>
            <Grid item>
              <Button
                size="small"
                className={classes.songCardSpacing}
                onClick={onClick}
              >
                Artist Name
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default SongCard;
