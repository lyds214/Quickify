import React, { useState } from "react";
import PlaylistCard from "../components/playlist/PlaylistCard";
import PlaylistDisplay from "../components/playlist/PlaylistDisplay";

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
  playlistSpace: {
    marginTop: theme.spacing(5),
  },
}));

const PlaylistPage = () => {
  const classes = useStyles();
  const [selectedPlaylist, setSelectedPlaylist] = useState(false);

  return (
    <div className={classes.space}>
      <Box width="92%">
        <Card>
          <Grid container direction="row" justify="flex-start">
            <Grid item>
              <CardContent>
                <PlaylistCard
                  artistName="BTS"
                  onClick={() => setSelectedPlaylist(true)}
                />
              </CardContent>
            </Grid>
          </Grid>
        </Card>
        <Card className={classes.playlistSpace}>
          {selectedPlaylist ? (
            <PlaylistDisplay
              playlistName="BTS Songs"
              playlist={selectedPlaylist}
            />
          ) : null}
        </Card>
      </Box>
    </div>
  );
};

export default PlaylistPage;
