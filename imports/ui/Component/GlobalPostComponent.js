import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import QueueAnim from "rc-queue-anim";

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    height: 350,
  },
});

export default function GlobalPostComponent(props) {
  const classes = useStyles();

  return (
    <QueueAnim delay={200}>
      <Card className={classes.root} key="a">
        <CardActionArea>
          <QueueAnim delay={1500}>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={props.img}
              title="Contemplative Reptile"
              key="a"
            />

            <CardContent key="b">
              <Typography
                className="text-primary"
                gutterBottom
                variant="h5"
                component="h2"
              >
                Details of Donation
              </Typography>

              <Typography variant="body2" component="p">
                <table>
                  <tbody>
                    <tr>
                      <td className="text-success  btn-link">
                        Type Of Donation
                      </td>
                      <td>{props.type}</td>
                    </tr>
                    <tr>
                      <td className="text-success btn-link">Address</td>
                      <td>{props.address}</td>
                    </tr>
                    <tr>
                      <td className="text-success  btn-link">Pincode</td>
                      <td>{props.pincode}</td>
                    </tr>
                    <tr>
                      <td className="text-success  btn-link">Quantity</td>
                      <td>{props.quantity}</td>
                    </tr>
                  </tbody>
                </table>
              </Typography>
            </CardContent>
          </QueueAnim>
        </CardActionArea>
        <CardActions>
          <QueueAnim type={["right", "left"]} delay={1500}>
            <Button size="small" color="primary" key="a">
              Contact
            </Button>
            <Button size="small" color="primary" key="b">
              Share
            </Button>
          </QueueAnim>
        </CardActions>
      </Card>
    </QueueAnim>
  );
}
