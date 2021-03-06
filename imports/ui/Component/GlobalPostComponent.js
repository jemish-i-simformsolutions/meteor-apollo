import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
  },
});

export default function GlobalPostComponent(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={props.img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Details of Donation
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <table>
              <tbody>
                <tr>
                  <td>Type Of Donation</td>
                  <td>{props.type}</td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>{props.address}</td>
                </tr>
                <tr>
                  <td>Pincode</td>
                  <td>{props.pincode}</td>
                </tr>
                <tr>
                  <td>Quantity</td>
                  <td>{props.quantity}</td>
                </tr>
              </tbody>
            </table>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Contact
        </Button>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
