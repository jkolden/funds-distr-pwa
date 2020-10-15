import React from "react";
import { Link } from "react-router-dom";

import "@mobiscroll/react-lite/dist/css/mobiscroll.min.css";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import Kauai from "../assets/images/kauai_sat.jpeg";
import Maui from "../assets/images/Maui_Landsat_Photo.jpg";
import Hawaii from "../assets/images/hawaii_mosaic.jpg";
import Oahu from "../assets/images/Oahu.jpeg";

import Projects from "../assets/static/Projects";
import Tasks from "../assets/static/Tasks";

import { deepOrange } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "auto",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  island: {
    objectFit: "fill",
  },
}));

export default function ListItemDisplay(props) {
  const { entry, filter, essId } = props;
  const classes = useStyles();

  const findProject = (pProject) => {
    let obj = Projects.find((o) => Object.keys(o) == pProject);
    return Object.values(obj);
  };

  const findTask = (pProject, pTask) => {
    let obj = Tasks[pProject].find((o) => Object.keys(o) == pTask);
    return Object.values(obj);
  };

  const images = {
    Kauai: Kauai,
    Maui: Maui,
    Hawaii: Hawaii,
    Oahu: Oahu,
  };

  return (
    <div>
      <ListItem alignItems="flex-start" divider>
        {!essId ? (
          <Link to={`/form/${localStorage.getItem("utcDate")}/${entry.id}`}>
            <ListItemAvatar>
              <Avatar
                alt={entry.locality}
                src={images[entry.locality]}
                classes={{ img: classes.island }}
              />
            </ListItemAvatar>
          </Link>
        ) : (
          <ListItemAvatar>
            <Avatar alt={entry.locality} src={images[entry.locality]} />
          </ListItemAvatar>
        )}

        <ListItemText
          primary={`Project: ${findProject(entry.project)}`}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {`${findTask(entry.project, entry.task)}, ${entry.hours} Hours`}
              </Typography>
            </React.Fragment>
          }
        />

        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            disabled={essId ? true : false}
            aria-label="delete"
            onClick={() => filter(entry.id)}
          >
            <HighlightOffIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </div>
  );
}
