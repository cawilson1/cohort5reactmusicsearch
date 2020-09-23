import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(2)
  }
}));

export default function SimplePopover({ song }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button size="small" color="primary" onClick={handleClick}>
        Learn More
      </Button>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
      >
        <Typography className={classes.typography}>
          Date Released: {song.releaseDate.slice(0, 10)}
        </Typography>
        <Typography className={classes.typography}>
          Track Price: {song.trackPrice}
        </Typography>
        <Typography className={classes.typography}>
          Collection Price: {song.collectionPrice}
        </Typography>
        <Typography className={classes.typography}>
          {`Track Length: ${Math.floor(
            song.trackTimeMillis / 1000 / 60
          )} m ${Math.floor((song.trackTimeMillis / 1000) % 60)} s`}
        </Typography>
      </Popover>
    </div>
  );
}
