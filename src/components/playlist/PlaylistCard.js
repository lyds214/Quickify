import { React, useState } from "react";
import {
  Avatar,
  ButtonBase,
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    height: 250,
    width: 235,
  },
  cardAction: {
    display: "block",
    textAlign: "initial",
  },
  rounded: {
    height: 180,
    width: 200,
  },
}));

const PlaylistCard = ({ onClick, artistName }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <ButtonBase className={classes.cardAction} onClick={onClick}>
        <CardContent>
          <Grid container justify="center" alignItems="center" spacing={2}>
            <Grid item>
              <Avatar variant="rounded" className={classes.rounded} />
            </Grid>
            <Grid item>
              <Typography>{artistName}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </ButtonBase>
    </Card>
  );
};

export default PlaylistCard;
