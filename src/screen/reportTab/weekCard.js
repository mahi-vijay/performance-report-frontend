import React from "react";
import moment from "moment";
import { Box, Typography, Divider, Paper } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/core/styles";
import {ModeCommentIcon} from '@mui/icons-material';


const useStyles = makeStyles((theme) => ({
  weekbox: {
    color: "black",
    fontWeight: "100",
    margin: "1vh 0.5vh",
    padding: "3%",
    border: "1px solid #D9DAE4",
    height: "14vh",
    width: "calc(18% - 4px)",
    textAlign: "center",
    flexGrow: 2,
    [theme.breakpoints.up("md")]: {
      flexBasis: "20%",
      margin: "1vh 0.5vh",
    },
    [theme.breakpoints.up("lg")]: {
      flexBasis: "20%",
      margin: "1vh 0.5vh",
    },
  },
  weekcard: {
    color: "#0D4896",
    justifyContent: "center",
    display: "inline-block",
    border: "1px solid #D9DAE4",
    padding: "1%",
    marginTop: "0%",
    marginBottom: "2%",
    marginLeft: "2%",
    width: "calc(47% - 0%)",
    borderRadius: "15px !important",
    boxSizing: "border-box",
    [theme.breakpoints.down("md")]: {
      width: "calc(50% - 2% - 4px)",
    },
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 2% - 4px)",
      marginBottom: "2%",
    },
  },
  flexboxContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    alignContent: "space-between",
  },
  weekname: {
    fontSize: "3.5vh",
    color: "#0D4896",
  },
  weekdate: {
    fontSize: "medium",
    padding: "1%",
    float: "right",
    textAlign: "right",
    [theme.breakpoints.down("sm")]: {
      float: "none",
      textAlign: "left",
    },
  },
  subtitle: {
    fontSize: "2.5vh",
    justifyContent: "center",
  },
  mentorFeedback: {
    color: "#0D4897",
    fontSize: "2vh",
  },
  feedback: {
    marginTop: theme.spacing(2),
    color: "black",
  },
  feedbackIcon: {
    color: "#0e4d94",
    marginRight: "1%",
    padding: "auto",
  },
}));


export default function WeekCard({ weekData }) {

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const classes = useStyles();
  const {
    weekId,
    startingDate,
    endingDate,
    assignment,
    mentorFeedbacks,
    timeManagement,
    overallAssessment,
    communicationSkill,
    attendanceParticipation,
  } = weekData;

  // Determine the background color and border color based on the score
  const getColor = (label, score) => {
    if (label === "Overall Assessment") {
      score = score / 25;
    }
    if (label === "Assignment") {
      score = score / 2.5;
    }

    switch (true) {
      case score < 2.5 && score > 0:
        return { bgColor: "#F9DCDF", borderColor: "#E93820" }; // red

      case score < 3.25 && score >= 2.5:
        return { bgColor: "#F7E6B5", borderColor: "#E8B321" }; // yellow

      default:
        return { bgColor: "", borderColor: "" };
    }
  };

  const scoreBoxes = [
    { label: "Overall Assessment", score: overallAssessment },
    { label: "Assignment", score: assignment },
    { label: "Attendance & Participation", score: attendanceParticipation },
    { label: "Time Management", score: timeManagement },
    { label: "Communication Skills", score: communicationSkill },
  ];

  return (
    <Paper className={classes.weekcard}>
      <Box>
        <Typography variant="h4" className={classes.weekname}>
          Week {weekId}
          <span className={classes.weekdate}>
            {moment(startingDate).format("Do MMMM YYYY")} - {moment(endingDate).format("Do MMMM YYYY")}
          </span>
        </Typography>
      </Box>
      <Divider />
      <Box className={classes.flexboxContainer}>
        {scoreBoxes.map((scoreBox, index) => {
          const { bgColor, borderColor } = getColor(scoreBox.label, scoreBox.score);
          return (
            <Box
              key={index}
              className={`${classes.weekbox} ${classes.border}`}
              style={{
                backgroundColor: bgColor,
                borderColor: borderColor,
                width: isSmallScreen ? "100%" : "10%",
              }}
            >
              <Typography variant="h5">{scoreBox.score}</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                {scoreBox.label}
              </Typography>
            </Box>
          );
        })}
      </Box>
      <Divider />
      <Box className={classes.feedback}>
        <Typography variant="h6" className={classes.mentorFeedback}>
          {/* update icon with material ui icon */}
          {/* <ModeCommentIcon/> */}
          <span> </span>
          Mentor's Feedback
        </Typography>
        <Typography variant="body1">{mentorFeedbacks.join(". ")}</Typography>
      </Box>
    </Paper>
  );
}