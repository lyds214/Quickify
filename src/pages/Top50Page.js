import React from "react";
import PlaylistCard from "../components/playlist/PlaylistCard";

import { Box, Card, CardContent, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  space: {
    marginTop: theme.spacing(5),
    marginLeft: theme.spacing(16),
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
}));

const Top50Page = () => {
  const classes = useStyles();

  return (
    <div className={classes.space}>
      <Box width="92%">
        <Card>
          <Grid container direction="row" justify="flex-start">
            <Grid item>
              <CardContent>
                <PlaylistCard artistName="Billie Eillish" />
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </div>
  );
};

export default Top50Page;
