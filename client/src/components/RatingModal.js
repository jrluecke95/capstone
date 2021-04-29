import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import {
  Button,
  FormControl,
  FormLabel,
  Grid
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  paper2: {
    position: 'absolute',
    width: 600,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
},
}));

export default function RatingModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [score, setScore] = useState(0)

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/api/v1/users/${props.UserId}/rate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rating: score,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          alert("rating posted");
        }
      });
  };

  const body = (
    <Grid style={{ marginTop: '10%' }} container className={classes.paper2} spacing={2}>
      <Grid item xs={12}>
        <h2 style={{ display: 'flex', justifyContent: 'center' }}>Rating</h2>
        <Grid item xs={12}>
          <form onSubmit={handleSubmit}>
            <FormControl style={{ display: 'flex', justifyContent: 'center' }}>
              <FormLabel style={{ marginLeft: '46%', marginTop: '2%' }}>Rating</FormLabel>
              <Rating style={{ marginLeft: '39%', marginTop: '2%' }} name="simple-controlled" value={score} onChange={(event, newValue) => {
                setScore(newValue)
              }} />
              <Button type="submit" style={{ marginTop: '5%' }} variant="contained" color="primary">Leave Rating</Button>
            </FormControl>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );

  return (
    <Grid item xs={4}>
      <Button type="button" onClick={handleOpen} variant="contained" color="primary">Leave Rating</Button>
      <Modal style={{ display: 'flex', justifyContent: 'center' }} open={open} onClose={handleClose} >
        {body}
      </Modal>
    </Grid>
  );
}
