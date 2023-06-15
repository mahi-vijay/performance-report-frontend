
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import {
  Box,
  Typography,
  Divider,
  Paper,
} from "@material-ui/core";
import useStyles from "./style";

function WeekCard({ weekData }) {
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
const convertAssignmentScore = (assignmentScore) => {
assignmentScore=assignmentScore/2.5;
return assignmentScore;
}
  const getColor = (score) => {
    if (score > 4){
      score= convertAssignmentScore(score);
    }
    // Determine the background color and border color based on the score
    switch (true) {
      case score < 2.5 && score > 0:
        return { bgColor: "#F9DCDF", borderColor: "#E93820", }; // red
      // case score < 62.5 && score > 4:
      //   return { bgColor: "#F9DCDF", borderColor: "#E93820" }; // red
      case score < 3.25 && score >= 2.5:
        return { bgColor: "#F7E6B5", borderColor: "#E8B321" }; // yellow
      // case score < 81.25 && score >= 62.5:
      //   return { bgColor: "#F7E6B5", borderColor: "#E8B321" }; // yellow
      default:
        return { bgColor: "", borderColor: "" };
    }
  };

  const scoreBoxes = [
    { label: "Overall Assessment", score: overallAssessment },
    { label: "Assignment", score: assignment },
    { label: "Attendance & Participation", score: attendanceParticipation },
    { label: "Time Management", score: timeManagement },
    { label: "Communication Skills", score: communicationSkill},
  ];

  return (
    <Paper className={classes.weekcard}>
      <Box>
        <Typography variant="h4" className={classes.weekname}>
          Week {weekId}
          <span className={classes.weekdate}>
            {moment(startingDate).format("Do MMMM YYYY")} -{" "}
            {moment(endingDate).format("Do MMMM YYYY")}
          </span>
        </Typography>
      </Box>
      <Divider />
      <Box className={classes.flexboxContainer}>
        {scoreBoxes.map((scoreBox, index) => {
          const { bgColor, borderColor } = getColor(scoreBox.score);
          return (
            <Box
              key={index}
              className={`${classes.weekbox} ${classes.border}`}
              style={{ backgroundColor: bgColor, borderColor: borderColor}}
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
        <Typography variant="h6">
          <FontAwesomeIcon className={classes.feedbackIcon} icon={faCommentAlt} />
          <span> </span>
          Mentor's Feedback
        </Typography>
        <Typography variant="body1">{mentorFeedbacks.join(". ")}</Typography>
      </Box>
    </Paper>
  );
}

export default WeekCard;

