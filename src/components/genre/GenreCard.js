import React from "react";
import {
  Card,
  CardContent,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    height: 250,
    width: 235,
  },
}));

const GenreCard = ({ genre }) => {
  const classes = useStyles();

  return (
    <Container>
      <Card className={classes.card}>
        <CardContent>
          <Typography>{genre}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default GenreCard;
