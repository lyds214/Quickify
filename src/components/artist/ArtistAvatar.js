import React from "react";
import {
  Avatar,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
}));

const ArtistAvatar = ({ artistName }) => {
  const classes = useStyles();

  return (
    <div>
      <Container>
        <Grid
          container
          direction="column"
          alignItems="center"
          justify="center"
          spacing={1}
        >
          <Grid item>
            <Avatar className={classes.avatar} />
          </Grid>
          <Grid item>
            <Typography>{artistName}</Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ArtistAvatar;
