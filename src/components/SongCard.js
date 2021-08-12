import React from "react";
import { Card, Typography } from "@material-ui/core";

const SongCard = ({ songTitle }) => {
  return (
    <Card>
      <Typography>{songTitle}</Typography>
    </Card>
  );
};

export default SongCard;
