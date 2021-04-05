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
import { Box, Collapse, IconButton } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));
export default function GlobalPostComponent(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <QueueAnim delay={200}>
      <Card className={classes.root} key="a">
        <CardActionArea>
          <QueueAnim delay={1500}>
            <Box color="red" borderRadius="2%">
              {" "}
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={props.img}
                title="Contemplative Reptile"
                key="a"
              />
            </Box>

            <CardContent key="b">
              <Typography className="text-primary" gutterBottom variant="h6">
                Details of Donation
              </Typography>

              <Typography variant="body2" component="p">
                <table>
                  <tbody>
                    <tr>
                      <td
                        colSpan="2"
                        className="text-center text-danger  font font-weight-normal"
                      >
                        <u> {props.type} Donation</u>
                      </td>
                    </tr>
                    <IconButton
                      className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                      })}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </IconButton>
                    {expanded ? "Show less" : "Show more"}
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
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
                    </Collapse>
                  </tbody>
                </table>
              </Typography>
            </CardContent>
          </QueueAnim>
        </CardActionArea>
        <CardActions>
          <QueueAnim type={["right", "left"]} delay={1500}>
            <Button size="small" className="text-primary" key="a">
              Contact
            </Button>
            <Button size="small" className="text-primary" key="b">
              Share
            </Button>
          </QueueAnim>
        </CardActions>
      </Card>
    </QueueAnim>
  );
}
