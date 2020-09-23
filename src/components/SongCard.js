import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import SimplePopover from "./SimplePopover";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

export default function SongCard({ song }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={song.artworkUrl100}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {song.trackName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {song.artistName}
          </Typography>{" "}
          <Typography variant="body2" color="textSecondary" component="p">
            {song.collectionName}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <SimplePopover song={song} />
      </CardActions>
    </Card>
  );
}
