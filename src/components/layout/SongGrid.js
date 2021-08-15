import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

import SongCard from "../SongCard";

const useStyles = makeStyles((theme) => ({
  row: {
    padding: theme.spacing(1),
  },
}));

const SongGrid = () => {
  const classes = useStyles();

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
};

export default SongGrid;
